/**
 * direction_rankings 테이블 생성 (1회 실행)
 *
 * 사용법 (Supabase 대시보드 → Project Settings → Database → Database password):
 *
 *   set SUPABASE_DB_PASSWORD=your_db_password
 *   node tools/setup-direction-rankings.mjs
 *
 * 또는 DATABASE_URL 전체 connection string:
 *   set DATABASE_URL=postgresql://postgres.hneozwrttqvurhexpofe:PASSWORD@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres
 *   node tools/setup-direction-rankings.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import pg from 'pg';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_REF = 'hneozwrttqvurhexpofe';

function getConnectionString() {
  if (process.env.DATABASE_URL) return process.env.DATABASE_URL;
  const password = process.env.SUPABASE_DB_PASSWORD;
  if (!password) {
    console.error('SUPABASE_DB_PASSWORD 또는 DATABASE_URL 환경 변수가 필요합니다.');
    console.error('Supabase → Project Settings → Database → Database password');
    process.exit(1);
  }
  const host = process.env.SUPABASE_DB_HOST
    || `aws-0-ap-northeast-2.pooler.supabase.com`;
  return `postgresql://postgres.${PROJECT_REF}:${encodeURIComponent(password)}@${host}:6543/postgres`;
}

async function main() {
  const sqlPath = path.join(__dirname, '..', 'supabase', 'schema.sql');
  const sql = fs.readFileSync(sqlPath, 'utf8');
  const client = new pg.Client({ connectionString: getConnectionString(), ssl: { rejectUnauthorized: false } });
  await client.connect();
  try {
    await client.query(sql);
    console.log('direction_rankings 테이블 및 RLS 정책 생성 완료');
  } finally {
    await client.end();
  }
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
