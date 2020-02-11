const path = require('path')
module.exports = function (config, env) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '@': path.relative(__dirname, './src'),
    },

  }
  return config
}
