import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {
  DocumentTitle,
  PageContainer,
  SectionTitle,
} from '../../components/storybookDocumentation';
import { products } from '../../data/products';
import defaultTheme from '../../styles/themes/default.js';
import promptTemplateRaw from '../../../docs/lumenstate/image-generation/prompt-template.md?raw';

export default {
  title: 'Overview/Lumenstate/08 Concept & Flow',
  parameters: {
    layout: 'padded',
  },
};

/**
 * 웨비나 슬라이드(cases.js, content.js WB4-C-3)에서 옮긴 컨셉. 값은 슬라이드 SSOT를 그대로 쓴다.
 * VDL src/data/presentations/webinar04/cases.js, content.js
 */
const CONCEPT = {
  experiment: 'Prompt is new design token',
  subtitle: '기획 의도에 맞는 디자인 토큰과 브랜드 무드를 함께 관리',
  approach: '재료 먼저',
  frame: {
    name: '메타 학습',
    oneLiner: '전문가라서가 아닙니다. 필요한 요소를 빨리 파악하고, 심화 리서치하고, AI에 학습시킨 결과입니다',
  },
  metaLearning: {
    question: '내가 조명 전문가인가? 아닙니다.',
    needed: '광원, 색온도, 재질처럼 조명 제품 사진에 필요한 요소',
    note: '그 요소들을 심화 리서치해 디자인 토큰과 제품 사진 프롬프트의 공통 조건으로 정리하고 AI에 학습시킨 결과',
  },
};

/** theme 토큰 값. 손으로 적지 않고 theme 객체에서 읽는다 (src/styles/themes/default.js) */
const PAL = defaultTheme.palette;
const TOKENS = {
  wall: { path: 'palette.background.default', value: PAL.background.default },
  black: { path: 'palette.primary.main', value: PAL.primary.main },
  accent: { path: 'palette.secondary.main (brand.accent)', value: PAL.secondary.main },
  noon: { path: 'palette.timeline.noon', value: PAL.timeline.noon },
  midnight: { path: 'palette.timeline.midnight', value: PAL.timeline.midnight },
  radius: { path: 'shape.borderRadius', value: String(defaultTheme.shape.borderRadius) },
  slow: { path: 'transitions.duration.slow', value: `${ defaultTheme.transitions.duration.slow }ms` },
};

/**
 * 결정 스레드. 한 줄이 하나의 사고 흐름이다: 기획·UX(01·02)가 정한 것 → 비주얼 디렉션(03)이 번역한 값 →
 * 같은 값이 theme 토큰이 된 자리 → 같은 값이 프롬프트 문장이 된 자리. 인용은 문서 원문 그대로.
 */
