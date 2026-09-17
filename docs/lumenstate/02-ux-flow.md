# Lumenstate: UX Flow

> 이 문서가 결정하는 것: 각 과업을 어떤 화면과 데이터로 이루는가
> 입력: 01 4절 사용자·대상, 01 5절 과업 · 출력 대상: 03-visual-direction, /supabase-integration, /component-work (넘기는 항목은 이 문서 6절 표)

## 결정 현황

이 표의 확정 항목만 다음 문서가 그대로 인용한다. 잠정은 `(잠정)` 표시를 달고 인용하고, 미정은 인용하지 않는다.

| 섹션 | 상태 | 비고 |
|---|---|---|
| 1. UX-flow 시나리오 | 확정 | 예외 칸은 코드 추론 |
| 2.1 페이지 리스트 | 확정 | 경로는 실제 라우트 |
| 2.2 계층 트리 | 확정 | |
| 3.1 대상 정의 | 확정 | 01 4.2절 6행 그대로 |
| 3.2 이름 사전 | 확정 | 서버 데이터 없음 |
| 4. 인터랙션 원칙 | 확정 | 원문 13개를 5줄로 |
| 5. 컴포넌트 리스트 | 확정 | 파일 diff로 대조 |
| 6. 다음 문서로 넘기는 것 | 확정 | |

문서 상태: 잠정 승인 (하드 게이트 충족)
개정: 2026-09-16 v2 · 변경: 새 포맷으로 재구성 (교육 예제)

비고:

- **3.1절 근거**: 01 4.2절의 확정 6행을 그대로 받았다. 영속성은 원문 데이터 모델 표와 코드(`cart/CartContext.jsx`, `media/useTimeline.jsx`, `motion/useSharedElement.js`)로 확인했다.
- **4절 압축**: 원문의 핵심 UX 패턴 8개와 설계 원칙 5개를 5줄로 묶었다.
- **5절 근거**: 스타터킷 `src/components`와 파일 diff로 대조했다. 공유 파일 61개 중 6개가 다르다.
- **분량**: 263줄(권장 250). 가독성 규칙(표 분할, 비고 목록, 구분선)으로 늘었다. 1절 시나리오 비고를 `appendix-scenario-notes.md`로 분리 가능하다.

---

## 1. UX-flow 시나리오 (01 5절 과업과 1:1)

R 읽기 · W 생성 · D 갱신/삭제.

### 1.1 브랜드가 만드는 빛의 세계를 이해한다

- **사용자**: 건축가, 개인 구매자, 에디터
- **진입**: 직접 방문 또는 외부 링크 · **성공 조건**: 세 가치와 제품 쇼케이스까지 스크롤로 도달 · **예외**: 없음

| 단계 | 화면 | 사용자 행동 | 다루는 대상 (R/W/D) | 결과 |
|---|---|---|---|---|
| 1 | Landing | 첫 화면을 본다 | BrandContent R | 제품 나열이 아닌 공간 속 빛의 한 장면 |
| 2 | Landing | 스크롤을 시작한다 | BrandContent R | 영문 선언과 한글 해설로 세 가치 등장 |
| 3 | Landing | 서사 구간을 지난다 | BrandContent R | 지면을 넘기는 리듬의 가로 서사 |
| 4 | Landing | 쇼케이스까지 내려온다 | Product R (많음), TimeOfDay R | 같은 시각을 공유한 공간 장면의 제품 |

비고:

- 단계 1: 헤더와 네비는 존재감을 죽여 첫 인상에 끼어들지 않는다.
- 단계 2: 전역 네비는 스크롤이 시작된 뒤에야 나타난다.
- 단계 4: 3초 안에 "다른 조명 사이트와 다르다"는 인상이 남는 것이 성공 신호다.

### 1.2 공간에 놓인 제품을 보고 옵션을 골라 담는다

- **사용자**: 개인 구매자, 건축가
- **진입**: Landing 쇼케이스 · **성공 조건**: 고른 옵션과 함께 제품이 장바구니에 담김 · **예외**: 옵션 미선택 시 기본 조합으로 담김 (잠정)

