# Lumenstate Image Prompt Template

Gemini 이미지 생성 모델(`gemini-3.1-flash-image-preview`, 통칭 "Nano Banana" 계열) 프롬프트 템플릿.
`common-style.md`의 공통 규칙과 `product-specs.md`의 제품별 명세를 조합한다.

> **단일 진실 원천(SSOT)**: 아래 Day/Night 템플릿과 카메라 규칙은 `scripts/generate-product-images.mjs`의
> `buildDayPrompt()` / `buildNightPrompt()` / `CAMERA_ANGLES`를 그대로 옮긴 것이다. 실제 생성 결과의 기준은 스크립트다.
> **워크플로우**: Day = 텍스트→이미지 생성 / Night = **Day 이미지를 레퍼런스로 한 이미지→이미지 변환**(같은 형태 유지).

---

## Template Structure

```
[BASE_STYLE] + [MODE_SETTING] + [PRODUCT_FORM] + [COMPOSITION] + [NEGATIVE]
```

각 섹션은 순서대로 조합하여 하나의 프롬프트를 구성한다.

---

## Day Mode Template (텍스트 → 이미지)

`{camera}`에는 `mounting`별 `CAMERA_ANGLES` 값이 삽입된다 (아래 "Camera Angle Rule" 참조).

```
A minimalist {form} lighting fixture. Extreme geometric precision in the tradition of Bauhaus, Dieter Rams, and Suprematist composition. Pure geometric abstraction rendered as a real physical object.

{form_detail}

Material: matte black anodized aluminum frame with white frosted glass diffuser.
The light is OFF — the product exists as a pure sculptural geometric object. The diffuser surface is opaque white, showing no illumination.

Background: clean, uniform warm off-white (#E8E5E1), seamless infinite studio backdrop with no visible horizon line.
Lighting: soft, even studio lighting from directly above. Subtle soft contact shadow beneath the product (opacity 15%, soft edge).

Composition: perfectly centered in frame with mathematical precision. Product fills approximately {fillRatio}% of the image area. Minimum 15% clear padding from all edges (top, bottom, left, right). 3:4 portrait aspect ratio.
Camera: {camera}

Style: photorealistic product photography with extreme geometric precision. Perfect bilateral symmetry. Apple-level cleanliness. The product is a real physical 3D object — frosted glass shows subtle internal light diffusion and refraction, matte aluminum shows fine micro-grain texture, edges catch soft light highlights. Physical dimensionality is conveyed through material rendering, not camera angle.
No environment, no text, no logos, no lens flare, no bokeh, no color fringing, no people, no furniture, no diagonal view, no angled composition, no 3/4 view, no perspective distortion, no tilted camera, no oblique angle.
```

---

## Night Mode Template (Day 이미지 → 이미지 변환)

Night은 텍스트만으로 새로 만들지 않는다. **Day 이미지(`{id}.png`)를 `inlineData` 레퍼런스로 첨부**하고 아래 변환 프롬프트로 켜진 버전을 생성한다 → 동일 형태·구도·크기의 Day/Night 쌍이 보장된다.

```
Transform this product lighting fixture image into a night/dark mode version. Keep the EXACT same product shape, angle, composition, position, and size.

CRITICAL — Color & Tone Consistency (must be identical across all products):
- Background: uniform deep warm black, exactly #12100E. No gradient, no variation, no visible environment. Seamless infinite backdrop.
- Emission color: exactly 3800K color temperature, hex #FFC66E. Soft amber-white. NOT orange, NOT yellow, NOT pure white.
- Diffuser center brightness: 100% (near white with warm tint).
- Diffuser edge brightness: 80% (amber tone strengthens toward edges).
- Wall/surface ambient reflection: 20-30% brightness, soft amber pool, radius ~1.5x product size.
- Shadow: none (product is the only light source, no external lighting).

Changes to apply:
- Background: change to #12100E, uniform and seamless.
- Light state: turn the light ON. The frosted glass diffuser now emits warm 3800K light (#FFC66E).
- Light behavior: {light_pattern_detail}
- The product is the ONLY light source in the entire scene. No studio lighting remains.
- Nearby surfaces catch subtle warm amber reflections from the product (opacity ~25%, soft falloff).
- Matte black aluminum frame remains dark — visible only as a silhouette against the glow.
Keep unchanged: product form, product size, material (matte black aluminum frame), camera angle, centered composition with 15% padding from all edges, aspect ratio.
No text, no logos, no lens flare, no gradient in background, no additional light sources, no people, no furniture, no diagonal view, no angled composition, no perspective distortion.
```

