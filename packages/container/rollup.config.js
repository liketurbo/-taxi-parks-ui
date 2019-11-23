const rollupConfig = require("../../rollup.config")

rollupConfig.output.name = "Container"
rollupConfig.external.push("@-taxi-parks-ui/theme-spacing")

module.exports = rollupConfig