| 단계 | 화면 | 사용자 행동 | 다루는 대상 (R/W/D) | 결과 |
|---|---|---|---|---|
| 1 | Landing | 유형 필터로 좁힌다 | Product R | 그리드 자리 유지, 항목만 교체 |
| 2 | Landing | 마음에 든 제품을 고른다 | Product R | 방금 본 이미지가 다음 히어로로 이어짐 |
| 3 | ProductDetail | 공간 속 제품을 본다 | Product R | 스펙표가 아닌 설명으로 읽히는 갤러리 |
| 4 | ProductDetail | 마감·금속·높이를 고른다 | SelectedOption W | 선택 조합이 장바구니 항목의 정체성 |
| 5 | ProductDetail | 수량을 정하고 담는다 | Cart W | 우측 패널이 조용히 올라옴 |
| 6 | 전역 레이어 | 패널을 닫고 뒤로 간다 | Cart R | 랜딩의 스크롤 위치와 그리드 복원 |

비고:

- 단계 2: 페이지가 바뀐 것이 아니라 시선이 옮겨간 감각이 목표다.
- 단계 5: 결제로 떠밀지 않는다. 패널은 확인만 하고 계속 구경할 수 있다.

### 1.3 담은 것을 확인하고 주문 정보를 입력해 결제한다

- **사용자**: 개인 구매자
- **진입**: 전역 레이어의 장바구니 패널 · **성공 조건**: 연락처·배송지를 채우고 결제 단계까지 진행 · **예외**: 장바구니가 비면 진행 불가 (잠정)

| 단계 | 화면 | 사용자 행동 | 다루는 대상 (R/W/D) | 결과 |
|---|---|---|---|---|
| 1 | 전역 레이어 | 담은 것을 확인한다 | Cart R/D | 수량 변경·삭제가 보던 자리에서 끝남 |
| 2 | Checkout | 결제로 넘어간다 | Cart R | 네비가 사라지고 로고와 단계만 남음 |
| 3 | Checkout | 연락처와 배송지를 넣는다 | OrderInfo W | 입력 중에도 브랜드의 차분함 유지 |
| 4 | Checkout | 할인 코드를 넣는다 | OrderInfo W | 같은 입력 체계로 폼의 리듬 유지 |
| 5 | Checkout | 우측 요약을 보며 진행한다 | Cart R | 사는 것이 내내 보이는 스티키 요약 |

비고: 단계 2에서 체크아웃은 앱 셸 바깥의 독립 화면이 된다. 유혹 요소를 전부 걷어내고 한 가지 일에 집중시킨다.

### 1.4 하루의 시간을 움직여 빛의 변화를 관람한다

- **사용자**: 건축가, 에디터
- **진입**: Landing 쇼케이스 또는 전역 레이어의 플로팅 컨트롤 · **성공 조건**: 조작한 시각이 모든 장면에 적용 · **예외**: 새로고침 시 기본 시각으로 복귀

| 단계 | 화면 | 사용자 행동 | 다루는 대상 (R/W/D) | 결과 |
|---|---|---|---|---|
| 1 | Landing | 시간 컨트롤을 발견한다 | TimeOfDay R | 찾아야 보이지만 손이 가는 위치 |
| 2 | Landing | 슬라이더를 움직인다 | TimeOfDay D | 히어로·가치·제품 컷·배경이 함께 이동 |
| 3 | ProductDetail | 상세로 이동한다 | TimeOfDay R, Product R | 조작한 시각이 화면을 넘어도 유지 |
| 4 | 전역 레이어 | 플로팅 컨트롤로 조작한다 | TimeOfDay D | 관람 자체가 목적이 되는 조작 |

---

## 2. 정보 구조

### 2.1 페이지 리스트