---

## Camera Angle Rule (CRITICAL)

카메라 앵글은 **설치 방식(`mounting`)에 따라** 달라진다. Day 템플릿의 `{camera}` 슬롯에 아래 `CAMERA_ANGLES` 값이 삽입된다.

| mounting | 시점 |
|---|---|
| `flush-mount` (천장) | 정바로 아래에서 위를 올려다봄 |
| `wall-mount` (벽) | 벽면에 수직으로 정면 (두께·입체감 보임) |
| `floor-standing` (바닥) | 눈높이 정면 |
| `freestanding` (데스크) | 눈높이 정면 |

```
flush-mount:    Viewed from directly below, looking straight up at the ceiling-mounted product. The product appears as a perfect geometric shape with complete bilateral symmetry. No perspective distortion, no tilted angle.
wall-mount:     Viewed perfectly straight-on, perpendicular to the wall surface. The product is a real physical 3D object mounted on the wall — subtle depth, edge thickness, and material dimensionality are visible. Perfect bilateral symmetry.
floor-standing: Viewed straight-on from the front at eye level. Perfect bilateral symmetry along the vertical axis. No tilted or angled perspective.
freestanding:   Viewed straight-on from the front at eye level. Perfect bilateral symmetry. No tilted or angled perspective.
```

공통 원칙: 대각선 구도·3/4 뷰·기울어진 앵글·원근 왜곡 금지 (천장형은 정하방 시점, 그 외는 정면).

## Padding Boundary Rule (CRITICAL)

제품은 프레임 가장자리에서 최소 15% 안쪽에 위치:
- 좌/우: 이미지 폭의 15% 이상
- 상/하: 이미지 높이의 15% 이상

---

## Complete Examples

