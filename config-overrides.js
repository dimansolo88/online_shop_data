// const
//
// const { override, fixBabelImports } = require('customize-cra')
//
// module.exports = override(
//   fixBabelImports('import', {
//     libraryName: 'antd',
//     libraryDirectory: 'es',
//     style: 'css',
//   // }),
// )

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
