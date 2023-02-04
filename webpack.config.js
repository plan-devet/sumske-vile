const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const data = require("./src/js/data.js");

module.exports = {
  mode: 'development',
  entry: {
    main: './src/js/main.js',
    css:  './src/js/css.js',
  },
  output: {
    //filename: "main.js",
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "dist"),
    //clean: true,
  },
  devServer:{
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
  // resolve: {
  //   alias: {
  //      handlebars: 'handlebars/dist/handlebars.min.js'
  //   }
  // },
  plugins: [
    new HtmlWebpackPlugin({
      hash: false,
      inject: 'body',
      template: './src/template/index.hbs',
      templateParameters: data,
    }),
    //new MiniCssExtractPlugin(),
  ],
     optimization: {
      runtimeChunk: 'single',
      //  splitChunks: {
     //     chunks: 'all',
     // },
   },
  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
  //     `...`,
  //     new CssMinimizerPlugin(),
  //   ],
  // },
  module: {
    rules: [
      { test: /\.hbs$/, loader: "handlebars-loader" },
      {
        test: /\.(scss)$/,
        use: [
          //{ loader: MiniCssExtractPlugin.loader },
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