> 아래 예시는 조립 형태를 보여주는 참고용이다. **실제 문구의 기준은 위 Day/Night 템플릿과 스크립트 `build*Prompt()`이며,
> 제품 명세는 `product-specs.md`(#1~20)에서 가져온다.** (예시 본문 일부는 초기 버전 표현일 수 있음)

### Example 1: Product #1 — Day Mode

```
A minimalist circular ceiling ring lighting fixture, in the style of Dieter Rams and Bauhaus industrial design.

A shallow cylindrical ring mounted flush to the ceiling. The ring has a flat outer band (matte black, ~5cm height) with a large circular frosted glass diffuser recessed inside. Diameter ~40cm. Clean geometric circle viewed from slightly below.

Material: matte black anodized aluminum frame with white frosted glass diffuser.
The light is OFF — the product exists as a pure sculptural object. The diffuser surface is opaque white, showing no illumination.

Background: clean, uniform warm off-white (#E8E5E1), seamless infinite studio backdrop with no visible horizon line.
Lighting: soft, even studio lighting from above-left at 45 degrees. Subtle soft contact shadow beneath the product (opacity 15%, soft edge).

Composition: centered in frame, product fills approximately 60% of the image area. The product must have at least 15% padding from all edges of the frame. 3:4 portrait aspect ratio (1024x1365px).
Camera: Straight-on frontal view, perfectly centered, perpendicular to the product face.

Style: photorealistic product photography with Apple-level precision and cleanliness. Geometric symmetry. Ultra-clean rendering.
No environment, no text, no logos, no reflections, no lens flare, no bokeh, no color fringing, no people, no furniture, no diagonal view, no angled composition.
```

### Example 2: Product #1 — Night Mode

```
A minimalist circular ceiling ring lighting fixture, in the style of Dieter Rams and Bauhaus industrial design.

A shallow cylindrical ring mounted flush to the ceiling. The ring has a flat outer band (matte black, ~5cm height) with a large circular frosted glass diffuser recessed inside. Diameter ~40cm. Clean geometric circle viewed straight-on.

Material: matte black anodized aluminum frame. The diffuser is now actively glowing with warm light.
The light is ON, emitting warm 3800K color temperature light — a soft amber-white tone (#FFC66E).

Light behavior: Warm amber light radiates downward from the frosted diffuser inside the ring. The inner surface of the ring catches a subtle warm reflection. A soft pool of light appears on the surface below. The ring frame becomes a dark silhouette framing the glowing disc.

Background: deep warm black (#12100E), seamless infinite studio backdrop. No visible environment.
The product is the ONLY light source in the entire scene. All illumination comes from the product's glowing diffuser.
Nearby surfaces (wall behind, floor below) catch subtle warm amber reflections from the product's light.

Composition: centered in frame, product fills approximately 60% of the image area. The product must have at least 15% padding from all edges of the frame. 3:4 portrait aspect ratio (1024x1365px).
Camera: Straight-on frontal view, perfectly centered, perpendicular to the product face.

Style: photorealistic product photography with dramatic chiaroscuro lighting. Cinematic, atmospheric mood. The contrast between the warm glowing product and the deep dark surroundings is the visual focus.
A small 4-pointed star symbol (✦) appears as a subtle watermark in the bottom-right corner (warm gray #C0B8A8, ~3% of frame height).
No text, no logos, no lens flare, no gradient in background, no additional light sources, no people, no furniture, no diagonal view, no angled composition.
```

### Example 3: Product #9 — Day Mode

```
A minimalist circular wall-mounted light with horizontal bisecting bar, in the style of Dieter Rams and Bauhaus industrial design.

A perfect circle frame (diameter ~30cm, frame thickness ~1.5cm) mounted flat on a wall, with a thin horizontal bar bisecting the circle at its exact center, connecting both sides of the ring. The bar has a small junction node at the center point. All elements are matte black metal. Viewed straight-on.

Material: matte black anodized aluminum frame with white frosted glass diffuser.
The light is OFF — the product exists as a pure sculptural object. The diffuser surface is opaque white, showing no illumination.

Background: clean, uniform warm off-white (#E8E5E1), seamless infinite studio backdrop with no visible horizon line.
Lighting: soft, even studio lighting from above-left at 45 degrees. Subtle soft contact shadow beneath the product (opacity 15%, soft edge).

Composition: centered in frame, product fills approximately 55% of the image area. The product must have at least 15% padding from all edges of the frame. 3:4 portrait aspect ratio (1024x1365px).
Camera: Straight-on frontal view, perfectly centered, perpendicular to the product face.

Style: photorealistic product photography with Apple-level precision and cleanliness. Geometric symmetry. Ultra-clean rendering.
No environment, no text, no logos, no reflections, no lens flare, no bokeh, no color fringing, no people, no furniture, no diagonal view, no angled composition.
```

### Example 4: Product #15 — Night Mode

```
A minimalist modular block composition lighting fixture, in the style of Dieter Rams and Bauhaus industrial design.

Five rectangular blocks with rounded corners assembled in an asymmetric grid composition. Each block varies in size (roughly 4x8cm to 8x12cm). Blocks are arranged like an abstract Tetris formation or Mondrian-inspired layout. White frosted faces with black (~3mm) edge frames. The composition stands freely on a surface.

Material: matte black anodized aluminum frame. The diffuser is now actively glowing with warm light.
The light is ON, emitting warm 3800K color temperature light — a soft amber-white tone (#FFC66E).

Light behavior: Each block's frosted face glows individually with warm amber light. Different blocks may glow at slightly different intensities, creating depth variation. Light seeps through the gaps between blocks. The overall composition becomes a warm, luminous sculptural cluster. The surface beneath catches a complex warm light pattern from multiple sources.

Background: deep warm black (#12100E), seamless infinite studio backdrop. No visible environment.
The product is the ONLY light source in the entire scene. All illumination comes from the product's glowing diffuser.
Nearby surfaces (wall behind, floor below) catch subtle warm amber reflections from the product's light.

Composition: centered in frame, product fills approximately 45% of the image area. The product must have at least 15% padding from all edges of the frame. 3:4 portrait aspect ratio (1024x1365px).
Camera: Straight-on frontal view, perfectly centered, perpendicular to the product face.

Style: photorealistic product photography with dramatic chiaroscuro lighting. Cinematic, atmospheric mood. The contrast between the warm glowing product and the deep dark surroundings is the visual focus.
A small 4-pointed star symbol (✦) appears as a subtle watermark in the bottom-right corner (warm gray #C0B8A8, ~3% of frame height).
No text, no logos, no lens flare, no gradient in background, no additional light sources, no people, no furniture, no diagonal view, no angled composition.
```

---

## Brand Moodboard Template

제품이 실제 공간에 배치된 에디토리얼 무드 이미지 생성용.
제품 Day/Night 이미지를 `inlineData` 레퍼런스로 첨부하여 형태/재질/비율 100% 일치시킨다.

---

### Common Style (공통 규칙)

```
[MOOD_BASE] + [SCENE_DETAIL] + [NEGATIVE]
```

#### MOOD_BASE (모든 무드보드에 적용)

```
This is a reference image of the product. Generate an editorial interior photograph featuring this EXACT product — same shape, proportions, material (matte black aluminum frame, white frosted glass diffuser), and every detail.

Photography style: Kinfolk / Cereal magazine editorial. Muted, desaturated color palette. Subtle film grain. High dynamic range but soft contrast.

Color grading: warm neutral tones. Whites lean slightly warm (#F0EDE8 range). Shadows are warm gray, never pure black. No saturated colors anywhere.

Composition: {composition_type}. Generous negative space — at least 40% of the frame is empty wall/floor/ceiling. The product and person together occupy no more than 60% of the frame.

Person: {person_description}. Face NOT visible (turned away, cropped, or in shadow). The person is part of the environment, not the subject. Natural, unposed posture.

Space: minimalist architecture. White or light warm gray walls. Floors are light concrete, pale wood, or polished stone. Ceiling height ≥ 3m. Furniture is minimal — only what the scene requires.

Lighting: {lighting_description}

No text, no logos, no brand names, no watermarks, no clutter, no decorative objects, no bright colors, no glossy surfaces.
```

#### NEGATIVE (금지 요소)

```
No stock photo look, no posed model, no smile, no eye contact with camera, no bright saturated colors, no busy backgrounds, no multiple light sources competing, no HDR over-processing, no lens flare, no vignette, no split toning, no teal-and-orange grading.
```

---

### Moodboard Scenes (개별 장면)

#### Scene 1: #2 Arc Floor Lamp — Night, Side

```
composition_type: Side view (측면). Lamp base at frame left edge, arc curves overhead to right. Person in right 1/3 of frame.
aspect_ratio: 16:9 landscape (1820×1024)

person_description: A UX designer sitting on a low linen sofa, drawing wireframes in a large sketchbook with a pencil. Bare feet on the concrete floor. Wearing neutral linen clothing.

lighting_description: Night scene. No natural light — windows show dark sky. The arc lamp is the ONLY light source, emitting warm 3800K amber-white light (#FFC66E) from its horizontal light bar. A focused warm pool illuminates the sketchbook and the person's hands. The rest of the room falls into deep warm shadow. The thin black arc rod is barely visible.

Scene: A minimalist living room with floor-to-ceiling glass windows. Polished concrete floor. A single low sofa. No other furniture. The arc lamp stands beside the sofa, its parabolic curve reaching over the person. A small side table with two stacked books.
```

#### Scene 2: #17 Hemisphere Desk Lamp — Day, Frontal

```
composition_type: Frontal view (정면). Desk centered horizontally in lower 1/3. Person centered. Wall behind fills upper 2/3.
aspect_ratio: 4:3 portrait (1024×1365)

person_description: A developer sitting at a wide light oak desk, typing on a laptop. Seen from directly in front. Wearing a simple dark crew-neck sweater. Head slightly bowed toward the screen.

lighting_description: Daytime. Soft natural daylight enters from a large window on the left side (not directly visible). Even, diffused illumination across the space. No harsh shadows. The hemisphere lamp sits on the desk — light is OFF. The lamp exists as a sculptural design object in the bright space.

Scene: A minimal home studio. Wide light oak desk (~180cm), a single Wegner-style chair, the hemisphere lamp on the desk to the person's left, a laptop, and a single ceramic mug. White walls. Light concrete floor. Nothing else in the room. Ceiling height ~4m. The space feels vast and quiet.
```

#### Scene 3: #11 Arch Portal Wall Light — Night, Frontal

```
composition_type: Frontal view (정면), perfect bilateral symmetry. Arch centered on far wall. Person centered below the arch.
aspect_ratio: 3:4 portrait (1024×1365)

person_description: An architect sitting on the polished concrete floor, leaning back against the wall directly beneath the arch. Holding a large hardcover architecture book open on their lap. Wearing dark clothing that blends into the shadows.

lighting_description: Night scene. No ambient light. The arch's concealed LED (behind the frame, between frame and wall) emits warm 3800K amber light (#FFC66E) onto the wall surface, creating an arch-shaped halo of warm light. The matte black arch frame itself remains a dark silhouette. The warm glow illuminates the person's shoulders, hands, and the open book. The corridor recedes into darkness in both directions.

Scene: A long, narrow gallery-like corridor. White walls, polished concrete floor. The arch is mounted on the far wall at eye level. No other fixtures, no furniture, no decoration. The architecture is minimal and monumental. The arch's warm backlight creates a luminous portal effect — the only island of warmth in an austere space.
```

#### Scene 4: #16 Cubic Pendant — Dusk, Side

```
composition_type: Side view (측면). Pendant hangs from top 1/4 of frame, centered. Person at table in lower half, slightly right of center.
aspect_ratio: 16:9 landscape (1820×1024)

person_description: An industrial designer standing at a large wooden worktable, assembling a small mockup model with their hands. Seen from the side. Wearing a simple apron over neutral clothing. Focused on the work — head bowed, hands active.

lighting_description: Late afternoon transitioning to dusk. Warm natural light from a tall window behind the person (backlit, soft). The cubic pendant is ON, emitting warm 3800K amber-white light (#FFC66E) downward. Two light sources merge — golden natural light from behind, warm amber from the pendant above. The pendant's glow creates a focused warm pool on the worktable surface.

Scene: A clean workshop / maker space. High ceiling (~5m), white walls, a single large wooden worktable (~200cm). The cubic pendant hangs from a thin black cord directly above the table. A few neatly arranged tools on the table. A tall window behind fills the background with soft backlight. The space is spare and purposeful.
```

---

### Moodboard Night Transformation (무드보드 다크모드 전환)

Day 무드보드 이미지를 `inlineData` 레퍼런스로 첨부 + 아래 프롬프트로 Night 버전 생성.

#### MOOD_NIGHT_BASE (모든 무드보드 Night에 적용)

```
Transform this editorial interior photograph into a night version. Keep the EXACT same composition, camera angle, person pose, person position, product position, furniture placement, and spatial layout.

CRITICAL — Lighting Transition (must be identical across all moodboard night images):
- Remove ALL natural daylight. Windows now show dark night sky — no blue, just warm black darkness.
- The product light is now ON. It is the PRIMARY and DOMINANT light source in the scene.
- Emission color: exactly 3800K color temperature, hex #FFC66E. Soft amber-white. NOT orange, NOT yellow, NOT pure white.
- Product emission brightness: 100% at diffuser center, 80% at diffuser edges.

CRITICAL — Ambient & Tone Consistency:
- Overall room darkness: 85-90% dark. Only the area immediately around the product is illuminated.
- Product light illumination radius: ~2x product size. Beyond this radius, surfaces fade to deep warm shadow.
- Wall/floor ambient tone: deep warm gray (#1A1816 range), NOT pure black. Subtle warmth preserved.
- Person visibility: only surfaces directly lit by the product are visible (hands, book, nearby clothing). Unlit parts of the person blend into shadow.
- Nearby surfaces (desk, floor, wall near product): catch warm amber reflections at 20-30% brightness, soft falloff.
- Distant surfaces: barely visible, 5-10% brightness, warm undertone.

Color grading: warm, intimate. No cool tones anywhere. Shadows are warm dark brown/gray, never blue-black. Film grain slightly more visible than day version.

Scene-specific lighting: {lighting_description}

Keep UNCHANGED: composition, camera angle, person pose and position, product position and form, furniture layout, aspect ratio, framing.
```

#### 통일 수치 요약

| 항목 | 값 |
|------|-----|
| 전체 어둡기 | 85-90% |
| 발광 중심 밝기 | 100% |
| 발광 가장자리 | 80% |
| 조명 반경 | ~2x 제품 크기 |
| 근접 표면 반사 | 20-30% brightness |
| 원거리 표면 | 5-10% brightness |
| 벽/바닥 톤 | #1A1816 (warm gray) |
| 발광 색온도 | 3800K (#FFC66E) |

---

## API Usage Notes

### 실제 설정 (`scripts/generate-product-images.mjs` 기준)

```js
// @google/genai
const MODEL = 'gemini-3.1-flash-image-preview';
await ai.models.generateContent({
  model: MODEL,
  contents: prompt,                    // Night은 [{ inlineData: Day이미지 }, { text: prompt }]
  config: {
    responseModalities: ['TEXT', 'IMAGE'],
    imageConfig: {
      aspectRatio: '3:4',              // STYLE.aspectRatio
      imageSize: '2K',                 // STYLE.resolution
    },
  },
});
```

- 키: 환경변수 `GEMINI_API_KEY` (또는 프로젝트 루트 `.env.local`)
- 출력: `src/assets/product/{id}.png`(Day), `{id}-1.png`(Night)
- 실행: `node scripts/generate-product-images.mjs --ids 16,17 --mode day`

### 일관성 유지 팁
- Night는 항상 Day 이미지를 레퍼런스(`inlineData`)로 넣어 형태·구도 일치를 강제한다.
- 배경색이 정확하지 않으면 "solid background color exactly #E8E5E1"(Day) / "#12100E"(Night) 강조.
- Night에서 과도한 글로우가 나타나면 "subtle, controlled glow" 추가.
