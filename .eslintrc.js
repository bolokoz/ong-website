module.exports = {
  root: true,
  parser: "esprima",
  env: {
    browser: true,
    node: true
  },
  extends: "standard",
  // required to lint *.vue files
  plugins: ["html"],
  // add your custom rules here
  rules: {},
  globals: {}
};
