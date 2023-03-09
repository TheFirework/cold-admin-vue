module.exports = {
  parser: "vue-eslint-parser",

  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },

  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],

  // eslint-plugin-vue @typescript-eslint/eslint-plugin eslint-plugin-prettier 的缩写
  plugins: ["vue", "@typescript-eslint", "prettier"],

  // http://eslint.cn/docs/rules/
  rules: {
    "no-console": "off",
    "no-continue": "off",
    "no-restricted-syntax": "off",
    "no-plusplus": "off",
    "no-param-reassign": "off",
    "no-shadow": "off",
    "guard-for-in": "off",
    "prettier/prettier": "error",

    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "import/first": "off", // https://github.com/vuejs/vue-eslint-parser/issues/58
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "vue/first-attribute-linebreak": 0,

    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": "off",
    "class-methods-use-this": "off",
  },
  overrides: [],
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
};