const DECISION_THREADS = [
  {
    thread: '하루의 시간',
    planning: '01 1절 "하루의 시간과 공간 속에 놓인 빛의 상태". 01 4.2 TimeOfDay "모든 장면이 공유하는 낮·밤 사이 시각"',
    visual: '03 1절 "어떤 장면도 낮 전용이거나 밤 전용이 아니다, 두 상태가 같은 팔레트 안에 있다". 3.1 시간대 배경 Noon~Midnight',
    tokens: ['noon', 'midnight'],
    prompt: 'Day "Background: clean, uniform warm off-white (#E8E5E1)". Night "Background: uniform deep warm black, exactly #12100E"',
  },
  {
    thread: '3800K 색온도',
    planning: '01 3.1 Continuity "아침의 선명함에서 저녁의 온기로"',
    visual: '03 1절 "3800K의 따뜻한 뉴트럴을 쓴다". 3.1 3800K Amber, 근거 "색온도의 번역". 4절 Night LOOK "발광색 3800K #FFC66E"',
    tokens: ['accent'],
    prompt: 'Night "Emission color: exactly 3800K color temperature, hex #FFC66E. Soft amber-white. NOT orange, NOT yellow, NOT pure white"',
  },
  {
    thread: '발광의 밝기 분포',
    planning: '01 4.2 Product "형태와 낮·밤 이미지 쌍". 밝기 수치는 기획 문서에 없던 여백',
    visual: '03 4절 Night LOOK "디퓨저 중심 100% 가장자리 80%, 주변 반사 20~30%". common-style 6절에서 수치로 굳음',
    tokens: [],
    tokenNote: '토큰 없음. 사진에만 쓰는 수치',
    prompt: 'Night "Diffuser center brightness: 100%", "Diffuser edge brightness: 80%", "Wall/surface ambient reflection: 20-30%"',
  },
  {
    thread: '형태와 재질',
    planning: '01 3.1 Immanence "건축과 하나가 되어 조용히 머무는 빛". 3.2 태도 "절제 · 건축적"',
    visual: '03 3.3 radius "전부 각지게". 1절 하지 않는 것 "그라디언트와 글로우 · 둥근 모서리". 4절 Day SUBJECT "무광 검정 알루미늄 프레임과 화이트 프로스티드 글라스"',
    tokens: ['radius', 'black'],
    prompt: 'Day "Extreme geometric precision in the tradition of Bauhaus", "Material: matte black anodized aluminum frame with white frosted glass diffuser"',
  },
  {
    thread: '구도와 여백',
    planning: '01 3.3 시각 언어 "절제된 미니멀, 건축적". 커뮤니케이션 "에디토리얼, 건축 저널 톤"',
    visual: '03 4절 Day FORMAT "3:4, 정중앙 정면, 제품이 프레임의 40~60%, 사방 15% 이상 여백"',
    tokens: [],
    tokenNote: '토큰 없음. 카드 비율 3:4 는 컴포넌트가 쥠',
    prompt: 'Day "Composition: perfectly centered in frame", "fills approximately {fillRatio}% of the image area", "Minimum 15% clear padding". Padding Boundary Rule',
  },
  {
    thread: '제품 정보가 슬롯으로',
    planning: '02 3.1 Product 속성 "이름, 유형, 설치 방식, 낮·밤 이미지 쌍", 영속성 "정적" (products.js)',
    visual: '03 4절 Day 하지 않는 것 "대각선·3/4 뷰, 원근 왜곡". Camera Angle Rule: mounting 마다 시점이 다름',
    tokens: [],
    tokenNote: '토큰 없음. products.js 의 mounting · form · lightPattern 필드',
    prompt: 'Day "{form}", "{form_detail}", "Camera: {camera}". Night "Light behavior: {light_pattern_detail}"',
  },
  {
    thread: '낮에서 밤을 만든다',
    planning: '01 4.2 Product "낮·밤 이미지 쌍". 01 4.2 TimeOfDay "모든 장면이 공유하는"',
    visual: '03 4절 Night FORMAT "Day 컷과 같은 형태·구도·크기. Day 이미지를 레퍼런스로 변환한다". 3.3 전환 템포 slow 600 "낮·밤 블렌딩"',
    tokens: ['slow'],
    prompt: 'Night "Transform this product lighting fixture image into a night/dark mode version. Keep the EXACT same product shape, angle, composition, position, and size"',
  },
  {
    thread: '무드 컷',
    planning: '01 4.2 BrandContent "브랜드 선언, 가치 문구, 무드 이미지". 3.3 "에디토리얼, 건축 저널 톤"',
    visual: '03 4절 브랜드 무드 Hero FORMAT "3:2, 인물과 조명은 우측 중앙에서 하단, 좌상단은 타이틀이 얹히므로 완전히 빈 벽"',
    tokens: ['wall'],
    prompt: 'Brand Moodboard Template "at least 40% of the frame is empty wall/floor/ceiling", MOOD_NEGATIVE (generate-product-images.mjs)',
  },
];

/**
 * 프롬프트 줄마다 붙일 출처. test 가 맞는 첫 규칙을 쓴다. token 은 TOKENS 의 키.
 * 프롬프트 본문은 prompt-template.md 원문에서 꺼내므로 여기에는 출처만 있다.
 */
