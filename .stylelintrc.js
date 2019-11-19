module.exports = {
  processors: ["stylelint-processor-styled-components"],
  extends: [
    "stylelint-config-get-off-my-lawn",
    "stylelint-config-styled-components",
  ],
  rules: {
    indentation: 2,

    // Disabled because of conflicts with prettier
    "number-leading-zero": null,
    "string-quotes": "double",

    // Disabled because of conflicts with styled-components
    "declaration-empty-line-before": null,
    "order/properties-alphabetical-order": null,
    "value-keyword-case": null,
  },
}
