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

## Supabase 랭킹 연동 (선택)

1. [Supabase](https://supabase.com)에서 새 프로젝트 생성
2. `supabase/schema.sql` 내용을 SQL Editor에서 실행
3. `index.html` 상단의 `SUPABASE_URL`, `SUPABASE_ANON_KEY`를 본인 프로젝트 값으로 교체

값이 `YOUR_`로 남아 있으면 랭킹 기능만 비활성화되고 게임은 정상 플레이됩니다.

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
