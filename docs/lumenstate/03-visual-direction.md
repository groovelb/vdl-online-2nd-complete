# Lumenstate: Visual Direction

> 이 문서가 결정하는 것: 정체성과 화면이 어떻게 보이는가
> 입력: 01 3절 정체성, 02 2.1절 페이지, 02 4절 원칙 · 출력 대상: theme.js, /component-work, /layout-composer, /visual-asset-prompt (넘기는 항목은 이 문서 6절 표)

## 결정 현황

이 표의 확정 항목만 다음 문서가 그대로 인용한다. 잠정은 `(잠정)` 표시를 달고 인용하고, 미정은 인용하지 않는다.

| 섹션 | 상태 | 비고 |
|---|---|---|
| 1. 무드 | 확정 | |
| 2. 레이아웃 전략 | 잠정 | 배정 미승인 (Q3) |
| 3.1 색 | 확정 | theme 실제 값 |
| 3.2 타이포 | 확정 | theme 실제 값 |
| 3.3 형태·표면·모션 | 확정 | theme 실제 값 |
| 4. 이미지·에셋 방향 | 확정 | image-generation 요약 |
| 4.1 레퍼런스 | 미정 | 제공 자료 없음 |
| 5. 변경 토큰 요약 | 확정 | 현재값은 스타터킷 |
| 6. 다음 문서로 넘기는 것 | 확정 | |

문서 상태: 잠정 승인 (하드 게이트 충족)
개정: 2026-09-16 v2 · 변경: 새 포맷으로 재구성 (교육 예제)

비고:

- **2절 잠정**: 아키타입 id는 `src/data/layoutTaxonomyData.js` 목록에서 골랐고, 페이지별 배정은 화면 구성에서 추론했다 (Q3).
- **3절 값 출처**: `src/styles/themes/default.js`의 palette, typography, shape, shadows, transitions, components.
- **5절 현재값 출처**: 스타터킷 `component-work/resources/mui-theme.md`. 그 문서가 정하지 않은 축은 "미지정 (MUI 기본)"으로 적었다.

---

## 1. 무드

- **키워드** (최대 5, 01 3.2절에서 파생): Editorial · Architectural · Warm Minimal · Time-Aware · Flat & Quiet
- **태도 선언** (최대 3): 장식으로 외치지 않는다, 여백과 타입과 라인이 말한다. 디지털의 푸른 뉴트럴이 아니라 3800K의 따뜻한 뉴트럴을 쓴다. 어떤 장면도 낮 전용이거나 밤 전용이 아니다, 두 상태가 같은 팔레트 안에 있다.
- **하지 않는 것** (최대 5): 그라디언트와 글로우 · 방향성 드롭섀도 · 둥근 모서리 · 대문자 버튼 · 박스형 아웃라인 폼

---

## 2. 레이아웃 전략

구조:

| 페이지 (02 2.1절) | 공간 모델 | 아키타입 | 구분 언어 |
|---|---|---|---|
| Landing | 유동 | narrative-scroll + modular-grid (잠정, Q3) | 선 |
| ProductDetail | 혼합 | split-hero + sectioned-stack (잠정, Q3) | 선 |
| Checkout | 고정 | asymmetric-two-up + supporting-pane (잠정, Q3) | 선 |
| 전역 레이어 | 고정 | off-canvas-panel + z-axis-layering (잠정, Q3) | 선 |

콘텐츠 신호 (/layout-composer 입력):

| 페이지 | 밀도 | text / media / repeat / hierarchy |
|---|---|---|
| Landing | airy | mixed / dominant / many / two-tier |
| ProductDetail | airy | long / dominant / few / two-tier |
| Checkout | compact | long / none / single / flat |
| 전역 레이어 | compact | micro / accent / few / flat |

