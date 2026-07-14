# Lumenstate Product Specs — Per-Product Form & Light Details

각 제품의 기하학적 형태, 설치 방식, 빛 방사 패턴 상세.
`prompt-template.md`의 `{form}`, `{form_detail}`, `{light_pattern_detail}`, `{fillRatio}` 슬롯에 삽입된다.

> **단일 진실 원천(SSOT)**: 이 문서는 `scripts/generate-product-images.mjs`의 `PRODUCTS` 배열과 동기화되어 있다.
> 프롬프트를 수정할 땐 **스크립트를 기준**으로 하고 이 문서를 함께 갱신한다. (`type`은 `src/data/products.js` 기준)
> 제품은 **#1~#20 전체**를 포함한다.

---

## Product #1 — Lumen Desk Pro

| Field | Value |
|-------|-------|
| type | ceiling |
| mounting | flush-mount |
| form | circular ceiling ring |
| fillRatio | 60 |

**form_detail:**
```
A circular ring mounted flush to the ceiling, viewed from directly below looking straight up.
The ring appears as a perfect geometric circle — matte black outer ring frame with a large
circular white frosted glass diffuser filling the interior. Diameter ~40cm. Viewed from below,
it reads as a pure circle within a circle: a black annulus framing a white disc. Perfect radial symmetry.
```

**light_pattern_detail:**
```
Warm amber light radiates downward from the frosted diffuser inside the ring.
The inner surface of the ring catches a subtle warm reflection.
A soft pool of light appears on the surface below.
The ring frame becomes a dark silhouette framing the glowing disc.
```

---

## Product #2 — Lumen Ceiling

| Field | Value |
|-------|-------|
| type | stand |
| mounting | floor-standing |
| form | parabolic arc floor lamp |
| fillRatio | 70 |

**form_detail:**
```
A large arc floor lamp. Thin black metal rod (diameter ~8mm) rises from a small rectangular
black stone base (~20cm wide). CRITICAL ARC GEOMETRY: The rod forms a WIDE, GENTLE arc — like a
quarter of a very large circle (radius ~150cm). The curve starts near-vertical at the base, then
bends GRADUALLY and CONTINUOUSLY rightward in a smooth, broad sweep. The horizontal span of the arc
is approximately EQUAL to the lamp height (~180cm wide, ~180cm tall). The rod descends gently at the
far end and terminates in a small horizontal light bar (~15cm wide) that hangs at roughly 140cm height.
The arc is NOT a tight Gothic arch — it is a wide, open, mathematically smooth curve like the
Castiglioni Arco lamp silhouette. Think of bending a thin steel rod into a perfect quarter-circle.
No sharp bend point, no kink, uniform curvature throughout.
```

**light_pattern_detail:**
```
The small horizontal light bar at the arc's end emits warm amber light downward.
A focused pool of warm light appears on the floor beneath the bar.
The thin arc rod is barely visible against the dark background.
The stone base catches minimal reflected light.
```

---

## Product #3 — Lumen Floor

| Field | Value |
|-------|-------|
| type | wall |
| mounting | wall-mount |
| form | horizontal rectangular wall sconce |
| fillRatio | 45 |

**form_detail:**
```
A wide horizontal rectangle mounted flat on a wall, viewed perfectly straight-on.
Matte white frosted glass front face (~30cm wide x 8cm tall) with a thin black metal frame border
(~2mm) and a narrow horizontal black slit running across the center. The frosted glass surface has
subtle internal light diffusion — not flat paint, but real translucent glass. Sharp edges with fine
chamfers that catch light. Perfect bilateral symmetry.
```

**light_pattern_detail:**
```
Warm amber light washes upward from the top edge and downward from the bottom edge.
The central black slit remains dark, creating a striking horizontal division.
Light creates a symmetrical glow pattern on the wall above and below the fixture.
```

---

## Product #4 — Lumen Wall

| Field | Value |
|-------|-------|
| type | wall |
| mounting | wall-mount |
| form | slim horizontal linear wall bar |
| fillRatio | 40 |