const DAY_NOTES = [
  { test: /^A minimalist \{form\}/, from: '02 3.1 Product 유형·형태 → product-specs.md form 슬롯. 03 1절 Warm Minimal' },
  { test: /^\{form_detail\}/, from: 'product-specs.md 제품별 form_detail' },
  { test: /^Material:/, from: '03 4절 Day SUBJECT 무광 검정 알루미늄 + 프로스티드 글라스', token: 'black' },
  { test: /^The light is OFF/, from: '01 4.2 낮·밤 쌍의 낮 상태. 03 4절 Day SUBJECT "조명은 꺼진 상태"' },
  { test: /^Background:/, from: '03 3.1 Wall Tint White (배경·지면)', token: 'wall' },
  { test: /^Lighting:/, from: '03 4절 Day LOOK "좌상단 소프트박스 확산광, 제품 아래 약한 접지 그림자". 3.3 elevation 방향성 없는 확산광' },
  { test: /^Composition:/, from: '03 4절 Day FORMAT 40~60%, 사방 15% 여백. Padding Boundary Rule' },
  { test: /^Camera:/, from: '02 3.1 설치 방식(mounting) → Camera Angle Rule' },
  { test: /^Style:/, from: '03 1절 무드 Editorial · Architectural. 4절 Day LOOK photorealistic product photography' },
  { test: /^No environment/, from: '03 1절 하지 않는 것. 4절 Day 하지 않는 것 "대각선·3/4 뷰, 보케, 렌즈 플레어"' },
];
const NIGHT_NOTES = [
  { test: /^Transform this/, from: '03 4절 Night FORMAT "Day 이미지를 레퍼런스로 변환한다". 01 4.2 낮·밤 쌍' },
  { test: /^CRITICAL/, from: '03 1절 "두 상태가 같은 팔레트 안에 있다"' },
  { test: /^- Background: uniform deep warm black/, from: '03 3.1 Warm Black, 시간대 배경 Midnight', token: 'midnight' },
  { test: /^- Emission color/, from: '03 1절 3800K. 3.1 3800K Amber "색온도의 번역"', token: 'accent' },
  { test: /^- Diffuser center/, from: '03 4절 Night LOOK. common-style 6절 발광 강도' },
  { test: /^- Diffuser edge/, from: 'common-style 6절 가장자리 80%' },
  { test: /ambient reflection/, from: 'common-style 6절 반사 20~30%. 기획 문서에 없던 여백을 결과를 보며 굳힌 수치' },
  { test: /^- Shadow: none/, from: '03 4절 Night 하지 않는 것 "외부 조명, 그림자"' },
  { test: /^- Background: change to/, from: '03 3.1 Warm Black', token: 'black' },
  { test: /^- Light state/, from: '03 4절 Night LOOK "제품 자체가 유일한 광원", 발광색 3800K', token: 'accent' },
  { test: /^- Light behavior/, from: 'products.js lightPattern → product-specs.md light_pattern_detail 슬롯' },
  { test: /ONLY light source/, from: '03 4절 Night LOOK "제품 자체가 유일한 광원"' },
  { test: /^- Nearby surfaces/, from: 'common-style 6절 주변 반사' },
  { test: /^- Matte black aluminum frame remains dark/, from: '03 3.1 Warm Black. 4절 Day SUBJECT 재질을 밤에도 유지' },
  { test: /^Keep unchanged/, from: '03 4절 Night FORMAT "같은 형태·구도·크기". Padding Boundary Rule' },
  { test: /^No text/, from: '03 4절 Night 하지 않는 것 "배경 그라디언트, 외부 조명"' },
];

/**
 * prompt-template.md 원문에서 헤딩 아래 첫 코드 블록의 줄들을 꺼낸다. 문서를 복사하지 않고 raw import 를 자른다.
 *
 * @param {string} raw - prompt-template.md 원문
 * @param {string} heading - 찾을 헤딩 (예: '## Day Mode Template')
 * @returns {string[]} 코드 블록의 비어 있지 않은 줄
 */
function extractBlock(raw, heading) {
  const start = raw.indexOf(heading);
  if (start < 0) return [];
  const open = raw.indexOf('```', start);
  const close = raw.indexOf('```', open + 3);
  if (open < 0 || close < 0) return [];
  return raw.slice(open + 3, close).split('\n').map((line) => line.trim()).filter(Boolean);
}

const DAY_LINES = extractBlock(promptTemplateRaw, '## Day Mode Template');
const NIGHT_LINES = extractBlock(promptTemplateRaw, '## Night Mode Template');

/**
 * 프롬프트 한 줄과 그 줄의 출처. 줄은 문서 원문이고 출처만 이 페이지가 붙인다.
 *
 * Props:
 * @param {string} line - 프롬프트 줄 원문 [Required]
 * @param {Array<{ test: RegExp, from: string, token?: string }>} notes - 출처 규칙 [Required]
 */
function AnnotatedLine({ line, notes }) {
  const note = notes.find((rule) => rule.test.test(line));
  const token = note && note.token ? TOKENS[note.token] : null;
  return (
    <Box sx={ { py: 0.75, borderBottom: 1, borderColor: 'divider' } }>
      <Typography variant="caption" component="div" sx={ { fontFamily: 'monospace', whiteSpace: 'pre-wrap' } }>
        { line }
      </Typography>
      { note && (
        <Stack direction="row" spacing={ 1 } alignItems="center" sx={ { mt: 0.5, flexWrap: 'wrap' } }>
          <Typography variant="caption" color="text.secondary">← { note.from }</Typography>
          { token && (
            <Chip size="small" variant="outlined" label={ `${ token.path } = ${ token.value }` } sx={ { fontFamily: 'monospace' } } />
          ) }
        </Stack>
      ) }
    </Box>
  );
}