- 공간 모델: 유동 / 고정 / 혼합. 아키타입: `src/data/layoutTaxonomyData.js`의 id. 구분 언어: 선 / 면 / 여백.
- Landing의 서사 구간은 `horizontal-scroll`을 함께 쓴다 (잠정, Q3).
- 전역 리듬: 면이나 블록이 아니라 1px 선이 공간을 나눈다. 그리드 분할선, 섹션 디바이더, 필드 언더라인, 강조 밑줄이 한 벌처럼 반복된다. 섹션 간 수직 간격은 잡지 스프레드 수준으로 넓혀 경계를 의심하지 않게 한다. 좌우 여백은 반응형이고, 대형 화면에서 콘텐츠가 과도하게 늘어나지 않도록 브레이크포인트 상단(xl 1440)에서 폭을 잡는다.

---

## 3. 토큰 방향

### 3.1 색 (역할 팔레트)

| 역할 | 이름 | 값 | MUI 토큰 | 근거 (01 3절) |
|---|---|---|---|---|
| 전경·브랜드 중심 | Warm Black | `#12100E` | `primary.main`, `text.primary` | Immanence |
| 배경·지면 | Wall Tint White | `#E8E5E1` | `background.default`, `.paper` | 절제 |
| 다크 위 텍스트 | 3800K White | `#F2E9DA` | `brand.warmWhite` | Continuity |
| 유일한 악센트 | 3800K Amber | `#FFC66E` | `secondary.main`, `brand.accent` | 색온도의 번역 |
| 구분선 | Warm Black 12% | `#12100E1F` | `divider` | 선이 구분 언어 |
| 중간 톤 | Warm Grey 50~900 | `#FAF9F7` ~ `#12100E` | `grey.*` | 웜 뉴트럴 일관 |
| 시간대 배경 | Noon / Afternoon / Evening / Midnight | #E8E5E1 / #A19F9B / #595654 / #12100E | `timeline.*` | Continuity |

비고:

- Warm Black은 `common.black`, Wall Tint White는 `common.white`와 `grey.100`에도 들어간다.
- 4색 원칙: 위 네 브랜드 색 외의 색은 상태 색(error·warning·info·success)에만 쓴다.
- 시간대 배경은 TimeOfDay가 구독하는 소스다.

### 3.2 타이포

| 역할 | 서체 | 방향 (웨이트·크기·자간·행간) | MUI variant |
|---|---|---|---|
| 디스플레이 대 | Tiempos Headline 계열 세리프 | 800, 6rem, 자간 -0.04em, 행간 1.05 | h1 |
| 디스플레이 중 | 같은 세리프 | 700, 4.5~1.75rem, 자간 -0.04~-0.02em | h2~h5 |
| 디스플레이 소 | 같은 세리프 | 500, 1.5rem, 자간 -0.02em | h6 |
| 본문 | Pretendard Variable | 400, 1.25rem·1rem, 행간 1.7, 자간 0 | body1, body2 |
| 라벨 | Pretendard Variable | 500, 1rem·0.875rem, 행간 1.5 | subtitle1, subtitle2 |
| 캡션 | Pretendard Variable | 400, 0.75rem, 자간 0.02em | caption |
| 오버라인 | Pretendard Variable | 500, 0.75rem, 자간 0.1em, 대문자 | overline |
| 버튼 | Pretendard Variable | 500, 0.875rem, 자간 0.02em, 자연 케이스 | button |

비고: 세리프 폴백은 Georgia다. 영문 세리프가 선언, 한글 산세리프가 해설을 맡는 이원 구조가 브랜드 카피 톤과 같다.

### 3.3 형태·표면·모션

