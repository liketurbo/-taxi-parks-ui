const rollupConfig = require("../../rollup.config")

rollupConfig.output.name = "ThemeColors"
rollupConfig.input = "src/index.ts"

module.exports = rollupConfig
