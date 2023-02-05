import { merge } from 'webpack-merge'
import common from './webpack.config.js'
import CssMinimizerPlugin from "css-minimizer-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"

// replace last step in scss rules
common.module.rules[0].use[0] = { loader: MiniCssExtractPlugin.loader };

export default merge(common, {
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
