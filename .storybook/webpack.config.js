module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: "babel-loader",
  })

  config.resolve.extensions.push(".ts", ".tsx")

  return config
}
