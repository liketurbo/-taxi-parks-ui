module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "prettier/@typescript-eslint",
    "get-off-my-lawn",
  ],
  plugins: ["import", "simple-import-sort"],
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
    "react/jsx-filename-extension": [0, { extensions: [".tsx"] }],

    // Enable sorter
    "simple-import-sort/sort": "error",
    "sort-imports": 0,
    "import/order": 0,
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
}
