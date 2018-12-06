const ProvidePlugin = require('webpack').ProvidePlugin;
const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, 'docs'),
  // assetsDir: 'static',
  devServer: {
    port: 3000
  },
  configureWebpack: {
    plugins: [
      new ProvidePlugin({
        $: 'jquery',
        Popper: ['popper.js', 'default'],
        Hammer: 'hammerjs',
        Bootstrap: 'bootstrap'
      })
    ]
  }
}
