-- 방향 베기 전용 랭킹 (화살베기 rankings 와 분리)
-- Supabase SQL Editor: https://supabase.com/dashboard/project/hneozwrttqvurhexpofe/sql/new

create table if not exists direction_rankings (
  id bigint generated always as identity primary key,
  nickname text not null,
  count int not null default 0,
  combo int not null default 0,
  created_at timestamptz default now()
);

alter table direction_rankings enable row level security;

drop policy if exists "누구나 읽기 가능" on direction_rankings;
create policy "누구나 읽기 가능"
  on direction_rankings for select using (true);

drop policy if exists "누구나 삽입 가능" on direction_rankings;
create policy "누구나 삽입 가능"
  on direction_rankings for insert with check (true);

-- PostgREST 스키마 캐시 갱신 (테이블 생성 직후 API 반영)
notify pgrst, 'reload schema';