**form_detail:**
```
A very slim horizontal linear bar mounted on a wall, viewed perfectly straight-on.
Two parallel thin black anodized aluminum rails (~40cm wide x 2cm total height) with a narrow white
frosted glass strip between them. The frosted glass strip shows subtle translucency and internal light
scattering. The metal rails have fine brushed texture. Extremely thin and linear. Perfect bilateral symmetry.
```

**light_pattern_detail:**
```
Warm amber light emanates from the narrow gap between the two parallel rails.
Light washes the wall to left and right, creating a wide horizontal glow band.
The fixture appears as a thin luminous line floating on the dark wall.
```

---

## Product #5 — Lumen Table

| Field | Value |
|-------|-------|
| type | wall |
| mounting | wall-mount |
| form | flat rectangular wall panel |
| fillRatio | 40 |

**form_detail:**
```
A vertical rectangular panel mounted flush on a wall, viewed perfectly straight-on.
White frosted glass front face (~20cm wide x 28cm tall) with a thin matte black aluminum border frame
(~2mm). The frosted glass has subtle depth — not flat paint, but real opaline glass with soft internal
light scattering visible as a gentle luminosity gradient from center to edges. The black frame has fine
chamfered edges that catch a hairline of light. Perfect bilateral symmetry.
```

**light_pattern_detail:**
```
Warm amber light radiates upward from behind the top edge and downward from behind the bottom edge,
washing the wall. The front face remains a dark silhouette.
Creates a glowing halo effect around the rectangular perimeter.
```

---

## Product #6 — Lumen Ambient

| Field | Value |
|-------|-------|
| type | stand |
| mounting | floor-standing |
| form | tall vertical cylindrical column |
| fillRatio | 70 |

**form_detail:**
```
A tall slender cylinder standing upright on the floor. Matte black metal housing with a continuous
vertical frosted panel running the full height of one face. Small circular base (~12cm diameter).
Total height ~120cm, diameter ~8cm. A thin black power cord trails from the base.
```

**light_pattern_detail:**
```
The vertical frosted panel glows with warm amber light along its full height.
Light radiates outward from the panel face, illuminating the floor on one side.
The cylinder creates a tall luminous vertical line in the dark space.
The base and top emit subtle downward and upward wash respectively.
```

---

## Product #7 — Lumen Arc

| Field | Value |
|-------|-------|
| type | wall |
| mounting | wall-mount |
| form | square wall panel with rounded corners |
| fillRatio | 40 |

**form_detail:**
```
A square panel with generously rounded corners (~radius 8mm), mounted on a wall, viewed perfectly
straight-on. White frosted glass face (~18cm x 18cm) with a subtle matte black aluminum edge border
(~2mm). The frosted glass shows soft internal light diffusion — a gentle luminous quality distinct
from flat paint. The rounded corners have smooth, precision-machined transitions. The edge border has
a fine beveled profile that catches a thin line of light. Perfect bilateral symmetry.
```

**light_pattern_detail:**
```
Warm amber light radiates from all four edges outward onto the wall surface.
Creates a dramatic cross-shaped or diamond-shaped glow pattern.
The panel face becomes a dark square, while the surrounding wall catches the warm light
in all four cardinal directions.
```

---

## Product #8 — Lumen Sphere

| Field | Value |
|-------|-------|
| type | wall |
| mounting | wall-mount |
| form | split disc wall light |
| fillRatio | 50 |

**form_detail:**
```
A circular disc (~25cm diameter) mounted on a wall, split horizontally into two equal halves with a
precise ~8mm gap running through the exact center. The top half-disc and bottom half-disc are each
white frosted opaline glass with thin matte black aluminum edge frames (~2mm). The gap between the two
halves reveals darkness — a void cutting through the circle. Each half-disc has subtle convex curvature
on its frosted glass surface. The frosted glass shows real translucency and internal light scattering.
The precision gap creates geometric tension — a perfect circle interrupted by a single clean cut.
Viewed perfectly straight-on. Perfect bilateral symmetry.
```

