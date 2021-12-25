module.exports = {
  root: true,
  'extends': [
    'plugin:vue/essential',
    // '@vue/standard'
  ],
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'dev' ? 'error' : 'off',
    'vue/no-parsing-error': [2, {
      'x-invalid-end-tag': false
    }],
    'no-undef': 'off',
    'camelcase': 'off',
    'space-before-function-paren': 0,
    'object-curly-spaceing': 0,
    // "semi": ["error", "always"],
    'semi': 0,
    "no-irregular-whitespace":"off"//这禁止掉 空格报错检查
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
