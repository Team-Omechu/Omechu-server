from typing import List, Optional
from pydantic import BaseModel,Field
from sentence_transformers import SentenceTransformer,util
import torch
import re
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
import os
import hashlib
from typing import Any, Dict
import redis
from dotenv import load_dotenv
load_dotenv()   

with open('menu_data.json','r',encoding='utf-8') as f:
    menu_data=json.load(f)

app = FastAPI(title="Menu Recommender", version="1.0.0", docs_url="/recommend/docs",
    openapi_url="/recommend/openapi.json")

# CORS 설정 - 모든 도메인에서 API 호출 허용
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 프로덕션에서는 특정 도메인만 허용하는 것이 좋습니다
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

os.makedirs("/app/data", exist_ok=True)
EMB_PATH = "/app/data/menu_embeddings.pt"

model_name = "sentence-transformers/xlm-r-100langs-bert-base-nli-stsb-mean-tokens"
model = SentenceTransformer(model_name)

menu_texts = [m["text"] for m in menu_data]

if os.path.exists(EMB_PATH):
    menu_embeddings = torch.load(EMB_PATH, map_location="cpu")
else:
    menu_embeddings = model.encode(
        menu_texts,
        show_progress_bar=True,
        normalize_embeddings=True
    )
    menu_embeddings = torch.tensor(menu_embeddings)
    torch.save(menu_embeddings, EMB_PATH)

REDIS_HOST = os.getenv("REDIS_HOST", "my_redis")  # 도커 네트워크면 서비스명
REDIS_PORT = int(os.getenv("REDIS_PORT", "6379"))

r = redis.Redis(host=REDIS_HOST, port=REDIS_PORT, decode_responses=True)

def obj_to_natural_setence(q,menu="메뉴"):
    who=q.get('동반자')
    prefer=q.get("선호음식")
    when=q.get('언제','')
    purpose=q.get('식사목적','')

    if who=="혼자":
        who_pharase="혼자 즐기기 좋은"
    else:
        who_pharase=f"{who}과 함께 즐기기 좋은"

    if prefer:
        return " ".join([
        f"{who_pharase} {menu}입니다.",
        f"{purpose}로 좋은 선택이며,",
        f"{q.get('날씨','')} 날씨에 어울립니다.",
        f"{when} 식사에 적합하며,",
        f"현재 운동을 {q.get('운동상태','')}인 분께도 잘 맞습니다.",
        f"선호 음식은 {prefer}이며,",
        f"예산은 {q.get('예산','')}입니다.",
        # 중요한 속성 강조를 위한 반복
        f"선호 음식은 {prefer}이며,",
        f"{when} 식사에 적합하며,",
        f"{purpose}로 좋은 선택입니다.",
    ])
    else:
        return " ".join([
        f"{who_pharase} {menu}입니다.",
        f"{purpose}로 좋은 선택이며,",
        f"{q.get('날씨','')} 날씨에 어울립니다.",
        f"{when} 식사에 적합하며,",
        f"현재 운동을 {q.get('운동상태','')}인 분께도 잘 맞습니다.",
        f"예산은 {q.get('예산','')}입니다.",
    ])

class QueryBody(BaseModel):
    동반자: Optional[str]=Field(None, description="혼자, 친구, 가족 등",examples=["혼자","친구","가족"])
    식사목적: Optional[str]=Field(None, description="식사 목적",examples=["든든한 한 끼 식사","술 안주","간식","기념일 식사"])
    날씨: Optional[str]=Field(None, description="날씨",examples=["맑음","추움","비","더움"])
    언제: Optional[str]=Field(None, description="언제 식사하는지",examples=["아침","점심","저녁","야식"])
    운동상태: Optional[str]=Field(None, description="운동 상태",examples=["다이어트 중","증량 중","유지 중"])
    선호음식: Optional[str]=Field(None, description="선호하는 음식",examples=["한식","양식","중식","일식"])
    제외음식:Optional[List[str]] = Field([], description="제외하고 싶은 음식",examples=[["리조토","불고기"]])
    예산: Optional[str]=Field(None, description="예산",examples=["1만원 미만","1만원~3만원","3만원~5만원","5만원 "])
    알레르기: Optional[List[str]] = Field([], description="알레르기 유발 음식",examples=[["땅콩","새우","계란"]])
    이전추천메뉴:Optional[List[str]] = Field([], description="이전에 추천받은 메뉴 리스트",examples=[["갈비탕","비빔밥"]])

class RecommendItem(BaseModel):
    menu: str
    text: str
    allergens: List[str] = []

class RecommendResponse(BaseModel):
    query_text: str
    results: List[RecommendItem]

