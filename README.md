<!-- ============================================================
     Omechu Server - Backend API
     Brand Color: #ff7676 (primary) | #f9e4ff (background)
     ============================================================ -->

<div align="center">

# 🍽️ 오메추 Server

<img src="https://img.shields.io/badge/Node.js-ff7676?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/Express.js_5-ff7676?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/Prisma_6-ff7676?style=for-the-badge&logo=prisma&logoColor=white" />
<img src="https://img.shields.io/badge/MySQL_8-ff7676?style=for-the-badge&logo=mysql&logoColor=white" />
<img src="https://img.shields.io/badge/Docker-ff7676?style=for-the-badge&logo=docker&logoColor=white" />
<img src="https://img.shields.io/badge/Redis-ff7676?style=for-the-badge&logo=redis&logoColor=white" />

<br/>

**사용자 맥락 기반 맞춤 메뉴/맛집 추천 서비스 — 백엔드 API**

*Context-aware menu & restaurant recommendation — Backend API*

<br/>

<a href="https://omechu.log8.kr/">🐥 서비스 바로가기</a> ·
<a href="https://github.com/Team-Omechu/Omechu-web">Frontend Repo</a> ·
<a href="https://github.com/Team-Omechu/Omechu-AI">AI Repo</a>

</div>

---

## 📌 개요

**오메추 서버**는 마이크로서비스 아키텍처 기반의 REST API 서버입니다.
Docker Compose로 서비스를 오케스트레이션하며, API Gateway 패턴을 통해 클라이언트 요청을 각 서비스로 라우팅합니다.

---

## 🏗️ 시스템 아키텍처

```
Client (Frontend)
       ↓
[ API Gateway ] ← default_container (port 3000)
       ↓
┌──────────────────────────────────────────────────┐
│  auth_api    │  menu_api     │  user_api         │
│  (인증/인가) │  (메뉴/맛집)  │  (사용자/프로필)  │
│  Express.js  │  Express.js   │  Express.js       │
│  + Prisma    │  + Prisma     │  + Prisma         │
│              │  + Socket.IO  │  + node-cron      │
└──────────────────────────────────────────────────┘
       ↓                ↓               ↓
  [ MySQL 8.0 ]    [ Redis ]    [ AWS S3 ]
       ↓
[ imbedding_api ] ← FastAPI (Python, port 5001)
  OpenAI 임베딩 기반 메뉴 추천
```

### 서비스별 역할

| Service | Port | Description |
| :--- | :--- | :--- |
| **default_container** | 3000 | API Gateway — 클라이언트 요청 라우팅 |
| **auth_api** | — | 인증/인가 (JWT, 카카오/구글 OAuth, 이메일 인증, 비밀번호 재설정) |
| **menu_api** | — | 메뉴 추천/검색/필터, 맛집 CRUD, 리뷰, 찜, 메뉴배틀 (WebSocket) |
| **user_api** | — | 프로필 관리, 온보딩, 먹부림 기록, 식사 알림, 문의 |
| **imbedding_api** | 5001 | OpenAI 임베딩 기반 메뉴 유사도 추천 (FastAPI + Redis 캐싱) |
| **omechu_db** | 3306 | MySQL 8.0 (utf8mb4) |

---

## ⚒️ 기술 스택

