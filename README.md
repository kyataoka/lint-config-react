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

### Prettier

Create `prettier.config.mjs` in your project root:

```js
export { default } from '@kataokahiroki/lint-config-react/prettier';
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
- **eslint-plugin-storybook** — Storybook file conventions
- **eslint-config-prettier** — Disable formatting rules that conflict with Prettier

### Prettier

- `singleQuote: true`
- `jsxSingleQuote: true`
- `singleAttributePerLine: true`

## License

MIT