def recommend_core(q_obj, topk=10,exclude_allergens=None,exclude_foods=None,seen_menus=None):
    q_text = obj_to_natural_setence(q_obj)
    print("q_text",q_text)
    # print("exclude_allergens",exclude_allergens)
    q_emb = model.encode([q_text], normalize_embeddings=True)
    sim = util.cos_sim(torch.tensor(q_emb), torch.tensor(menu_embeddings))[0]

    # 핵심 속성 정확 매칭 보너스
    prefer = q_obj.get("선호음식")
    when = q_obj.get("언제")
    purpose = q_obj.get("식사목적")

    bonus = []
    for m in menu_data:
        text = m.get("text", "")
        score_bonus = 0.0
        # 선호음식 매칭 시 큰 보너스
        if prefer and prefer in text:
            score_bonus += 0.15
        # 언제(아침/점심/저녁) 매칭 시 보너스
        if when and when in text:
            score_bonus += 0.10
        # 식사목적 매칭 시 보너스
        if purpose and purpose in text:
            score_bonus += 0.10
        bonus.append(score_bonus)

    bonus_tensor = torch.tensor(bonus, dtype=sim.dtype)
    sim = sim + bonus_tensor

    total_exclude = set(exclude_foods or [])
    if seen_menus:
        total_exclude.update(seen_menus)

    # 제외음식 필터링
    # 입력한 제외음식이 메뉴 text에 포함되어 있으면 점수를 -1e9로 만들어 100% 제외
    if total_exclude:
        mask = []
        for m in menu_data:
            text = m.get("text", "")
            has_excluded_food = any(food in text for food in total_exclude)
            mask.append(0.0 if has_excluded_food else 1.0)
        mask_tensor = torch.tensor(mask, dtype=sim.dtype)
        sim = sim * mask_tensor + (mask_tensor.eq(0) * (-1e9))

    # 입력한 알레르기가 있는 메뉴의 점수를 -1e9 (음의 무한대)로 만들어 제외 시킨다
    # 해당 알레르기를 가진 메뉴는 100% 제외된다
    if exclude_allergens:
        ban = set(exclude_allergens)
        mask = []
        for m in menu_data:
            has_conflict = bool(set(m.get("allergens", [])) & ban)
            mask.append(0.0 if has_conflict else 1.0)
        mask = torch.tensor(mask, dtype=sim.dtype)
        sim = sim * mask + (mask.eq(0) * (-1e9))
    scores, idxs = torch.topk(sim, k=topk)
    results = [(float(scores[i]), menu_data[idxs[i]]) for i in range(topk)]
    # print(q_text, results)
    return q_text, results

def extract_dish(text: str) -> str:
    m = re.search(r'즐기기 좋은\s*([가-힣A-Za-z\s]+?)\s*메뉴입니다', text)
    return m.group(1).strip() if m else text

def deduplicate(results):
    seen = set()
    unique = []
    for score, text in results:
        print("text",text.get("text"))
        dish = extract_dish(text.get("text"))  # "갈비탕", "냉면", "까르보나라 파스타" 등
        if dish not in seen:
            seen.add(dish)
            unique.append((score, text))
    return unique

ORDER_INSENSITIVE_LIST_FIELDS = {"제외음식", "알레르기"}

def normalize_for_cache(obj: Any) -> Any:
    if isinstance(obj, dict):
        return {k: normalize_for_cache(v) for k, v in obj.items()}
    if isinstance(obj, list):
        return [normalize_for_cache(x) for x in obj]
    return obj

def make_recommend_cache_key(q_obj: Dict[str, Any], body) -> str:
    payload = dict(q_obj)

    payload["알레르기"] = body.알레르기 or []

    for field in ORDER_INSENSITIVE_LIST_FIELDS:
        if field in payload and isinstance(payload[field], list):
            payload[field] = sorted(payload[field])

    payload = {k: v for k, v in payload.items() if v is not None}

    payload = normalize_for_cache(payload)

    canonical = json.dumps(
        payload,
        sort_keys=True,
        ensure_ascii=False,
        separators=(",", ":")
    )

    digest = hashlib.sha1(canonical.encode("utf-8")).hexdigest()

    return f"cache:recommend:{digest}"


@app.get("/recommend")
def root():
    return {"status": "ok", "service": "Menu Recommender"}

@app.post("/recommend/menu", response_model=RecommendResponse)
def recommend_api(body: QueryBody):
    q_obj = {"언제": body.언제, "식사목적": body.식사목적, "날씨": body.날씨, "동반자": body.동반자, "예산": body.예산,"운동상태":body.운동상태,"선호음식":body.선호음식,"제외음식":body.제외음식}
    cache_key = make_recommend_cache_key(q_obj, body)

    # 1) 캐시 조회
    cached = r.get(cache_key)
    if cached:
        data = json.loads(cached)
        return RecommendResponse(**data)

    # 2) 캐시 미스면 기존 로직 수행
    q_text, results = recommend_core(
        q_obj,
        20,
        exclude_allergens=body.알레르기,
        exclude_foods=body.제외음식,
        seen_menus=body.이전추천메뉴
    )
    results = deduplicate(results)
    results = results[:3]

    items = []
    for score, t in results:
        sentence = t.get("text", "")
        menu_name = extract_dish(sentence)

        items.append(
            RecommendItem(
                menu=menu_name,
                text=sentence,
                allergens=t.get("allergens", []),
        )
    )

    response = RecommendResponse(query_text=q_text, results=items)

    # 캐시에 저장
    ttl_seconds = 120
    r.setex(cache_key, ttl_seconds, response.model_dump_json())

    return response
