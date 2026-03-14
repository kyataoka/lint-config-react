# @kataokahiroki/lint-config-react

Shared ESLint and Prettier configuration for React + TypeScript projects.

React + TypeScript プロジェクト向けの共有 ESLint / Prettier 設定パッケージです。

## Install / インストール

```bash
pnpm add -D @kataokahiroki/lint-config-react eslint prettier typescript
```

## Usage / 使い方

### ESLint

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

`createEslintConfig()` は以下のオプションを受け取ります:

- `ignores` — リント対象から除外するファイルパターン
- `overrides` — プロジェクト固有のルール追加・上書き

### Prettier

プロジェクトルートに `prettier.config.mjs` を作成します:

```js
export { default } from '@kataokahiroki/lint-config-react/prettier';
```

## Included Plugins / 含まれるプラグイン

### ESLint

- **typescript-eslint** — TypeScript サポート
- **eslint-plugin-react** / **react-hooks** / **react-refresh** — React のベストプラクティス
- **eslint-plugin-import** — import 順序の整理と default export の禁止
- **eslint-plugin-functional** — 不変性の強制（`no-let`, `immutable-data`）。ミュータブルな変数には `mut_` プレフィックスで回避可能
- **eslint-plugin-prefer-arrow-functions** — アロー関数スタイルの強制
- **eslint-plugin-unicorn** — モダン JavaScript の規約
- **eslint-plugin-unused-imports** — 未使用 import の自動検出
- **eslint-plugin-storybook** — Storybook ファイルの規約（`*.stories.*` では default export 禁止が自動的に無効化）
- **eslint-config-prettier** — Prettier と競合するフォーマットルールの無効化

### Prettier

- `singleQuote: true` — シングルクォートを使用
- `jsxSingleQuote: true` — JSX 内もシングルクォートを使用
- `singleAttributePerLine: true` — JSX 属性を1行に1つずつ記述

## License

MIT
