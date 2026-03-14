# @kataokahiroki/lint-config-react

Shared ESLint and Prettier configuration for React + TypeScript projects.

React + TypeScript プロジェクト向けの共有 ESLint / Prettier 設定パッケージです。

## Install / インストール

```bash
pnpm add -D @kataokahiroki/lint-config-react eslint prettier typescript
```

## Usage / 使い方

### ESLint

Create `eslint.config.mjs` in your project root:

プロジェクトルートに `eslint.config.mjs` を作成します:

```js
import { createEslintConfig } from '@kataokahiroki/lint-config-react/eslint';

export default createEslintConfig({
  ignores: ['dist/**'],
  overrides: [
    {
      files: ['vite.config.ts'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
});
```

`createEslintConfig()` accepts the following options:

`createEslintConfig()` は以下のオプションを受け取ります:

- `ignores` — File patterns to exclude from linting / リント対象から除外するファイルパターン
- `overrides` — Project-specific rule additions or overrides / プロジェクト固有のルール追加・上書き

### Prettier

Create `prettier.config.mjs` in your project root:

プロジェクトルートに `prettier.config.mjs` を作成します:

```js
export { default } from '@kataokahiroki/lint-config-react/prettier';
```

## Included Plugins / 含まれるプラグイン

### ESLint

- **typescript-eslint** — TypeScript support / TypeScript サポート
- **eslint-plugin-react** / **react-hooks** / **react-refresh** — React best practices / React のベストプラクティス
- **eslint-plugin-import** — Import order and no-default-export enforcement / import 順序の整理と default export の禁止
- **eslint-plugin-functional** — Immutability (`no-let`, `immutable-data`) with `mut_` prefix escape hatch / 不変性の強制。ミュータブルな変数には `mut_` プレフィックスで回避可能
- **eslint-plugin-prefer-arrow-functions** — Arrow function style / アロー関数スタイルの強制
- **eslint-plugin-unicorn** — Modern JS conventions / モダン JavaScript の規約
- **eslint-plugin-unused-imports** — Auto-remove unused imports / 未使用 import の自動検出
- **eslint-plugin-storybook** — Storybook file conventions (`*.stories.*` automatically disables no-default-export) / Storybook ファイルの規約（`*.stories.*` では default export 禁止が自動的に無効化）
- **eslint-config-prettier** — Disable formatting rules that conflict with Prettier / Prettier と競合するフォーマットルールの無効化

### Prettier

- `singleQuote: true` — Use single quotes / シングルクォートを使用
- `jsxSingleQuote: true` — Use single quotes in JSX / JSX 内もシングルクォートを使用
- `singleAttributePerLine: true` — One JSX attribute per line / JSX 属性を1行に1つずつ記述

## License

MIT
