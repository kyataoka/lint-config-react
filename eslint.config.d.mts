import type { TSESLint } from 'typescript-eslint';

interface CreateEslintConfigOptions {
  ignores?: string[];
  overrides?: TSESLint.FlatConfig.ConfigArray;
}

export declare const createEslintConfig: (
  options?: CreateEslintConfigOptions,
) => TSESLint.FlatConfig.ConfigArray;