<table>
  <tr>
    <th align="center" width="18%">
      <img src="https://img.shields.io/badge/Runtime-000000?style=for-the-badge" alt="Runtime"/>
    </th>
    <td align="left">
      <img src="https://img.shields.io/badge/Node.js-ff7676?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
      <img src="https://img.shields.io/badge/Python-ff7676?style=for-the-badge&logo=python&logoColor=white" alt="Python"/>
    </td>
  </tr>
  <tr>
    <th align="center">
      <img src="https://img.shields.io/badge/Framework-000000?style=for-the-badge" alt="Framework"/>
    </th>
    <td align="left">
      <img src="https://img.shields.io/badge/Express.js_5-ff7676?style=for-the-badge&logo=express&logoColor=white" alt="Express.js 5"/>
      <img src="https://img.shields.io/badge/FastAPI-ff7676?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI"/>
    </td>
  </tr>
  <tr>
    <th align="center">
      <img src="https://img.shields.io/badge/Database-000000?style=for-the-badge" alt="Database"/>
    </th>
    <td align="left">
      <img src="https://img.shields.io/badge/MySQL_8-ff7676?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL 8"/>
      <img src="https://img.shields.io/badge/Prisma_6-ff7676?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma 6"/>
      <img src="https://img.shields.io/badge/Redis-ff7676?style=for-the-badge&logo=redis&logoColor=white" alt="Redis"/>
    </td>
  </tr>
  <tr>
    <th align="center">
      <img src="https://img.shields.io/badge/AI-000000?style=for-the-badge" alt="AI"/>
    </th>
    <td align="left">
      <img src="https://img.shields.io/badge/OpenAI-ff7676?style=for-the-badge&logo=openai&logoColor=white" alt="OpenAI"/>
    </td>
  </tr>
  <tr>
    <th align="center">
      <img src="https://img.shields.io/badge/Auth-000000?style=for-the-badge" alt="Auth"/>
    </th>
    <td align="left">
      <img src="https://img.shields.io/badge/JWT-ff7676?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT"/>
      <img src="https://img.shields.io/badge/Kakao_OAuth-ff7676?style=for-the-badge&logo=kakao&logoColor=white" alt="Kakao"/>
      <img src="https://img.shields.io/badge/Google_OAuth-ff7676?style=for-the-badge&logo=google&logoColor=white" alt="Google"/>
    </td>
  </tr>
  <tr>
    <th align="center">
      <img src="https://img.shields.io/badge/Infra-000000?style=for-the-badge" alt="Infra"/>
    </th>
    <td align="left">
      <img src="https://img.shields.io/badge/Docker-ff7676?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"/>
      <img src="https://img.shields.io/badge/Docker_Compose-ff7676?style=for-the-badge&logo=docker&logoColor=white" alt="Docker Compose"/>
      <img src="https://img.shields.io/badge/AWS_EC2-ff7676?style=for-the-badge&logo=amazonec2&logoColor=white" alt="AWS EC2"/>
      <img src="https://img.shields.io/badge/AWS_S3-ff7676?style=for-the-badge&logo=amazons3&logoColor=white" alt="AWS S3"/>
      <img src="https://img.shields.io/badge/GitHub_Actions-ff7676?style=for-the-badge&logo=githubactions&logoColor=white" alt="GitHub Actions"/>
    </td>
  </tr>
  <tr>
    <th align="center">
      <img src="https://img.shields.io/badge/Others-000000?style=for-the-badge" alt="Others"/>
    </th>
    <td align="left">
      <img src="https://img.shields.io/badge/Socket.IO-ff7676?style=for-the-badge&logo=socketdotio&logoColor=white" alt="Socket.IO"/>
      <img src="https://img.shields.io/badge/Swagger-ff7676?style=for-the-badge&logo=swagger&logoColor=white" alt="Swagger"/>
      <img src="https://img.shields.io/badge/Nodemailer-ff7676?style=for-the-badge&logoColor=white" alt="Nodemailer"/>
    </td>
  </tr>
</table>

---

## 📁 프로젝트 구조

```text
backend/
├── default_container/     # API Gateway (Express.js)
│   └── index.js
├── auth/                  # 인증 마이크로서비스
│   ├── src/
│   │   ├── controllers/   # 요청/응답 처리
│   │   ├── services/      # 비즈니스 로직
│   │   ├── repositories/  # 데이터 액세스 (Prisma)
│   │   ├── dtos/          # 데이터 전송 객체
│   │   ├── utils/         # 유틸리티
│   │   └── generated/     # Prisma Client (auto-generated)
│   └── prisma/
│       └── schema.prisma  # 스키마 정의
├── menu/                  # 메뉴/맛집 마이크로서비스
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── repositories/
│   │   ├── websocket/     # 메뉴배틀 WebSocket (Socket.IO)
│   │   └── utils/         # 배틀 크론잡 등
│   └── prisma/
├── user/                  # 사용자 마이크로서비스
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── repositories/
│   │   └── dtos/
│   └── prisma/
├── imbedding/             # AI 임베딩 서비스 (Python)
│   ├── imbedding.py       # FastAPI 엔드포인트
│   ├── menu_data.json     # 메뉴 데이터
│   └── requirements.txt
└── docker-compose.yaml    # 전체 서비스 오케스트레이션
```