/** 흐름 표. story 는 스토리 링크(01~03은 MDX docs 페이지의 --docs id) */
const FLOW_ROWS = [
  {
    stage: '기획',
    decided: '한 줄 요약(빛의 상태로 제품을 만남), 다루는 대상, 핵심 과업',
    artifact: 'docs/lumenstate/01-project-summary.md (1·4.2·5절)',
    story: { label: '01 Project Summary', id: 'overview-lumenstate-01-project-summary--docs' },
  },
  {
    stage: 'UX',
    decided: '시나리오 4개, 데이터 모델(01 4.2절 이름 그대로), 컴포넌트 리스트',
    artifact: 'docs/lumenstate/02-ux-flow.md (1·3·5절)',
    story: { label: '02 UX Flow', id: 'overview-lumenstate-02-ux-flow--docs' },
  },
  {
    stage: '비주얼 디렉션',
    decided: '무드 5키워드, 웜 뉴트럴 4색과 3800K 앰버, 이미지·에셋 방향 표',
    artifact: 'docs/lumenstate/03-visual-direction.md (1·3.1·4절) → src/styles/themes/default.js',
    story: { label: '03 Visual Direction', id: 'overview-lumenstate-03-visual-direction--docs' },
  },
  {
    stage: '재료 준비',
    decided: '공통 스타일 규칙, 프롬프트 템플릿(Day/Night), 제품별 슬롯, 생성 파이프라인',
    artifact: 'docs/lumenstate/image-generation/*, scripts/generate-product-images.mjs',
    story: { label: '07 Assets', id: 'overview-lumenstate-07-assets--default' },
  },
  {
    stage: '화면',
    decided: '재활용 3, 수정 6, 신규 29 컴포넌트로 조립',
    artifact: 'src/components/**',
    story: { label: '0. Hierarchy', id: 'custom-component-0-hierarchy--default' },
  },
];

/** 증거 표. status 는 '있음' | '파생' | '없음'. story 는 원문을 보여 주는 Appendix docs id (있을 때만). */
const EVIDENCE_ROWS = [
  {
    id: 'E1',
    item: '에셋 유형별 FORMAT / LOOK / SUBJECT 표',
    source: 'docs/lumenstate/03-visual-direction.md 4절',
    status: '있음',
    note: '',
  },
  {
    id: 'E2',
    item: '프롬프트 템플릿(슬롯 구조, Day/Night 예시, 네거티브)',
    source: 'docs/lumenstate/image-generation/prompt-template.md',
    status: '있음',
    story: 'overview-lumenstate-appendix-prompt-template--docs',
    note: 'Day/Night 템플릿, Camera Angle Rule, Padding Boundary Rule',
  },
  {
    id: 'E3',
    item: '공통 스타일 규칙(배경, 조명, 색온도, 카메라, 패딩 수치)',
    source: 'docs/lumenstate/image-generation/common-style.md',
    status: '있음',
    story: 'overview-lumenstate-appendix-common-style--docs',
    note: '',
  },
  {
    id: 'E4',
    item: '제품별 스펙이 프롬프트 슬롯으로',
    source: 'docs/lumenstate/image-generation/product-specs.md, src/data/products.js',
    status: '있음',
    story: 'overview-lumenstate-appendix-product-specs--docs',
    note: `제품 20종. type·mounting·form·fillRatio가 {form}·{camera}·{fillRatio} 슬롯에 대응`,
  },
  {
    id: 'E5',
    item: '생성 스크립트·파이프라인(모델명, 순서, dry-run, 레퍼런스 체인)',
    source: 'scripts/generate-product-images.mjs',
    status: '있음',
    note: '903줄. 모델 gemini-3.1-flash-image-preview, --dry-run·--mode 지원',
  },
  {
    id: 'E6',
    item: '생성 결과 에셋과 파일명 규칙({id} / {id}-1 낮·밤 쌍)',
    source: 'src/assets/product (40장)',
    status: '있음',
    note: '',
  },
  {
    id: 'E7',
    item: '토큰 ↔ 프롬프트 연결(theme 팔레트·색온도 값이 프롬프트 색·광 규칙과 동일)',
    source: 'src/styles/themes/default.js ↔ image-generation/common-style.md',
    status: '있음',
    note: 'BRAND_COLORS.accent #FFC66E = 3800K 발광색 hex',
  },
  {
    id: 'E8',
    item: '무드보드·브랜드 컷 프롬프트(제품 컷과 구분)',
    source: 'image-generation/prompt-template.md, common-style.md 10절, src/assets/brand-mood (14장)',
    status: '있음',
    story: 'overview-lumenstate-appendix-prompt-template--docs',
    note: '',
  },
];

const STATUS_COLOR = { 있음: 'success', 파생: 'info', 없음: 'default' };

