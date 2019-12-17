const rollupConfig = require("../../rollup.config")

rollupConfig.output.name = "Toast"
rollupConfig.external.push("@-taxi-parks-ui/theme-spacing")
rollupConfig.external.push("@-taxi-parks-ui/theme-colors")

module.exports = rollupConfig
