export const createPrettierConfig = (overrides = {}) => ({
  singleQuote: true,
  jsxSingleQuote: true,
  singleAttributePerLine: true,
  ...overrides,
});
