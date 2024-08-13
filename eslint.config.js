import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
}).append({
  rules: {
    'no-console': 'off',
    'unused-imports/no-unused-vars': 'off',
    'ts/no-unused-expressions': 'off',
  },
  ignores: ['bin'],
})
