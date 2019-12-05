const resolve = require("rollup-plugin-node-resolve")
const babel = require("rollup-plugin-babel")
const commonjs = require("rollup-plugin-commonjs")
const json = require("rollup-plugin-json")
const fileSize = require("rollup-plugin-filesize")

const babelConfig = require("./babel.config")

module.exports = {
  external: ["styled-components", "react", "react-dom"],
  input: "src/index.tsx",
  output: {
    exports: "named",
    file: "dist/index.js",
    format: "umd",
  },
  plugins: [
    babel({ ...babelConfig, extensions: [".tsx"] }),
    commonjs(),
    json(),
    resolve(),
    fileSize(),
  ],
}
