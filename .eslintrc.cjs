/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/base',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    './.eslintrc-rules.js',
  ],
  plugins: ['import'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // Vue
    'vue/html-closing-bracket-newline': [
      'error',
      {
        'singleline': 'never',
        'multiline': 'never'
      }
    ],
    'vue/html-indent': ['error', 3],
    'vue/max-attributes-per-line': [
      'error',
      {
        'multiline': {
          'max': 2,
        },
        'singleline': {
          "max": 1
        },
      }
    ],
    'vue/v-slot-style': 'off',

    // vuejs-accessibility
    'vuejs-accessibility/no-onchange': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/first-attribute-linebreak': ['error', {
      'singleline': 'beside',
      'multiline': "beside"
    }],
    // eslint-plugin-import
    'import/no-self-import': 'error',
    'import/no-deprecated': 'warn',
    'import/extensions': ['warn', 'never'],
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/newline-after-import': 'error',

    'indent': ['error', 3],
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'semi': ['error', 'always'],
    'max-lines': ['error', { 'max': 500, 'skipComments': true, 'skipBlankLines': true }],
    'eqeqeq': 'error',
    'no-var': 'error',
    'no-console': 'error',
    'prefer-const': 'error',
  },
}