| 축 | 방향 | 값 |
|---|---|---|
| radius | 전부 각지게 | `shape.borderRadius: 0`, 기본 컴포넌트도 0 |
| elevation | 방향성 없는 확산광 | offset 0, blur 12~58px, 투명도 0.04~0.27 |
| 표면 | 배경과 종이를 구분하지 않음 | Paper 배경 transparent, 본문은 Wall Tint |
| 선 | 1px로 구분 | `border-bottom: 1px`, 12%/80%/100%, 200ms |
| 전환 템포 | 느린 층 추가 | slow 600 / slower 900 / slowest 1200 (ms) |
| 이징 | 점멸 없는 사인 곡선 | `cubic-bezier(0.37, 0, 0.63, 1)` |
| 간격 | 8px 그리드 유지 | `spacing: 8`, 브레이크포인트 xl 1440 |

비고:

- radius 0은 Button, Paper, Card, Chip, TextField에 개별 오버라이드로도 걸려 있다.
- elevation 1단계는 `0 0 12px rgba(18,16,14,0.04)`, 24단계는 `0 0 58px rgba(18,16,14,0.27)`이다.
- 선의 세 단계는 기본 12%, hover 80%, focus 100% 불투명도다.
- 템포 배정: slow는 낮·밤 블렌딩, slower는 섹션 진입, slowest는 공유 요소 전환이다. 이징은 easeInOutSine이다.

---

## 4. 이미지·에셋 방향

| 에셋 유형 | 쓰이는 곳 | LOOK 키워드 (1~2) |
|---|---|---|
| 제품 컷 Day | ProductCard, ProductGallery | photorealistic product photography |
| 제품 컷 Night | ProductCard, ProductGallery | self-illumination |
| 브랜드 무드 Hero | Landing Hero 메인 | editorial 공간 사진 |
| 브랜드 무드 보조 | Landing Hero 사이드, 갤러리 | editorial 공간 사진 |

에셋별 방향 (에셋 유형마다 한 블록):

- **제품 컷 Day**
  - FORMAT: 3:4, 정중앙 정면, 제품이 프레임의 40~60%, 사방 15% 이상 여백, 이음매 없는 스튜디오 배경 `#E8E5E1`
  - LOOK: Bauhaus 기하 정밀, 좌상단 소프트박스 확산광, 제품 아래 약한 접지 그림자
  - SUBJECT: 무광 검정 알루미늄 프레임과 화이트 프로스티드 글라스, 조명은 꺼진 상태
  - 하지 않는 것: 대각선·3/4 뷰, 원근 왜곡, 크롬·골드·우드, 보케, 렌즈 플레어
- **제품 컷 Night**
  - FORMAT: Day 컷과 같은 형태·구도·크기, 배경 `#12100E`. Day 이미지를 레퍼런스로 변환한다
  - LOOK: 제품 자체가 유일한 광원, 발광색 3800K `#FFC66E`, 디퓨저 중심 100% 가장자리 80%, 주변 반사 20~30%
  - SUBJECT: Day와 1:1 쌍을 이룬다. 우하단에 4각 별 워터마크
  - 하지 않는 것: 외부 조명, 그림자, 배경 그라디언트, 오렌지나 순백으로 치우친 발광
- **브랜드 무드 Hero**
  - FORMAT: 3:2, 인물과 조명은 우측 중앙에서 하단, 좌상단은 타이틀이 얹히므로 완전히 빈 벽
  - LOOK: 웜 뉴트럴 톤, 벽은 단일 평면, 천장선 없음
  - SUBJECT: 일반 실내의 2배 이상 규모감, 같은 장면의 낮·밤 두 장
  - 하지 않는 것: 코너·단차·구조물 노출, 좌상단 요소 배치
- **브랜드 무드 보조**
  - FORMAT: 3:4(56:75) 또는 16:9, 같은 행의 이미지와 높이가 맞는 비율만, 원본 비율 그대로 표시
  - LOOK: Hero와 같은 톤, 정면 대칭 또는 측면 구도
  - SUBJECT: 무드 이름별로 낮·밤 파일 쌍
  - 하지 않는 것: 컨테이너에 억지로 맞추는 크롭

### 4.1 레퍼런스 (사용자 제공만)

