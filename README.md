# @kataokahiroki/lint-config-react

Shared ESLint and Prettier configuration for React + TypeScript projects.

## Install

```bash
pnpm add -D @kataokahiroki/lint-config-react eslint prettier typescript
```

## Usage

### ESLint

Create `eslint.config.mjs` in your project root:

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

- `ignores` — File patterns to exclude from linting
- `overrides` — Project-specific rule additions or overrides

### Prettier

Create `prettier.config.mjs` in your project root:

```js
import { createPrettierConfig } from '@kataokahiroki/lint-config-react/prettier';

export default createPrettierConfig();
```

`createPrettierConfig()` accepts an optional overrides object:

```js
export default createPrettierConfig({ printWidth: 100 });
```

## Included Plugins

### ESLint

- **typescript-eslint** — TypeScript support
- **eslint-plugin-react** / **react-hooks** / **react-refresh** — React best practices
- **eslint-plugin-import** — Import order and no-default-export enforcement
- **eslint-plugin-functional** — Immutability (`no-let`, `immutable-data`) with `mut_` prefix escape hatch
- **eslint-plugin-prefer-arrow-functions** — Arrow function style
- **eslint-plugin-unicorn** — Modern JS conventions
- **eslint-plugin-unused-imports** — Auto-remove unused imports
- **eslint-plugin-storybook** — Storybook file conventions (`*.stories.*` automatically disables no-default-export)
- **eslint-config-prettier** — Disable formatting rules that conflict with Prettier

### Prettier

- `singleQuote: true` — Use single quotes
- `jsxSingleQuote: true` — Use single quotes in JSX
- `singleAttributePerLine: true` — One JSX attribute per line

## License

MIT

---

# 日本語ドキュメント

React + TypeScript プロジェクト向けの共有 ESLint / Prettier 設定パッケージです。

## インストール

```bash
pnpm add -D @kataokahiroki/lint-config-react eslint prettier typescript
```

## 使い方

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
import { createPrettierConfig } from '@kataokahiroki/lint-config-react/prettier';

export default createPrettierConfig();
```

`createPrettierConfig()` はオプションのオーバーライドオブジェクトを受け取ります:

```js
export default createPrettierConfig({ printWidth: 100 });
```

## 含まれるプラグイン

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
