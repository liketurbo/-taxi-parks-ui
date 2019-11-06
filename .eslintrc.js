module.exports = {
  extends: "get-off-my-lawn",
  globals: {
    tw: true,
  },
  rules: {
    // Disabled because of conflicts with monorepo
    "import/no-extraneous-dependencies": 0,
    "node/no-extraneous-import": 0,
  },
}