**light_pattern_detail:**
```
Both half-discs glow with warm amber light from within. The critical visual: warm amber light also
emanates from the horizontal gap between the two halves, creating a bright luminous line bisecting the
circle. The gap becomes a slit of intense light — as if the circle is cracking open to reveal light
within. The wall behind catches a horizontal band of warm light projected through the gap.
Creates a dramatic split-sun or eclipse-like effect.
```

---

## Product #9 — Lumen Linear

| Field | Value |
|-------|-------|
| type | wall |
| mounting | wall-mount |
| form | circular frame with horizontal bisecting bar |
| fillRatio | 55 |

**form_detail:**
```
A perfect circle frame (diameter ~30cm, frame thickness ~1.5cm) mounted flat on a wall, with a thin
horizontal bar bisecting the circle at its exact center, connecting both sides of the ring. The bar has
a small junction node at the center point. All elements are matte black metal. Viewed straight-on.
```

**light_pattern_detail:**
```
Warm amber light fills the interior of the circular frame, radiating outward through a frosted inner
surface that spans the full circle. The horizontal bar and frame become dark silhouettes against the
glowing disc. Creates a luminous full-moon effect, similar to a solar eclipse with the bar casting a
thin shadow line across the illuminated disc.
```

---

## Product #10 — Lumen Pendant

| Field | Value |
|-------|-------|
| type | stand |
| mounting | floor-standing |
| form | tall cylindrical column with frosted body |
| fillRatio | 55 |

**form_detail:**
```
A tall cylinder standing upright, like a column or bollard. White frosted glass body (~12cm diameter
x 35cm tall) with thin black metal top cap and base ring. Simple, monolithic cylindrical form.
No visible seams or joints. Viewed straight-on from the front.
```

**light_pattern_detail:**
```
The entire frosted glass cylinder body glows uniformly with warm amber light.
Light radiates in all directions (360 degrees), creating a soft ambient glow.
The floor beneath catches a circular pool of warm light.
The black top cap and base ring frame the glowing column above and below.
```

---

## Product #11 — Lumen Mini

| Field | Value |
|-------|-------|
| type | wall |
| mounting | wall-mount |
| form | arch portal wall light |
| fillRatio | 40 |

**form_detail:**
```
A pure arch shape mounted on a wall, viewed perfectly straight-on. An open inverted-U form — a
semicircular arc on top continuing into two straight vertical legs (~12cm wide x 18cm tall overall).
The entire visible surface is ONLY solid matte black anodized aluminum — a single-material bar with a
half-round cross section (~1.5cm wide). NO glass, NO white, NO frosted surface, NO translucent material
visible from the front. The front face is 100% matte black metal. The two vertical legs end cleanly at
the bottom, not connected. A concealed LED strip is hidden on the back side between the frame and the
wall, invisible from the front. In this Day image the light is OFF — so it is purely a matte black metal
arch sculpture on the wall, nothing else. Perfect bilateral symmetry.
```

**light_pattern_detail:**
```
The hidden LED filament behind the arch frame activates, casting warm amber light onto the wall surface
behind and around the arch. The matte black frame itself remains dark — a silhouette — while the wall
behind glows with an arch-shaped halo of warm amber light. Light spills from behind the frame edges,
creating a dramatic backlit effect. The arch becomes a dark portal outlined by warm light.
```

---

## Product #12 — Lumen Studio

| Field | Value |
|-------|-------|
| type | ceiling |
| mounting | flush-mount |
| form | rectangular ceiling panel |
| fillRatio | 50 |

**form_detail:**
```
A long rectangular panel mounted flush to the ceiling, viewed from directly below looking straight up.
Matte black aluminum outer frame (~45cm wide x 15cm tall, frame width ~1.5cm) with a white frosted glass
diffuser filling the interior. The rectangle has an approximately 3:1 aspect ratio — clearly distinct
from any circular form. The frosted glass shows subtle internal light scattering and depth — not flat
white, but real translucent opaline glass with a gentle luminosity. The black frame has precision-machined
edges with fine chamfers catching thin lines of light. Perfect bilateral symmetry.
```

