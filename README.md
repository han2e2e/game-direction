# 방향 베기 (Direction Slash)

← ↑ → 방향키(또는 모바일 스와이프)로 **화살이 오는 방향**에 맞게 베는 HTML5 스킬 게임입니다.

화살베기([arrowslash.vercel.app](https://arrowslash.vercel.app))를 포크한 **별도 프로젝트**입니다.

## 조작

| 플랫폼 | 입력 |
|--------|------|
| PC | `←` `↑` `→` |
| 모바일 | 해당 방향 **스와이프** (가로 화면 권장) |

- **왼쪽** 화살 → `←`
- **위쪽** 화살 → `↑`
- **오른쪽** 화살 → `→`

방향이 틀리면 패리되지 않으며 스태미나만 소모됩니다.

## 로컬 실행

`index.html`을 브라우저에서 열거나, 정적 서버로 실행:

```powershell
npx serve .
```

## Supabase 랭킹

**프로젝트:** `hneozwrttqvurhexpofe` (화살베기와 동일 Supabase, **테이블 분리**)

| 항목 | 값 |
|------|-----|
| 테이블 | `direction_rankings` |
| URL / KEY | `index.html`에 설정됨 |

화살베기 `rankings`와 **별도 리더보드**입니다.

### 테이블 생성 (최초 1회)

**방법 A — SQL Editor** (권장)

1. [Supabase SQL Editor](https://supabase.com/dashboard/project/hneozwrttqvurhexpofe/sql/new) 열기
2. `supabase/schema.sql` 내용 붙여넣기 → Run

**방법 B — CLI**

```powershell
cd c:\Users\Admin\Desktop\game-direction
npm install
$env:SUPABASE_DB_PASSWORD="(Database password)"
npm run setup:supabase
```

Database password: Supabase → Project Settings → Database

## 배포 (Vercel)

1. GitHub에 새 저장소 생성 후 push
2. Vercel에서 Import → `index.html` 루트 그대로 배포
3. `og:url` / `og:image` 메타를 실제 도메인으로 수정

```powershell
git add .
git commit -m "Initial direction slash game"
git push -u origin main
```

## 프로젝트 구조

```
index.html              게임 본체 (CSS/JS/HTML 단일 파일)
캐릭터*.png             캐릭터 스프라이트 (8장)
favicon*.png            파비콘
og-preview.png          SNS 미리보기
supabase/schema.sql     랭킹 DB 스키마
tools/                  파비콘·미리보기 재생성 (선택)
```

## 원본 게임과 차이

| | 화살베기 | 방향 베기 |
|---|---|---|
| 입력 | 클릭 / 스페이스 / 탭 | ← ↑ → / 스와이프 |
| 판정 | 타이밍 + 위치 | 타이밍 + 위치 + **방향 일치** |
| 랭킹 DB | 별도 Supabase 권장 | 별도 Supabase 권장 |