> 각 마이크로서비스는 **3-Layer Architecture** (Controller → Service → Repository)를 따릅니다.

---

## 🛠 설치 및 실행

### Prerequisites

| Requirement | Version |
|---|---|
| Docker & Docker Compose | Latest |
| Node.js | 18+ |
| npm | 9+ |

### Docker 실행 (권장)

```bash
# 1) 클론
git clone https://github.com/Team-Omechu/Omechu-server.git
cd Omechu-server/backend

# 2) 환경 변수 설정
cp auth/.env.example auth/.env.production
cp menu/.env.example menu/.env.production
cp user/.env.example user/.env.production
cp imbedding/.env.example imbedding/.env

# 3) Docker 네트워크 생성 (최초 1회)
docker network create omechu-net

# 4) 전체 서비스 실행
docker compose up -d

# 5) 확인
docker compose ps
```

### 개별 서비스 로컬 실행

```bash
cd backend/auth    # or menu, user
npm install
npx prisma generate
npm run dev
```

### API 문서 (Swagger)

각 서비스 실행 후 Swagger UI에서 API 명세를 확인할 수 있습니다.

---

## 🔗 API 설계 원칙

- **RESTful API**: 표준 HTTP 메서드 사용
- **일관된 응답 형식**: `{ resultType, error, success }` 구조
- **에러 코드 체계**: 도메인별 고유 에러 코드
- **인증**: JWT Bearer 토큰 + Refresh 토큰
- **Swagger 문서화**: 모든 API 엔드포인트 자동 문서화

---

## 🤝 협업 규칙

### 브랜치 전략 (Git Flow)

```
main         ← 배포용 (실서비스 운영)
│
└── develop  ← 개발 통합 브랜치
    ├── feat/<설명>-#<issue>
    ├── fix/<설명>-#<issue>
    └── refactor/<설명>-#<issue>
```

### 커밋 컨벤션

```bash
<type>: <subject> (#<issue_number>)
```

| Type | Description |
| :--- | :--- |
| `feat` | 새로운 기능 추가 |
| `fix` | 버그 수정 |
| `refactor` | 코드 리팩토링 |
| `docs` | 문서 수정 |
| `chore` | 빌드/설정 등 기타 |
| `init` | 프로젝트 초기 설정 |

---

## 👥 팀원

> **UMC 8기** 대학교 연합 IT 동아리 장기 프로젝트

<table>
  <tr>
    <td align="center" width="150">
      <a href="https://github.com/3tjwls7"><img src="https://github.com/3tjwls7.png" width="100" alt="김서진"/></a><br/>
      <b>위니</b><br/>
      <sub>김서진</sub><br/>
      <a href="https://github.com/3tjwls7"><img src="https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub"/></a>
    </td>
    <td align="center" width="150">
      <a href="https://github.com/Ncs89"><img src="https://github.com/Ncs89.png" width="100" alt="노찬솔"/></a><br/>
      <b>솔솔</b><br/>
      <sub>노찬솔</sub><br/>
      <a href="https://github.com/Ncs89"><img src="https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub"/></a>
    </td>
    <td align="center" width="150">
      <a href="https://github.com/CokeTown"><img src="https://github.com/CokeTown.png" width="100" alt="문조원"/></a><br/>
      <b>코크</b><br/>
      <sub>문조원</sub><br/>
      <a href="https://github.com/CokeTown"><img src="https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub"/></a>
    </td>
    <td align="center" width="150">
      <a href="https://github.com/ralph-Jung"><img src="https://github.com/ralph-Jung.png" width="100" alt="정휘준"/></a><br/>
      <b>랄프</b><br/>
      <sub>정휘준</sub><br/>
      <a href="https://github.com/ralph-Jung"><img src="https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub"/></a>
    </td>
  </tr>
</table>

---

<p align="center">
  <sub>UMC 8th · Omechu · 2025</sub>
</p>
