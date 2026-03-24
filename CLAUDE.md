# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # 開発サーバー起動（http://localhost:3000）
npm run build    # プロダクションビルド（型チェック含む）
npm run lint     # ESLint
npm run start    # プロダクションサーバー起動
```

## Architecture

Next.js 16 App Router + TypeScript + Tailwind CSS v4。

### ページ構成

| URL | 役割 |
|-----|------|
| `/` | トップページ（診断・国調べ・ロールモデルへの導線） |
| `/quiz` | 10問の診断フォーム |
| `/result` | 診断結果表示（URLクエリパラメータで回答を受け取る） |
| `/countries` | 国一覧・条件絞り込み |
| `/countries/[country]` | 国の詳細ページ（静的生成） |
| `/rolemodels` | ロールモデル一覧・絞り込み |
| `/api/analyze` | Claude API呼び出し（フェーズ2用・現在未使用） |

### データフロー（診断）

1. `Quiz`コンポーネントがユーザーの回答を収集し、JSON化してURLクエリパラメータとして`/result`に渡す
2. `Result`コンポーネントが`lib/scoring.ts`の`calculateScores()`でクライアントサイドにスコアを計算
3. `lib/diagnosis.ts`の`generateDiagnosis()`でルールベースの診断タイプ・理由文を生成（フェーズ1）

### データ定義（`lib/`）

- **`data.ts`** — 15カ国リスト・国基本情報・診断質問・スコアリングテーブル（`SCORES`）
  - `SCORES[質問キー][国名][回答値]` → 0〜3点
- **`scoring.ts`** — スコア計算ロジック。Q10（優先項目）で選んだ質問スコアを1.5倍
- **`diagnosis.ts`** — 回答から診断タイプ名と理由文を生成（フェーズ1用ルールベース）
- **`countries.ts`** — 生活コスト・ビザ情報・おすすめ都市データ
- **`rolemodels.ts`** — ロールモデルのサンプルデータ（30件）

### Server / Client Components の使い分け

- インタラクティブなUI（フィルター・フォーム）は`"use client"`のClientコンポーネント
- ページ（`page.tsx`）はServer Componentとし、Client部分を別ファイルに切り出す命名規則：`XxxClient.tsx`

### 環境変数

```
ANTHROPIC_API_KEY=  # Claude API（/api/analyze で使用・フェーズ2）
```

## フェーズ構成

- **フェーズ1（現在）**: 診断・国調べ・ロールモデル閲覧。認証なし・AI文章生成なし
- **フェーズ2（予定）**: Supabase認証・結果保存・SNSシェア・Claude APIによるパーソナライズ文章生成・ロールモデルのユーザー投稿機能
