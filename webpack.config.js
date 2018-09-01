const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/scss/index.html"
});
const cleanPlugin = new CleanWebpackPlugin('dist', {} );
const miniCssPlugin = new MiniCssExtractPlugin({
  publicPath: './sass/',
  filename: './style.[contenthash].css'
});
const hashPlugin = new WebpackMd5Hash();
var autoprefixer = require('autoprefixer');

module.exports = {
  //entry: "./src/app.js",              //set default entry point
  //output: {
  //  path: path.resolve('dist'),       //by default webpack zero configuration come with entry and output
  //  filename: 'bundled.js'
  //},
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use:  [  'style-loader', 
                  MiniCssExtractPlugin.loader, 
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true,
                      url: false,
                      localIdentName: '[hash:base64:5]'
                    }
                  }, 
                  {
                    loader: `postcss-loader`,
                    options: {
                      options: {},
                      plugins: () => {
                        autoprefixer({ browsers: [ 'last 2 versions' ] });
                      }
                    }
                  }, 
                  'sass-loader'
              ]
      }
    ]
  },
  plugins: [ 
    cleanPlugin,
    miniCssPlugin,
    htmlPlugin,
    hashPlugin
  ]
};