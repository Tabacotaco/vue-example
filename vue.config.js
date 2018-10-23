const ProvidePlugin = require('webpack').ProvidePlugin;

module.exports = {
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