**light_pattern_detail:**
```
The rectangular frosted glass panel glows with warm amber light downward.
The elongated shape creates a wide, even wash of amber light below.
The 3:1 proportions make it read as a horizontal bar of warm light.
The black frame becomes a sharp dark border silhouette. Light on the surface below forms a soft rectangular pool.
```

---

## Product #13 — Lumen Spot

| Field | Value |
|-------|-------|
| type | stand |
| mounting | floor-standing |
| form | cylindrical bollard |
| fillRatio | 55 |

**form_detail:**
```
A vertical cylindrical bollard standing on a circular base plate. White matte body (~10cm diameter
x 35cm tall) with a horizontal translucent band near the top (~3cm height). Small circular indicator
on the front face. Flat circular base plate extends ~2cm beyond the cylinder diameter.
```

**light_pattern_detail:**
```
The translucent horizontal band near the top glows with warm amber light.
Light radiates outward in a 360-degree horizontal ring pattern.
The body above and below the band remains in relative shadow.
A subtle warm glow appears on the floor around the base plate.
```

---

## Product #14 — Lumen Flex

| Field | Value |
|-------|-------|
| type | wall |
| mounting | wall-mount |
| form | multi-tier horizontal wall fixture |
| fillRatio | 40 |

**form_detail:**
```
Two parallel horizontal rectangular bars stacked vertically on a wall, viewed perfectly straight-on.
Each bar is a flat rectangle (~30cm wide x 4cm tall) with sharp 90-degree corners. Matte black aluminum
frame borders (~2mm) with white frosted opaline glass front face. The two bars are spaced ~4cm apart,
centered on a minimal wall mount bracket. Clean geometric rectangles with no rounded ends, no cylindrical
shapes. The frosted glass shows subtle internal light scattering. Perfect bilateral symmetry.
```

**light_pattern_detail:**
```
Warm amber light emanates from each rectangular bar's frosted glass face.
Light washes the wall above and below the fixture.
The two bars create parallel horizontal glow lines with a dark gap between them.
The wall behind catches a layered warm wash pattern.
```

---

## Product #15 — Lumen Ring

| Field | Value |
|-------|-------|
| type | desk |
| mounting | freestanding |
| form | modular block composition |
| fillRatio | 45 |

**form_detail:**
```
Five rectangular blocks with rounded corners assembled in an asymmetric grid composition.
Each block varies in size (roughly 4x8cm to 8x12cm). Blocks are arranged like an abstract Tetris
formation or Mondrian-inspired layout. White frosted faces with black (~3mm) edge frames.
The composition stands freely on a surface.
```

**light_pattern_detail:**
```
Each block's frosted face glows individually with warm amber light.
Different blocks may glow at slightly different intensities, creating depth variation.
Light seeps through the gaps between blocks.
The overall composition becomes a warm, luminous sculptural cluster.
The surface beneath catches a complex warm light pattern from multiple sources.
```

---

## Product #16 — Lumen Cube

| Field | Value |
|-------|-------|
| type | ceiling |
| mounting | flush-mount |
| form | cubic pendant |
| fillRatio | 45 |

**form_detail:**
```
A cube-shaped pendant light hanging from a single thin matte black cord/rod from the ceiling.
The cube (~15cm) has a matte black aluminum frame structure at the top portion and edges, with white
frosted opaline glass panels forming the lower portion and sides. The black metal frame wraps around
the top and vertical edges like a cage holding the glass cube. Viewed straight-on from the front.
The cord extends upward from the center top. Clean, sharp 90-degree geometry. Perfect bilateral symmetry.
```

**light_pattern_detail:**
```
The frosted glass faces of the cube glow with warm amber light from an internal source.
Light radiates in all four visible directions through the glass panels.
The black frame edges remain as dark geometric lines against the warm glow.
A soft pool of warm light falls on the surface below.
The cube becomes a floating lantern of warm geometric light.
```

---

## Product #17 — Lumen Dome