/** 키워드 표(에셋 유형 / FORMAT / LOOK / SUBJECT). 03 4절에서 파생 */
const KEYWORD_ROWS = [
  {
    type: '제품 컷 Day',
    format: '3:4, 정면 40~60%, 여백 15%+',
    look: 'Bauhaus 기하 정밀, 좌상단 소프트박스',
    subject: '무광 블랙 알루미늄 + 화이트 프로스티드 글라스, OFF',
  },
  {
    type: '제품 컷 Night',
    format: 'Day와 동일 형태·구도, 배경 #12100E',
    look: '제품 자체가 유일 광원, 3800K #FFC66E',
    subject: 'Day와 1:1 쌍, 우하단 4각 별 워터마크',
  },
  {
    type: '브랜드 무드 Hero',
    format: '3:2, 인물·조명은 우측 중앙~하단',
    look: '웜 뉴트럴 톤, 단일 평면 벽',
    subject: '일반 실내의 2배 규모감, 같은 장면 낮·밤 두 장',
  },
  {
    type: '브랜드 무드 보조',
    format: '3:4 또는 16:9, 원본 비율 표시',
    look: 'Hero와 같은 톤',
    subject: '무드 이름별 낮·밤 파일 쌍',
  },
];

/** 프롬프트 템플릿 슬롯 표(prompt-template.md + product-specs.md) */
const SLOT_ROWS = [
  { slot: '{form}', origin: 'product-specs.md 제품별 form 필드', example: 'circular ceiling ring' },
  { slot: '{form_detail}', origin: 'product-specs.md 제품별 form_detail 블록', example: 'Product #1: A circular ring mounted flush to the ceiling...' },
  { slot: '{fillRatio}', origin: 'product-specs.md 제품별 fillRatio 필드', example: '60 (%)' },
  { slot: '{camera}', origin: 'prompt-template.md CAMERA_ANGLES, mounting 값으로 분기', example: 'flush-mount → 정바로 아래에서 위를 올려다봄' },
  { slot: '{light_pattern_detail}', origin: 'product-specs.md 제품별 light_pattern_detail 블록', example: 'Warm amber light radiates downward...' },
];

/** 파이프라인 표(scripts/generate-product-images.mjs) */
const PIPELINE_ROWS = [
  { step: '1. Day 생성', input: '텍스트 프롬프트(공통 규칙 + 제품 슬롯)', output: '{id}.png (낮, OFF)', tool: 'Gemini gemini-3.1-flash-image-preview' },
  { step: '2. Night 생성', input: 'Day 이미지({id}.png)를 inlineData 레퍼런스 + Night 변환 프롬프트', output: '{id}-1.png (밤, ON)', tool: 'Gemini gemini-3.1-flash-image-preview' },
  { step: '검증', input: '--dry-run 플래그', output: '프롬프트만 콘솔 출력, API 호출 없음', tool: 'CLI' },
];

/** 토큰 대응 표(theme ↔ 프롬프트 규칙) */
const TOKEN_ROWS = [
  { token: 'palette.secondary.main (brand.accent)', value: '#FFC66E', rule: 'Night 발광색 hex, 3800K 색온도' },
  { token: 'palette.background.default / .paper', value: '#E8E5E1 (Wall Tint White)', rule: 'Day 배경색과 동일' },
  { token: 'palette.primary.main / text.primary', value: '#12100E (Warm Black)', rule: 'Night 배경색과 동일' },
];

/** 없는 것 */
const MISSING_ITEMS = [
  '03 4.1절 레퍼런스: 사용자가 제공한 레퍼런스 이미지가 원문에 없다(문서 자체가 "해당 없음"으로 명시).',
];

/** 슬라이드 사고 지도 대응(VDL thinking/lumenstate.js nodes 중 C-3과 닿는 A·B·C) */
const THINKING_ROWS = [
  { decision: 'A1', label: '제품을 낮·밤 이미지 쌍으로 정의', evidence: '01-project-summary.md 4.2절, src/data/products.js' },
  { decision: 'A2', label: '웜 뉴트럴 4색과 3800K 앰버', evidence: '03-visual-direction.md 3.1절, default.js BRAND_COLORS' },
  { decision: 'A3', label: '제품 컷은 3:4 정면 스튜디오 규격', evidence: '03-visual-direction.md 4절, common-style.md' },
  { decision: 'A4', label: '밤 컷은 낮 컷을 변환해 생성', evidence: 'prompt-template.md Night Mode Template' },
  { decision: 'C2', label: '발광 밝기 분포와 반사 범위(실험으로 채움)', evidence: 'common-style.md 6절 색온도(중심 100% / 가장자리 80% / 반사 20~30%)' },
];

/**
 * 스토리 링크
 *
 * Props:
 * @param {string} id - 스토리 id (index.json 의 id) [Required]
 * @param {node} children - 링크 텍스트 [Required]
 */
