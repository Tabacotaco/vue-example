const ProvidePlugin = require('webpack').ProvidePlugin;
const path = require('path');

module.exports = {
  baseUrl: '/vue-example/',
  outputDir: path.resolve(__dirname, 'docs'),
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
