const path = require("path")

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/scss/include.scss")],
    },
  },
  chainWebpack: (config) => {
    // no scss when running unittests
    if (process.env.NODE_ENV === "test") {
      const scssRule = config.module.rule("scss")
      scssRule.uses.clear()
      scssRule.use("null-loader").loader("null-loader")
    }
    config.plugin('copy').tap(args => {
      args[0].patterns.push(
        { from: path.resolve(__dirname, "vercel.json"), to: path.resolve(__dirname, config.output.get('path'), "vercel.json") }
      )
      return args
    })
  },

  lintOnSave: false,
}
