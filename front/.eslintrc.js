module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  plugins: ["import", "react-hooks"]
};
