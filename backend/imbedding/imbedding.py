from typing import List, Optional
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer,util
import torch
import re
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json

with open('menu_data.json','r',encoding='utf-8') as f:
    menu_data=json.load(f)

app = FastAPI(title="Menu Recommender", version="1.0.0")

# CORS 설정 - 모든 도메인에서 API 호출 허용
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 프로덕션에서는 특정 도메인만 허용하는 것이 좋습니다
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model_name = 'sentence-transformers/xlm-r-100langs-bert-base-nli-stsb-mean-tokens'
model=SentenceTransformer(model_name)
menu_texts = [m["text"] for m in menu_data]
menu_embeddings=model.encode(menu_texts,show_progress_bar=True,normalize_embeddings=True)


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
    동반자: str
    식사목적: str
    날씨: str
    언제: str
    운동상태:str
    선호음식:str
    제외음식:Optional[List[str]] = []
    예산: str
    알레르기: Optional[List[str]] = []

class RecommendItem(BaseModel):
    score: float
    text: dict

class RecommendResponse(BaseModel):
    query_text: str
    results: List[RecommendItem]

def recommend_core(q_obj, topk=10,exclude_allergens=None,exclude_foods=None):
    q_text = obj_to_natural_setence(q_obj)
    print("q_text",q_text)
    # print("exclude_allergens",exclude_allergens)
    q_emb = model.encode([q_text], normalize_embeddings=True)
    sim = util.cos_sim(torch.tensor(q_emb), torch.tensor(menu_embeddings))[0]

    # 핵심 속성 정확 매칭 보너스
    prefer = q_obj.get("선호음식")
    when = q_obj.get("언제")
    purpose = q_obj.get("식사목적")
    allergy=q_obj.get("알레르기")
    print("allergy",allergy)
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

    # 제외음식 필터링
    # 입력한 제외음식이 메뉴 text에 포함되어 있으면 점수를 -1e9로 만들어 100% 제외
    if exclude_foods:
        mask = []
        for m in menu_data:
            text = m.get("text", "")
            has_excluded_food = any(food in text for food in exclude_foods)
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



@app.get("/")
def root():
    return {"status": "ok", "service": "Menu Recommender"}

@app.post("/recommend", response_model=RecommendResponse)
def recommend_api(body: QueryBody):
    q_obj = {"언제": body.언제, "식사목적": body.식사목적, "날씨": body.날씨, "동반자": body.동반자, "예산": body.예산,"운동상태":body.운동상태,"선호음식":body.선호음식,"제외음식":body.제외음식}
    print("q_obj",q_obj)
    q_text, results = recommend_core(q_obj, 10, exclude_allergens=body.알레르기, exclude_foods=body.제외음식)
    results = deduplicate(results)  
    results = results[:3]
    print("results",results)
    return RecommendResponse(
        query_text=q_text,
        results=[RecommendItem(score=round(s, 6), text=t) for s, t in results]
    )   

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("imbedding:app", host="0.0.0.0", port=5001, reload=True)

# font_path = '/System/Library/Fonts/AppleSDGothicNeo.ttc'
# font_name = fm.FontProperties(fname=font_path).get_name()
# plt.rc('font', family=font_name)
# # 2. t-SNE를 사용한 3차원 차원 축소
# tsne = TSNE(n_components=3, random_state=42, perplexity=5) # perplexity는 데이터셋 크기에 따라 조절 필요
# tsne_embeddings = tsne.fit_transform(menu_embeddings)

# # 3. PCA를 사용한 3차원 차원 축소 (비교용)
# pca = PCA(n_components=3)
# pca_embeddings = pca.fit_transform(menu_embeddings)


# # 4. 시각화 함수 정의
# def visualize_embeddings(embeddings, title):
#     fig = plt.figure(figsize=(10, 8))
#     ax = fig.add_subplot(111, projection='3d')
    
#     # 3D 산점도 그리기
#     x = embeddings[:, 0]
#     y = embeddings[:, 1]
#     z = embeddings[:, 2]
    
#     # 메뉴명으로 색상 구분
#     # 같은 메뉴는 같은 색상으로 표시
#     menu_names = [s.split('메뉴')[0].strip() for s in menu_data]
#     unique_menus = sorted(list(set(menu_names)))
#     colors = plt.cm.get_cmap('tab20', len(unique_menus))
    
#     for i, menu_name in enumerate(unique_menus):
#         indices = [j for j, name in enumerate(menu_names) if name == menu_name]
#         ax.scatter(x[indices], y[indices], z[indices], color=colors(i), label=menu_name)
        
#     ax.set_title(title)
#     ax.set_xlabel('Component 1')
#     ax.set_ylabel('Component 2')
#     ax.set_zlabel('Component 3')
#     ax.legend(loc='best', bbox_to_anchor=(1.1, 1))
#     plt.tight_layout()
#     plt.show()

# # 5. t-SNE 결과 시각화
# visualize_embeddings(tsne_embeddings, 't-SNE 3D Visualization of Menu Embeddings')

# # 6. PCA 결과 시각화
# visualize_embeddings(pca_embeddings, 'PCA 3D Visualization of Menu Embeddings')