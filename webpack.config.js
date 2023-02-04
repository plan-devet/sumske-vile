const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const data = require("./src/js/data.js");

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer:{
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
  resolve: {
    alias: {
       handlebars: 'handlebars/dist/handlebars.min.js'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: false,
      inject: false,
      template: './src/template/index.hbs',
      templateParameters: data,
    }),
  ],
  module: {
    rules: [
      { test: /\.hbs$/, loader: "handlebars-loader" },
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
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
        ]
      }
    ]
  }
}
