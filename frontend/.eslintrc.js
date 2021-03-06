module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // 추후 .prettierrc.js 파일에서 설정해줄 예정
    '@typescript-eslint/no-empty-function': 'off',
    'prettier/prettier': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    'no-var': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
