export const asgard = {
  name: '利用者ポータル（Asgard）',
  role: 'TechLead / 技術選定 / バックエンド・フロントエンド実装',
  period: '2026-03 設計開始 / 2026-05 本番リリース予定',
  summary:
    '弊社の介護事業において、利用者本人とその家族・後見人が介護記録を確認できる Web サービス。社内で散乱していた利用者マスタを統合する基盤も兼ねる。',
  scale: [
    { label: '想定ユーザー', value: '約30〜40万人' },
    { label: 'API トラフィック', value: '月間 約20GB' },
    { label: '開発スピード', value: '1.5ヶ月で 234 commits / 154 issues' },
    { label: '言語比率', value: 'Go 74% / HCL 10% / Svelte 9% / TS 3%' }
  ],
  stack: {
    infra: ['GCP Cloud Run', 'Cloud SQL (PostgreSQL 18)', 'Pub/Sub', 'Cloud Functions', 'Terraform'],
    backend: ['Go 1.26', 'Echo v5', 'Connect (gRPC)', 'sqlc', 'pgx', 'Wire', 'Atlas', 'buf'],
    frontend: ['Svelte 5', 'TypeScript', 'Tailwind CSS', 'Inertia.js'],
    sharing: ['tygo (Go → TS 型自動生成)'],
    workflow: ['Claude Code (CI / pre-commit / IDE 統合)']
  },
  aip: {
    title: '社内 AIP の制定',
    body: 'API 設計の前例がない社内に対し、Google の AIP（API Improvement Proposals）を基準として社内版の AIP を制定。Asgard を皮切りに各チームのマスタデータ整備が AIP 準拠で進行し、社内 API 基準と データ統制が前進した。'
  }
} as const;

export type Asgard = typeof asgard;
