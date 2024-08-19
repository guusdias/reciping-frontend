module.exports = {
  parserOptions: {
    ecmaVersion: 2020, // ou 2015, 2018, dependendo do que você precisa
    sourceType: 'module', // permite o uso de imports
  },
  env: {
    browser: true, // se você está usando no frontend
    es6: true, // ou `es2020`, dependendo da versão que você está usando
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
};
