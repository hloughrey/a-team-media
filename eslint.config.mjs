import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import unicorn from 'eslint-plugin-unicorn'
import prettier from 'eslint-config-prettier'

export default tseslint.config(
  { ignores: ['node_modules', 'dist', 'coverage', 'next-env.d.ts', '.next', 'out', 'public'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  reactPlugin.configs.flat.recommended,
  unicorn.configs['flat/recommended'],
  prettier,
  {
    settings: { react: { version: 'detect' } },
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: 'react|_' }],
      'unicorn/no-reduce': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    files: ['*.config.js'],
    rules: { 'unicorn/prefer-module': 'off' },
    languageOptions: { globals: { require: true, module: true } },
  },
)
