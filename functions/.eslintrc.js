module.exports = {
  root: true,
  // parser: "react-scripts/node_modules/babel-eslint",
  parser: "@babel/eslint-parser",
  // parser: "babel-eslint",
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "google"],
  rules: {
    quotes: ["error", "double"],
    indent: "off",
  },
};
