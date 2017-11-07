var webpack = require('webpack');
module.exports = {
  entry: "./main.js",
  output: {
    filename: "assets/js/scripts.js"
  },
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ]
};