| Field | Value |
|-------|-------|
| type | desk |
| mounting | freestanding |
| form | hemisphere desk lamp |
| fillRatio | 40 |

**form_detail:**
```
A hemisphere of white frosted opaline glass (~18cm diameter) placed dome-down on a thin circular matte
black aluminum base plate (~20cm diameter, ~5mm thick). The glass dome sits like an inverted bowl on the
base — a mushroom or jellyfish silhouette. The frosted glass shows subtle translucency and internal light
scattering. The base plate extends slightly beyond the dome edge, creating a thin black ring visible
around the bottom. Viewed straight-on from the front at eye level. Perfect radial symmetry.
```

**light_pattern_detail:**
```
The hemisphere glows from within with warm amber light. The curved glass creates a natural gradient —
brightest at the apex, softening toward the base where the glass meets the black plate. Light spills out
from the gap between the dome edge and the base plate, casting a warm ring of light on the desk surface.
A soft, intimate warm glow.
```

---

## Product #18 — Lumen Capsule

| Field | Value |
|-------|-------|
| type | stand |
| mounting | floor-standing |
| form | capsule floor lamp |
| fillRatio | 65 |

**form_detail:**
```
A horizontal capsule/pill shape (~20cm wide x 10cm tall) made of white frosted opaline glass, mounted
atop a thin vertical matte black aluminum rod (~120cm tall, ~1cm diameter). The rod stands on a small
circular base plate (~15cm diameter). The capsule is a rounded rectangle — a rectangle with perfectly
semicircular ends, oriented horizontally. The capsule sits centered on top of the rod. The frosted glass
shows subtle translucency. Viewed straight-on from the front at eye level. Perfect bilateral symmetry.
```

**light_pattern_detail:**
```
The capsule glows with warm amber light from within, radiating horizontally in both directions.
The rounded ends emit softer light, the flat center faces emit the most.
The thin black rod below remains dark, making the capsule appear to float.
Warm light washes outward to both sides.
```

---

## Product #19 — Lumen Stack

| Field | Value |
|-------|-------|
| type | wall |
| mounting | wall-mount |
| form | stacked disc wall light |
| fillRatio | 45 |

**form_detail:**
```
Three identical circular discs (~18cm diameter, ~1.5cm thick each) mounted on a wall, stacked vertically
with ~6mm gaps between them. Each disc is white frosted opaline glass with a thin matte black aluminum
edge ring (~2mm). The three discs are aligned on the same vertical center axis, connected by a hidden
wall mount bracket behind. The gaps between discs are uniform and precise. Each disc has subtle convex
curvature on its frosted glass face. Viewed perfectly straight-on. Perfect bilateral symmetry.
```

**light_pattern_detail:**
```
The gaps between the three stacked discs emit warm amber light — three horizontal lines of light.
The disc faces themselves remain as dark silhouettes.
Light washes the wall above and below the stack and spills through each gap horizontally.
Creates three parallel luminous lines — a rhythmic pattern of light and dark.
```

---

## Product #20 — Lumen Prism

| Field | Value |
|-------|-------|
| type | desk |
| mounting | freestanding |
| form | pyramid prism desk lamp |
| fillRatio | 15 |

**form_detail:**
```
A small, compact square-base pyramid (~10cm base, ~8cm tall) sitting on a surface, viewed straight-on
from the front at eye level. A tiny desk object. The pyramid has 4 triangular faces rising from a square
base to a single apex point at the top center. Each triangular face is white frosted opaline glass.
All edges — the 4 base edges and 4 rising edges meeting at the apex — are thin matte black aluminum frames
(~2mm). The black frame lines create a geometric wireframe skeleton holding the glass faces. From this
frontal view, the front face is fully visible, with the two side faces angling away symmetrically.
The apex point is at the top center of the composition. Small and precious. Perfect bilateral symmetry.
```

**light_pattern_detail:**
```
All frosted glass faces glow with warm amber light from an internal source.
The black edge frames create dark geometric lines against the warm glow.
The apex is the brightest convergence point.
Light washes downward onto the surface below in a square pattern.
A luminous geometric solid.
```