| 페이지 | 경로 | 한 줄 목적 | 다루는 대상 | 등장 시나리오 |
|---|---|---|---|---|
| Landing | `/` | 브랜드 서사와 제품 쇼케이스 | BrandContent, Product, TimeOfDay | 1, 2, 4 |
| ProductDetail | `/product/:productId` | 제품 관찰, 옵션 선택, 담기 | Product, SelectedOption, Cart | 2, 4 |
| Checkout | `/checkout` | 유혹 요소를 걷어낸 결제 화면 | Cart, OrderInfo | 3 |
| 전역 레이어 | 경로 없음 | 네비, 장바구니, 전환, 시간 컨트롤 | Cart, TimeOfDay | 2, 3, 4 |

### 2.2 계층 트리

```
Landing (/)
├── Hero (첫 인상, 브랜드 무드)
├── Brand Value (세 가치 선언과 해설)
├── Intermezzo (브랜드 서사 구간)
└── Product Showcase (시간 컨트롤 + 필터 + 제품 그리드)

ProductDetail (/product/:productId)
├── Hero (갤러리 + 제품 메타 + 옵션 + 담기)
└── Info (설명·스펙 탭)

Checkout (/checkout)
├── Top (로고 + 단계 표시)
├── Form (연락처 / 배송 / 할인)
└── Summary (스티키 주문 요약)

전역 레이어 (경로 없음)
├── 조건부 네비
├── 장바구니 패널
├── 전환 오버레이
└── 시간 컨트롤
```

---

## 3. 데이터 모델 (01 4.2절 이름 그대로)

### 3.1 대상 정의

정의와 영속성:

| 이름 | 식별자 | 주요 속성 (윤곽) | 영속성 |
|---|---|---|---|
| 제품 | Product | 이름, 유형, 설치 방식, 낮·밤 이미지 쌍 | 정적 |
| 선택한 옵션 | SelectedOption | 유리 마감, 금속, 높이 | 휘발 |
| 장바구니 | Cart | 제품과 옵션 조합, 수량, 단가, 합계 | 브라우저 |
| 하루의 시간 | TimeOfDay | 낮에서 밤까지의 단일 값 | 휘발 |
| 브랜드 콘텐츠 | BrandContent | 브랜드 선언, 가치 문구, 무드 이미지 | 정적 |
| 주문 정보 | OrderInfo | 연락처, 배송지, 할인 코드, 진행 단계 | 휘발 |

흐름과 관계:

| 이름 | 만드는 곳 | 보이는 페이지 | 관계 |
|---|---|---|---|
| 제품 | 정적 데이터 | Landing, ProductDetail | SelectedOption·Cart가 참조 |
| 선택한 옵션 | ProductDetail | ProductDetail, 전역 레이어 | Product에 종속 |
| 장바구니 | ProductDetail | 전역 레이어, Checkout | Product·SelectedOption 참조 |
| 하루의 시간 | 전역 레이어 | Landing, ProductDetail, 전역 레이어 | 모든 이미지 표시에 영향 |
| 브랜드 콘텐츠 | 정적 데이터 | Landing, 전역 레이어 | 페이지 문구의 출처 |
| 주문 정보 | Checkout | Checkout | Cart를 참조 |

비고:

- 영속성 값은 정적 / 휘발 / 세션 / 브라우저 / 서버다. 사용자의 기대선에 맞춰 나눈다.
- 제품 속성에는 설명과 조도·색온도도 포함된다. 화면 복원용 스크롤 위치는 세션 단위로 따로 보관하는 UI 상태이고 다루는 대상이 아니다.

### 3.2 데이터 모델 활용 (이름 사전)

| 데이터명 | 한국어 | 코드 식별자 | 예상 테이블명 | 생성 책임 페이지 |
|---|---|---|---|---|
| `Product` | 제품 | `product` | (정적) | 없음 |
| `SelectedOption` | 선택한 옵션 | `selectedOption` | (클라이언트) | ProductDetail |
| `Cart` | 장바구니 | `cart` | (클라이언트) | ProductDetail |
| `TimeOfDay` | 하루의 시간 | `timeOfDay` | (클라이언트) | 전역 레이어 |
| `BrandContent` | 브랜드 콘텐츠 | `brandContent` | (정적) | 없음 |
| `OrderInfo` | 주문 정보 | `orderInfo` | (클라이언트) | Checkout |

