const rollupConfig = require("../../rollup.config")

rollupConfig.output.name = "Loading"
rollupConfig.external.push("@-taxi-parks-ui/theme-colors")

module.exports = rollupConfig
