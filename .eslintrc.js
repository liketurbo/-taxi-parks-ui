module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "get-off-my-lawn",
  ],
  globals: {
    tw: true,
  },
  rules: {
    // Disable monorepo conflicts
    "import/no-extraneous-dependencies": 0,
    "node/no-extraneous-import": 0,

    // Disable typescript conflicts
    "@typescript-eslint/explicit-function-return-type": 0,

    // Disable react conflicts
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],

    // Disable sort extension conflicts
    "import/no-useless-path-segments": 0,
    "import/order": 0,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
}