비고: 서버 데이터가 없는 프로젝트다. `/supabase-integration`을 부르게 되면 이 표부터 다시 정한다.

---

## 4. 인터랙션 원칙 (최대 5)

| 원칙 | 근거 (01 3절 가치) | 드러나는 곳 | 유도되는 컴포넌트 유형 |
|---|---|---|---|
| 전환은 이동이 아니라 시선의 이음이다 | Continuity | Landing에서 ProductDetail로, 뒤로가기 | 공유 요소 전환 레이어, 좌표 측정 훅 |
| 시간은 전역 상태다 | Continuity, Flexibility | Landing, ProductDetail, 전역 레이어 | 시간 컨텍스트, 시간 반응형 이미지 |
| UI는 필요할 때만 나타난다 | Immanence | Landing 첫 화면, Checkout, 담기 직후 | 조건부 셸·네비, 슬라이드 패널 |
| 상태 영속은 기대선에 맞춘다 | Continuity | 뒤로가기, 새로고침, 재방문 | 스크롤 복원 로직, 영속 장바구니 |
| 선언과 해설을 병치하고 천천히 흐른다 | Immanence, 에디토리얼 태도 | 히어로, 가치 섹션, 제품 카피 | 폭 반응형 타이포, 스크롤 엔진 |

비고:

- 원칙 2: 한 곳에서 시간을 바꾸면 사이트의 모든 장면이 같은 시각으로 움직인다. 타임라인 컨트롤 두 형태가 여기서 나온다.
- 원칙 4: 장바구니는 브라우저 단위로 길게, 스크롤은 세션만큼, 시간 값은 매번 기본값에서 시작한다.
- 원칙 5: 스크롤은 브라우저 기본이 아니라 전역 부드러운 스크롤 엔진으로 감속한다.

---

## 5. 컴포넌트 리스트

| 컴포넌트 | 페이지/섹션 | 구분 | 카테고리 | 비고 |
|---|---|---|---|---|
| LumenstateShell | 전역 | 신규 | layout | AppShell 역할 대체 |
| LumenstateGNB | 전역 | 신규 | navigation | GNB 역할 대체, 조건부 노출 |
| GNB | AppShell 경유 (화면은 LumenstateGNB) | 수정 | navigation | `logoHref` prop, 라우터 Link 래핑 |
| Footer | 전역 | 신규 | navigation | 스타터킷 목록에 없음 |
| CartContext | 전역 | 신규 | cart | Cart 브라우저 영속, 4절 원칙 4 |
| CartDrawer 묶음 | 전역 | 신규 | cart | 조용한 장바구니 패널, 4절 원칙 3 |
| SharedElement 묶음 | 전역 | 신규 | motion | 4절 원칙 1, 스크롤 위치 보관 포함 |
| useTimeline, TimeBlendImage | 전역 | 신규 | media | TimeOfDay 구독, 낮·밤 블렌딩 |
| FloatingTimeline | 전역 | 신규 | overlay-feedback | 시나리오 4의 플로팅 컨트롤 |
| TimelineSlider, MinimalTimelineSlider | Landing · Showcase, 전역 | 신규 | input | 시간 컨트롤 두 형태 |
| SectionContainer | Landing · Showcase, ProductDetail | 수정 | container | `maxWidth` prop 추가 |
| LineGrid | Landing, ProductDetail | 재활용 | layout | 셀 사이 1px 선 |
| HeroSection | Landing · Hero | 신규 | templates | |
| useParallax | Landing · Hero | 신규 | scroll | 스타터킷 scroll에 없음 |
| RandomRevealText | Landing · Hero, Showcase | 수정 | kinetic-typography | trigger·threshold·replay props 신설 |
| FitText, StretchedHeadline | Landing · Hero, Brand Value | 재활용 | typography | 선언 타이포 |
| BrandValueSection, BrandValueCard | Landing · Brand Value | 신규 | templates, card | CustomCard 기반 |
| CardContainer | Landing, Showcase (기반) | 수정 | card | MUI Card 기반 교체, SPACING 패딩 |
| CustomCard | Landing, Showcase (기반) | 수정 | card | CardContainer 확장, hover props |
| ElevationSection | Landing · Intermezzo | 신규 | templates | |
| HorizontalScrollContainer | Landing · Intermezzo | 수정 | content-transition | sticky width 100vw에서 100%로 |
| ProductShowcase | Landing · Showcase | 신규 | templates | |
| FilterBar | Landing · Showcase | 재활용 | templates | |
| ProductFilter | Landing · Showcase | 신규 | navigation | 제품 유형 필터 |
| ProductGrid 묶음 | Landing · Showcase | 신규 | templates, product | 필터 교체 시 자리 유지 |
| ProductCard | Landing · Showcase | 신규 | product | 낮·밤 썸네일 |
| ProductDetail 템플릿 3종 | ProductDetail | 신규 | templates | |
| ProductGallery, ProductImageViewer | ProductDetail · Hero | 신규 | product | |
| ProductMeta, ProductSpecCard | ProductDetail · Hero | 신규 | product | 품번·리드타임·배송 |
| ProductOptions | ProductDetail · Hero | 신규 | product | SelectedOption 입력 |
| ProductActions, QuantitySelector | ProductDetail · Hero | 신규 | product, input | 담기 액션 |
| ProductTabs | ProductDetail · Info | 신규 | product | 설명·스펙 탭 |
| Checkout 레이아웃 3종 | Checkout | 신규 | checkout, templates | 좌 폼, 우 스티키 요약 |
| CheckoutLogo, CheckoutSteps | Checkout · Top | 신규 | checkout | 네비 없는 상단 |
| Checkout 폼 4종 | Checkout · Form | 신규 | checkout | |
| UnderlineInput, UnderlineSelect | Checkout · Form | 신규 | input | MUI standard 기반 기입란 |
| OrderSummary, OrderItem, PolicyLinks | Checkout · Summary | 신규 | checkout | 스티키 요약 |
| CheckoutActions | Checkout · Form | 신규 | checkout | |

