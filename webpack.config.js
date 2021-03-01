const proxyObject = require('./config/proxy.conf')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  webpack: (config, env) => {
    config.module.rules = config.module.rules.map(rule => {
      if (rule.oneOf instanceof Array) {
        return {
          ...rule,
          oneOf: [
            {
              test: /\.styl$/,
              // loader: 'style-loader!css-loader?modules&localIdentName=[name]-[hash:base64:10]!stylus-loader'
              loader: 'style-loader!css-loader?modules&localIdentName=[path]-[name]-[local]-[hash:base64:10]!stylus-loader'
            },
            ...rule.oneOf
          ]
        };
      }
      return rule;
    });
    if (env === 'production') {
      delete config.devtool
      // config.plugins.push(new BundleAnalyzerPlugin()) // 打包分析
    }
    config.externals = ['canvas']
    return config;
  },
  devServer: function (configFunction, env) {
    if (env === 'development') {
      return (proxy, allowedHost) => {
        const config = configFunction(
          {
            ...proxy,
            ...proxyObject
          },
          allowedHost);
        return config;
      };
    }
  }
}