해당 없음: 사용자가 제공한 레퍼런스가 원문에 없다.

---

## 5. 변경 토큰 요약 (theme.js 입력)

| 토큰 경로 | 현재값 | 변경값 | 적용 대상 |
|---|---|---|---|
| `palette.primary.main` | `#0000FF` | `#12100E` | 버튼·링크·본문 텍스트 |
| `palette.secondary.main` | blueGrey[900] `#263238` | `#FFC66E` | 악센트, 발광 표현 |
| `palette.background.default` / `.paper` | 미지정 (MUI 흰색) | `#E8E5E1` 둘 다 동일 | 페이지와 Paper |
| `palette.grey.*` | 미지정 (MUI 쿨 그레이) | `#FAF9F7`(50) ~ `#12100E`(900) | 보조 텍스트, 경계 |
| `palette.text.*` | 미지정 | primary `#12100E`, 보조 80%, 비활성 38% | 본문 위계 |
| `palette.divider` | 미지정 | `#12100E` 12% | 섹션 선, 그리드 선 |
| `palette.brand.*` | 없음 | wallTintWhite, warmWhite, warmBlack, accent | 4색 의미 토큰 (신설) |
| `palette.timeline.*` | 없음 | noon, afternoon, evening, midnight | 시간 블렌딩 배경 (신설) |
| `typography.fontFamily` | Pretendard Variable | Pretendard Variable (유지) | 본문·라벨 |
| `typography.h1~h6.fontFamily` | Outfit + Pretendard 최고 웨이트 | Tiempos Headline 계열 세리프 | 디스플레이 전체 |
| `typography.h1` 웨이트·크기·자간 | 900, 크기·자간 미지정 | 800, 6rem, -0.04em, 행간 1.05 | 히어로 헤드라인 |
| `typography.body1` | 미지정 (MUI 1rem) | 1.25rem, 행간 1.7 | 본문 |
| `typography.overline` | 미지정 | 자간 0.1em, 대문자 | 에디토리얼 캡션 라벨 |
| `typography.button.textTransform` | 미지정 (MUI uppercase) | `none` | 모든 버튼 |
| `shape.borderRadius` | `0` | `0` (유지) | 전 컴포넌트 |
| `shadows` | offset 0, blur 높인 dimmed | offset 0, blur 12~58px, 투명도 0.04~0.27 | Paper, 카드 |
| `spacing` | 미지정 (MUI 8) | `8` (유지) | 전역 |
| `breakpoints.values.xl` | 미지정 (MUI 1536) | `1440` | 대형 화면 폭 상한 |
| `transitions.duration.slow/slower/slowest` | 없음 | 600 / 900 / 1200 | 느린 전환 3종 (신설) |
| `transitions.easing.smooth` | 없음 | `cubic-bezier(0.37, 0, 0.63, 1)` | 위 세 전환 (신설) |
| `components.MuiInput` / `MuiSelect` | 미지정 (MUI outlined) | standard 언더라인 1px, 3단계 상태색 | 모든 폼 |
| `components.MuiButton` | 미지정 | borderRadius 0, 자연 케이스 | 버튼 |
| `components.MuiPaper` / `MuiCard` / `MuiChip` | 미지정 | borderRadius 0, Paper 배경 transparent | 기본 컴포넌트 |

비고: 입력 언더라인은 200ms 색 전환과 아이콘 180도 회전을 포함한다. 느린 전환 3종은 낮·밤 블렌딩, 섹션 진입, 공유 요소 전환이다.

---

## 6. 다음 문서로 넘기는 것

| 받는 곳 | 가져가는 것 |
|---|---|
| theme.js 수정 | 5절 표 |
| /component-work | 3절 토큰 방향, 5절 표 |
| /layout-composer | 2절 두 표의 아키타입·콘텐츠 신호 |
| /visual-asset-prompt | 4절 개요 표와 에셋별 방향, 4.1절 |