비고:

- **합계**: 재활용 3 · 수정 6 · 신규 29 (행 기준, 한 행에 묶인 파일은 한 건).
- **구분 근거**: 스타터킷 `src/components`와 파일 diff 대조. 내용이 다른 6개(CardContainer, CustomCard, SectionContainer, HorizontalScrollContainer, RandomRevealText, GNB)가 수정, 동일 파일이 재활용, 스타터킷에 없는 파일이 신규다.
- **범위 원칙**: 재활용이 기본이고, 신규는 이커머스 도메인과 브랜드 시그니처 연출에만 쓴다.
- **카테고리**: cart / checkout / product는 이 프로젝트에서 추가한 폴더다 (`directory-structure.md` 목록 밖).
- **재활용 제외**: MoodboardCard, ImageCard(선으로 구분하는 그리드를 쓰기로 해 제외), GradientOverlay(그라디언트 금지), AppShell(LumenstateShell로 대체, 파일은 미변경).
- **묶음 구성**: CartDrawer 묶음 = CartDrawer, CartHeader, CartItem, CartSummary, CartCheckoutButton. SharedElement 묶음 = SharedElementOverlay, SharedTransitionContext, useSharedElement. ProductGrid 묶음 = ProductGrid, AnimatedGridItem, useFilterTransition. ProductDetail 템플릿 3종 = ProductHeroTemplate, ProductDetailTemplate, ProductInfoTemplate. Checkout 레이아웃 3종 = CheckoutLayout, CheckoutSection, CheckoutTemplate. Checkout 폼 4종 = ContactForm, ShippingForm, DiscountInput, ExpressCheckout.

---

## 6. 다음 문서로 넘기는 것

| 받는 곳 | 가져가는 것 |
|---|---|
| 03-visual-direction | 2.1절 페이지 목록, 페이지별 콘텐츠 신호, 4절 원칙 |
| /supabase-integration | 3.2절 사전, 2.1절, 1절 단계 표, 5절 컴포넌트 리스트 |
| /component-work | 5절 신규·수정 항목 |
