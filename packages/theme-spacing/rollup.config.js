const rollupConfig = require("../../rollup.config")

rollupConfig.output.name = "ThemeSpacing"
rollupConfig.input = "src/index.ts"

module.exports = rollupConfig
