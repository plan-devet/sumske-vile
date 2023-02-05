import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from "mini-css-extract-plugin"

// set __dirname
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

import data from "./src/js/data.js";

const plugins = [
  new HtmlWebpackPlugin({
    hash: false,
    inject: 'body',
    template: './src/template/index.hbs',
    templateParameters: data,
  }),
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: "[name].[contenthash].css",
    chunkFilename: "[id].[contenthash].css",
  }),
];

export default {
  mode: 'development',
  entry: {
    main: './src/js/main.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, "dist"),
  },
  devServer:{
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
  plugins: plugins,
  module: {
    rules: [
      // keep this rule first in array it is modified in webpack.prod.js, found by index 0
      {
        test: /\.(scss)$/,
        use: [
          //Adds CSS to the DOM by injecting a `<style>` tag
          { loader: 'style-loader' },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader',
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: function () {
                  return [
                    require('autoprefixer')
                  ];
                }
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ],
      },
      { test: /\.hbs$/, loader: "handlebars-loader" },
    ]
  }
}
