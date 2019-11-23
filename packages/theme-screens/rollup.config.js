const rollupConfig = require("../../rollup.config")

rollupConfig.output.name = "ThemeScreens"
rollupConfig.input = "src/index.ts"

module.exports = rollupConfig
