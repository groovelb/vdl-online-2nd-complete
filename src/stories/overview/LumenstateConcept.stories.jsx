import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
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

/** 증거 표. status 는 '있음' | '파생' | '없음'. */
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
    note: 'Day/Night 템플릿, Camera Angle Rule, Padding Boundary Rule',
  },
  {
    id: 'E3',
    item: '공통 스타일 규칙(배경, 조명, 색온도, 카메라, 패딩 수치)',
    source: 'docs/lumenstate/image-generation/common-style.md',
    status: '있음',
    note: '',
  },
  {
    id: 'E4',
    item: '제품별 스펙이 프롬프트 슬롯으로',
    source: 'docs/lumenstate/image-generation/product-specs.md, src/data/products.js',
    status: '있음',
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
  '스토리북 노출: image-generation 문서 3종(common-style, prompt-template, product-specs)은 01~07 Overview 어디에도 직접 노출되지 않는다. 이 페이지가 처음으로 노출한다.',
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
                  <TableCell>{ row.note }</TableCell>
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
