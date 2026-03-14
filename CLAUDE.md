# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

`@kataokahiroki/lint-config-react` は React + TypeScript プロジェクト向けの共有 ESLint / Prettier 設定パッケージ。pnpm で管理され、ESM (`"type": "module"`) で提供される。

## Package Structure

- `eslint.config.mjs` — ESLint flat config を生成する `createEslintConfig()` ファクトリ関数をエクスポート
- `prettier.config.mjs` — Prettier 設定をデフォルトエクスポート
- `*.d.mts` — 上記それぞれの型定義

消費側は `@kataokahiroki/lint-config-react/eslint` と `@kataokahiroki/lint-config-react/prettier` でインポートする。

## Key Design Decisions

- **関数型スタイルの強制**: `eslint-plugin-functional` により `let` や可変データ操作を禁止。ミュータブルが必要な変数には `mut_` プレフィックスを使う（例: `mut_count`, `_mut_internal`, `#mut_private`）。
- **default export 禁止**: `import/no-default-export` が有効。Storybook ファイル (`*.stories.*`) では自動的に無効化。
- **アロー関数優先**: `prefer-arrow-functions` により通常の関数宣言よりアロー関数を推奨。
- **`createEslintConfig` のカスタマイズ**: `ignores`（除外パターン）と `overrides`（追加ルール）を受け取るオプション引数で拡張可能。

## Commands

```bash
# 依存関係のインストール
pnpm install
```

テストやビルドのスクリプトは現在定義されていない。
