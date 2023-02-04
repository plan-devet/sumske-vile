global.extractCss = true;

const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: 'production',

  optimization: {
    minimize: true,
    minimizer: [
      //For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      `...`,
      new CssMinimizerPlugin(),
    ],
  }
});
