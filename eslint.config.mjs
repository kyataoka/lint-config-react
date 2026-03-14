import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginFunctional from 'eslint-plugin-functional';
import * as eslintPluginImport from 'eslint-plugin-import';
import eslintPluginPreferArrowFunctions from 'eslint-plugin-prefer-arrow-functions';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh';
import eslintPluginStorybook from 'eslint-plugin-storybook';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

const filesForReact = ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'];

const filesForStorybook = [
  '**/*.stories.js',
  '**/*.stories.jsx',
  '**/*.stories.ts',
  '**/*.stories.tsx',
];

const filesForUnitTest = [
  '**/*.test.js',
  '**/*.test.jsx',
  '**/*.test.ts',
  '**/*.test.tsx',
];

const concatListNoDuplication = (...list) => [
  ...new Set(list.flat()),
];

export const createEslintConfig = (options = {}) => {
  const { ignores = [], overrides = [] } = options;

  return tseslint.config([
    {
      ignores,
    },
    //common
    eslint.configs.recommended,
    tseslint.configs.recommended,

    // react-refresh
    {
      plugins: { 'react-refresh': eslintPluginReactRefresh },
      rules: {
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
        ],
      },
    },

    // import
    {
      plugins: { import: eslintPluginImport },
      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: true,
          },
        },
      },
      rules: {
        'import/no-cycle': 'error',
        'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
        'import/no-default-export': 'error',
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'object',
              'type',
              'index',
            ],
            'newlines-between': 'always',
            alphabetize: { order: 'asc', caseInsensitive: true },
            pathGroups: [
              {
                pattern: 'react**',
                group: 'external',
                position: 'before',
              },
              {
                pattern: 'react-dom',
                group: 'external',
                position: 'before',
              },
              {
                pattern: '@material-ui/**',
                group: 'external',
                position: 'after',
              },
            ],
            pathGroupsExcludedImportTypes: ['react'],
          },
        ],
      },
    },

    //unused-imports
    {
      plugins: { 'unused-imports': eslintPluginUnusedImports },
      rules: {
        'unused-imports/no-unused-imports': 'error',
      },
    },

    //unicorn
    {
      plugins: { unicorn: eslintPluginUnicorn },
      rules: {
        ...eslintPluginUnicorn.configs.recommended.rules,
        'unicorn/prefer-switch': 'error',
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/filename-case': 'off',
      },
    },

    //functional
    eslintPluginFunctional.configs.recommended,
    {
      plugins: { functional: eslintPluginFunctional },
      files: concatListNoDuplication(
        filesForReact,
        filesForStorybook,
        filesForUnitTest,
      ),
      languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
          projectService: true,
        },
      },
      rules: {
        'functional/no-let': [
          'error',
          {
            allowInForLoopInit: true,
            allowInFunctions: false,
            ignoreIdentifierPattern: ['^mut_', '^_mut_', '^#mut_'],
          },
        ],
        'functional/immutable-data': [
          'error',
          {
            ignoreClasses: true,
            ignoreImmediateMutation: true,
            ignoreIdentifierPattern: [
              '^mut_',
              '^_mut_',
              '^#mut_',
              'window.location.href',
            ],
            ignoreAccessorPattern: [
              '**.current.**',
              '**.displayName',
              '**.scrollTop',
            ],
          },
        ],
        'functional/functional-parameters': 'off',
        'functional/no-expression-statements': 'off',
        'functional/no-return-void': 'off',
        'functional/no-mixed-types': 'off',
        'functional/no-throw-statements': 'off',
        'functional/no-try-statements': 'off',
      },
    },

    //prefer-arrow-functions
    {
      plugins: { 'prefer-arrow-functions': eslintPluginPreferArrowFunctions },
      rules: {
        'prefer-arrow-functions/prefer-arrow-functions': [
          'error',
          {
            classPropertiesAllowed: false,
            disallowPrototype: false,
            returnStyle: 'unchanged',
            singleReturnOnly: false,
          },
        ],
      },
    },

    //react
    eslintPluginReact.configs.flat.recommended,
    {
      plugins: { react: eslintPluginReact },
      files: concatListNoDuplication(
        filesForReact,
        filesForStorybook,
        filesForUnitTest,
      ),
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        'react/button-has-type': 'error',
        'react/jsx-no-bind': 'error',
        'react/jsx-no-leaked-render': 'error',
        'react/function-component-definition': [
          'error',
          {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function',
          },
        ],
      },
    },
    eslintPluginReact.configs.flat['jsx-runtime'],

    //react-hooks
    {
      plugins: { 'react-hooks': eslintPluginReactHooks },
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
      },
    },

    //prettier
    eslintConfigPrettier,

    //storybook
    ...eslintPluginStorybook.configs['flat/recommended'],
    {
      files: filesForStorybook,
      rules: {
        'import/no-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },

    // overrides
    ...overrides,
  ]);
};
