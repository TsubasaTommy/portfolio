export type TechItem = {
  name: string;
  alternative?: string;
  summary: string;
  highlights: string[];
};

export type TechGroup = {
  label: string;
  caption: string;
  accent: 'purple' | 'cyan' | 'pink' | 'ink';
  items: TechItem[];
};

export const techRationale: { groups: TechGroup[] } = {
  groups: [
    {
      label: 'Infrastructure',
      caption: '低コスト・低認知負荷で運用できる土台。',
      accent: 'cyan',
      items: [
        {
          name: 'GCP Cloud Run',
          alternative: 'AWS EC2 + PHP（社内既存構成）',
          summary:
            '社内既存の PHP + AWS EC2 構成と費用比較し、Cloud Run + Go + distroless で約10倍の費用効率を実現。設定の認知負荷も低く、Go バイナリと OS なしイメージとの相性が決め手になった。',
          highlights: [
            '社内既存構成と比べ約10倍のコスト効率',
            '設定の認知負荷が低い',
            'Go バイナリ + distroless との親和性'
          ]
        },
        {
          name: 'GCP Cloud SQL (PostgreSQL 18)',
          alternative: 'MySQL',
          summary:
            'unsigned 型や 1byte 型がないためデータ効率では MySQL に劣る面はあるが、拡張機能による BIG データ操作・計算系処理の豊富さが本案件の要件と強く合致したため採用。',
          highlights: [
            '拡張機能による計算系処理の豊富さ',
            'BIG データ操作の要件適合',
            'マスタデータ統合基盤としての将来性'
          ]
        }
      ]
    },
    {
      label: 'Backend',
      caption: '読みやすく、速く、誤りにくい API レイヤ。',
      accent: 'purple',
      items: [
        {
          name: 'Go 1.26 / Echo v5',
          alternative: 'Rust',
          summary:
            'RestAPI と利用者ポータルで大量のトラフィックを捌くため、軽量なゴルーチンとシングルバイナリで動く Go を選定。認知負荷が低く simple than clever が推奨される言語特性により、誰が書いても読みやすさが一定に保たれる。本番リリースが 2026 年 5 月で stable 検証の余裕があったため、Go 1.26 / Echo v5 を先行採用している。',
          highlights: [
            '軽量ゴルーチン + シングルバイナリ',
            'simple than clever でチーム可読性が一定',
            '本番までに最新 stable を検証可能なリリース計画'
          ]
        },
        {
          name: 'sqlc + pgx',
          alternative: 'ORM（GORM など）',
          summary:
            'SQL をコンパイルして静的なクエリをアプリケーション層から関数として安全に呼び出せる。ORM より PostgreSQL の機能を最大限使えるため、SQL と同等の速度と自由度、かつより高い型安全性を確保。pgx により更に高速化されている。',
          highlights: [
            'SQL と同等の速度と自由度',
            '関数化された型安全な呼び出し',
            'pgx によるさらなる高速化'
          ]
        },
        {
          name: 'gRPC (Connect)',
          alternative: 'JSON over HTTP のみ',
          summary:
            '社内マイクロサービス間の通信は AIP に従い gRPC を採用。HTTP/2 による高速転送と、型情報を載せたままの通信が可能。各チームの技術レベルに合わせ、JSON の RestAPI も AIP に従って併設公開している。',
          highlights: [
            'HTTP/2 による高速転送',
            '型情報を保ったままの通信',
            '対外向け JSON API も AIP 準拠で併設'
          ]
        }
      ]
    },
    {
      label: 'Frontend',
      caption: '通信の認知負荷を下げ、軽快に動くクライアント。',
      accent: 'pink',
      items: [
        {
          name: 'Svelte 5',
          alternative: 'React / Vue',
          summary:
            'Svelte 4 より認知負荷が上がり React 感が強くなった点はトレードオフだが、仮想 DOM なしで動く Reactive なフレームワークで軽量高速。モバイルとの相性が良いため採用。tygo により Go の Request / Response / enum 型がフロントへ自動生成される。',
          highlights: [
            '仮想 DOM なしで軽量高速',
            'モバイル端末での体感速度',
            'tygo 経由で Go から型を自動生成'
          ]
        },
        {
          name: 'Inertia.js',
          summary:
            '利用者ポータルのフロントとバックの通信の認知負荷を減らせるライブラリ。明確なデメリットがなく、Vue / React / Svelte の主要フロントエンドライブラリに対応しているため導入。',
          highlights: [
            'フロント↔バック通信の認知負荷を削減',
            '主要フレームワークに横断対応',
            '導入コストに対するデメリットが小さい'
          ]
        }
      ]
    },
    {
      label: 'Workflow',
      caption: '誰が書いても一定品質を担保する開発フロー。',
      accent: 'ink',
      items: [
        {
          name: 'Claude Code',
          summary:
            'CI / pre-commit / IDE のすべてに Claude Code を組み込み、誰が書いてもクオリティが一定水準で保証される開発ワークフローを構築している。',
          highlights: [
            'CI・pre-commit・IDE の3層に統合',
            '実装品質のばらつきを抑制',
            'レビュー前の自動的な品質ゲート'
          ]
        }
      ]
    }
  ]
};