function StoryLink({ id, children }) {
  return (
    <a href={ `?path=/story/${id}` } target="_top" style={ { color: 'inherit' } }>
      { children }
    </a>
  );
}

export const Default = {
  render: () => (
    <>
      <DocumentTitle
        title="Concept & Flow"
        status="Available"
        note="WB4-C-3 Prompt is new design token / 재료 먼저 / 메타 학습"
        brandName="Design System"
        systemName="Lumenstate"
        version="1.0"
      />
      <PageContainer>
        <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
          08 컨셉과 재료 흐름
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={ { mb: 4 } }>
          웨비나 3차(WB4) Part C 실험 C-3 &quot;Prompt is new design token&quot;이 이 예제에서 확인되는 증거를 정리합니다.
        </Typography>

        <SectionTitle title="웨비나 컨셉" />
        <Box
          sx={ {
            p: 3,
            border: '1px solid',
            borderColor: 'divider',
            mb: 2,
          } }
        >
          <Stack spacing={ 1.5 }>
            <Typography variant="h6" sx={ { fontWeight: 700 } }>
              { CONCEPT.experiment }
            </Typography>
            <Typography variant="body2" color="text.secondary">
              { CONCEPT.subtitle }
            </Typography>
            <Stack direction="row" spacing={ 1 }>
              <Chip label={ `갈래: ${ CONCEPT.approach }` } size="small" />
              <Chip label={ `프레임: ${ CONCEPT.frame.name }` } size="small" color="primary" />
            </Stack>
            <Typography variant="caption" color="text.secondary">
              { CONCEPT.frame.oneLiner }
            </Typography>
            <Typography variant="body2">
              { CONCEPT.metaLearning.question } { CONCEPT.metaLearning.needed }를 심화 리서치해서 디자인 토큰과 제품 사진 프롬프트의 공통 조건으로 정리하고 AI에 학습시켰습니다.
            </Typography>
          </Stack>
        </Box>
        <Typography variant="body2" sx={ { mb: 2 } }>
          이 예제가 이 컨셉의 증거인 이유: (1) 제품 사진의 색온도(3800K, #FFC66E)가 theme의 secondary.main과 같은 값이라 토큰과 이미지가 문자 그대로 같은 값을 공유합니다.
          (2) 프롬프트 템플릿과 공통 스타일 문서가 스크립트의 buildDayPrompt/buildNightPrompt를 그대로 옮긴 것이라 문서와 코드가 어긋나지 않습니다.
          (3) 밤 컷은 텍스트로 새로 만들지 않고 낮 이미지를 레퍼런스로 변환해, 20종 모두 같은 형태 쌍을 보장합니다.
        </Typography>

        <SectionTitle title="흐름: 기획에서 화면까지" />
        <TableContainer sx={ { mb: 2 } }>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>단계</TableCell>
                <TableCell>여기서 정한 것</TableCell>
                <TableCell>남긴 것</TableCell>
                <TableCell>보는 곳</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { FLOW_ROWS.map((row) => (
                <TableRow key={ row.stage }>
                  <TableCell>{ row.stage }</TableCell>
                  <TableCell>{ row.decided }</TableCell>
                  <TableCell>
                    <Typography variant="caption" sx={ { fontFamily: 'monospace' } }>
                      { row.artifact }
                    </Typography>
                  </TableCell>
                  <TableCell>
                    { row.story ? (
                      <StoryLink id={ row.story.id }>{ row.story.label }</StoryLink>
                    ) : (
                      <Typography variant="caption" color="text.secondary">문서(스토리북 미노출)</Typography>
                    ) }
                  </TableCell>
                </TableRow>
              )) }
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle
          title="사고의 흐름: 같은 결정이 토큰과 프롬프트가 된다"
          description="Prompt is new design token 의 뜻. 기획·UX(01·02)가 정한 것을 비주얼 디렉션(03)이 값으로 번역하고, 그 값이 theme 토큰과 프롬프트 문장에 동시에 들어간다. 인용은 문서 원문, 토큰 값은 theme 에서 읽는다."
        />
        <TableContainer sx={ { mb: 2 } }>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>스레드</TableCell>
                <TableCell>기획 · UX 가 정한 것</TableCell>
                <TableCell>비주얼 디렉션이 번역한 값</TableCell>
                <TableCell>theme 토큰</TableCell>
                <TableCell>프롬프트 문장</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { DECISION_THREADS.map((row) => (
                <TableRow key={ row.thread }>
                  <TableCell sx={ { whiteSpace: 'nowrap', fontWeight: 600 } }>{ row.thread }</TableCell>
                  <TableCell>{ row.planning }</TableCell>
                  <TableCell>{ row.visual }</TableCell>
                  <TableCell>
                    { row.tokens.length === 0 && (
                      <Typography variant="caption" color="text.secondary">{ row.tokenNote }</Typography>
                    ) }
                    <Stack spacing={ 0.5 }>
                      { row.tokens.map((key) => (
                        <Typography key={ key } variant="caption" sx={ { fontFamily: 'monospace' } }>
                          { TOKENS[key].path } = { TOKENS[key].value }
                        </Typography>
                      )) }
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Typography variant="caption" sx={ { fontFamily: 'monospace' } }>{ row.prompt }</Typography>
                  </TableCell>
                </TableRow>
              )) }
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="body2" color="text.secondary" sx={ { mb: 4 } }>
          읽는 법: 왼쪽에서 오른쪽으로 갈수록 같은 결정이 더 구체적인 값이 된다. 토큰이 없는 행은 화면에는 쓰이지 않고 사진에만 쓰이는 값이다.
          그래서 "프롬프트가 곧 디자인 토큰"이다. 화면의 색과 사진의 빛이 한 문서에서 나온 같은 숫자를 쓴다.
        </Typography>

        <SectionTitle
          title="주석 달린 프롬프트: 줄마다 어느 결정에서 왔나"
          description="prompt-template.md 의 Day · Night 템플릿 원문(raw import)을 줄 단위로 나누고, 각 줄에 출처 문서 절과 토큰을 붙였다"
        />
        <Grid container spacing={ 3 } sx={ { mb: 2 } }>
          <Grid size={ { xs: 12, md: 6 } }>
            <Stack direction="row" spacing={ 2 } alignItems="flex-start" sx={ { mb: 1.5 } }>
              <Box
                component="img"
                src={ products[0].images[0] }
                alt={ `${ products[0].title } Day` }
                sx={ { width: 96, aspectRatio: '3 / 4', objectFit: 'cover', bgcolor: 'background.default' } }
              />
              <Box>
                <Typography variant="subtitle2">Day 템플릿 (텍스트 → 이미지)</Typography>
                <Typography variant="caption" color="text.secondary">
                  { products[0].title }. 낮 컷은 텍스트만으로 만든다. { DAY_LINES.length }줄 중 출처가 붙은 줄은 규칙에 맞는 줄이다.
                </Typography>
              </Box>
            </Stack>
            { DAY_LINES.map((line) => <AnnotatedLine key={ line } line={ line } notes={ DAY_NOTES } />) }
          </Grid>
          <Grid size={ { xs: 12, md: 6 } }>
            <Stack direction="row" spacing={ 2 } alignItems="flex-start" sx={ { mb: 1.5 } }>
              <Box
                component="img"
                src={ products[0].images[1] }
                alt={ `${ products[0].title } Night` }
                sx={ { width: 96, aspectRatio: '3 / 4', objectFit: 'cover', bgcolor: 'primary.main' } }
              />
              <Box>
                <Typography variant="subtitle2">Night 템플릿 (Day 이미지 → 변환)</Typography>
                <Typography variant="caption" color="text.secondary">
                  같은 제품. 밤 컷은 낮 컷을 레퍼런스로 첨부해 변환한다. { NIGHT_LINES.length }줄.
                </Typography>
              </Box>
            </Stack>
            { NIGHT_LINES.map((line) => <AnnotatedLine key={ line } line={ line } notes={ NIGHT_NOTES } />) }
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary" sx={ { mb: 4 } }>
          줄의 본문은 문서에서 그대로 잘라 왔고 출처 표기만 이 페이지가 붙였다. 전문과 예시 4건, 무드보드 템플릿은
          { ' ' }<StoryLink id="overview-lumenstate-appendix-prompt-template--docs">Appendix / Prompt Template</StoryLink>에 있다.
        </Typography>

        <SectionTitle title="컨셉 증거" />
        <TableContainer sx={ { mb: 2 } }>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>항목</TableCell>
                <TableCell>저장소 근거</TableCell>
                <TableCell>상태</TableCell>
                <TableCell>비고</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { EVIDENCE_ROWS.map((row) => (
                <TableRow key={ row.id }>
                  <TableCell>{ row.id } { row.item }</TableCell>
                  <TableCell>
                    <Typography variant="caption" sx={ { fontFamily: 'monospace' } }>
                      { row.source }
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip label={ row.status } size="small" color={ STATUS_COLOR[row.status] } />
                  </TableCell>
                  <TableCell>
                    { row.note }
                    { row.story && (
                      <>
                        { row.note ? ' ' : '' }
                        <StoryLink id={ row.story }>원문 보기</StoryLink>
                      </>
                    ) }
                  </TableCell>
                </TableRow>
              )) }
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle
          title="에셋 유형별 키워드"
          description="03 4절 이미지·에셋 방향 표에서 파생"
        />
        <TableContainer sx={ { mb: 2 } }>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>에셋 유형</TableCell>
                <TableCell>FORMAT</TableCell>
                <TableCell>LOOK</TableCell>
                <TableCell>SUBJECT</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { KEYWORD_ROWS.map((row) => (
                <TableRow key={ row.type }>
                  <TableCell>{ row.type }</TableCell>
                  <TableCell>{ row.format }</TableCell>
                  <TableCell>{ row.look }</TableCell>
                  <TableCell>{ row.subject }</TableCell>
                </TableRow>
              )) }
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle
          title="프롬프트 템플릿 슬롯"
          description="prompt-template.md 슬롯이 product-specs.md 제품별 필드에서 값을 받는다"
        />
        <TableContainer sx={ { mb: 2 } }>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>슬롯</TableCell>
                <TableCell>값의 출처</TableCell>
                <TableCell>예시</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { SLOT_ROWS.map((row) => (
                <TableRow key={ row.slot }>
                  <TableCell>
                    <Typography variant="caption" sx={ { fontFamily: 'monospace' } }>
                      { row.slot }
                    </Typography>
                  </TableCell>
                  <TableCell>{ row.origin }</TableCell>
                  <TableCell>{ row.example }</TableCell>
                </TableRow>
              )) }
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="body2" sx={ { mb: 3 } }>
          템플릿 전문은 <StoryLink id="overview-lumenstate-appendix-prompt-template--docs">Appendix / Prompt Template</StoryLink>,
          공통 규칙은 <StoryLink id="overview-lumenstate-appendix-common-style--docs">Appendix / Common Style</StoryLink>,
          제품별 슬롯 값은 <StoryLink id="overview-lumenstate-appendix-product-specs--docs">Appendix / Product Specs</StoryLink>에서
          문서 원문 그대로 볼 수 있다.
        </Typography>
        <SectionTitle
          title="생성 파이프라인"
          description={ `generate-product-images.mjs 903줄. 제품 ${ products.length }종 × Day/Night.` }
        />
        <TableContainer sx={ { mb: 2 } }>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>단계</TableCell>
                <TableCell>입력</TableCell>
                <TableCell>출력</TableCell>
                <TableCell>도구</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { PIPELINE_ROWS.map((row) => (
                <TableRow key={ row.step }>
                  <TableCell>{ row.step }</TableCell>
                  <TableCell>{ row.input }</TableCell>
                  <TableCell>{ row.output }</TableCell>
                  <TableCell>{ row.tool }</TableCell>
                </TableRow>
              )) }
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle
          title="토큰 ↔ 프롬프트 대응"
          description="theme.js 값과 image-generation 문서의 색·광 규칙이 같은 값을 공유한다"
        />
        <TableContainer sx={ { mb: 4 } }>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>theme 토큰</TableCell>
                <TableCell>값</TableCell>
                <TableCell>프롬프트 규칙</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { TOKEN_ROWS.map((row) => (
                <TableRow key={ row.token }>
                  <TableCell>
                    <Typography variant="caption" sx={ { fontFamily: 'monospace' } }>
                      { row.token }
                    </Typography>
                  </TableCell>
                  <TableCell>{ row.value }</TableCell>
                  <TableCell>{ row.rule }</TableCell>
                </TableRow>
              )) }
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle title="없는 것" />
        <Stack spacing={ 0.5 } sx={ { mb: 4 } }>
          { MISSING_ITEMS.map((text) => (
            <Typography key={ text } variant="body2" color="text.secondary">
              · { text }
            </Typography>
          )) }
        </Stack>

        <SectionTitle
          title="슬라이드 사고 지도 대응"
          description="VDL src/data/thinking/lumenstate.js nodes 중 C-3과 닿는 A·C만"
        />
        <TableContainer sx={ { mb: 4 } }>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>결정</TableCell>
                <TableCell>라벨</TableCell>
                <TableCell>이 페이지의 근거</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { THINKING_ROWS.map((row) => (
                <TableRow key={ row.decision }>
                  <TableCell>{ row.decision }</TableCell>
                  <TableCell>{ row.label }</TableCell>
                  <TableCell>
                    <Typography variant="caption" sx={ { fontFamily: 'monospace' } }>
                      { row.evidence }
                    </Typography>
                  </TableCell>
                </TableRow>
              )) }
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="caption" color="text.secondary">
          이 페이지의 모든 표는 저장소의 문서·데이터·스크립트에서 파생했다. 저장소 밖 자료는 쓰지 않았다.
        </Typography>
      </PageContainer>
    </>
  ),
};
