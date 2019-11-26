const rollupConfig = require("../../rollup.config")

rollupConfig.output.name = "InputPhone"
rollupConfig.external.push("react-input-mask")
rollupConfig.external.push("@-taxi-parks-ui/input-base")
rollupConfig.external.push("@-taxi-parks-ui/input-container")
rollupConfig.external.push("@-taxi-parks-ui/input-error-msg")
rollupConfig.external.push("@-taxi-parks-ui/input-star")

module.exports = rollupConfig
