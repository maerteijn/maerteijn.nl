const path = require("path");

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/scss/include.scss")]
    }
  },
  chainWebpack: (config) => {
    // no scss when running unittests
    if (process.env.NODE_ENV === 'test') {
      const scssRule = config.module.rule('scss');
      scssRule.uses.clear();
      scssRule
        .use('null-loader')
        .loader('null-loader');
    }
  }
}
