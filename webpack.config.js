const path = require('path');
const HtmlWebpackPlugin = require('../../Library/Caches/typescript/2.9/node_modules/@types/html-webpack-plugin');
const CleanWebpackPlugin = require('../../Library/Caches/typescript/2.9/node_modules/@types/clean-webpack-plugin');
const UglifyJsPlugin = require('../../Library/Caches/typescript/2.9/node_modules/@types/uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new UglifyJsPlugin({ sourceMap: true }),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Bear',
      template: './src/index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /spec/
        ],
        loader: "babel-loader",
        options: {
          presets: ['es2015']
        }
      },
      {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
        loader: 'file-loader',
        options: {

        }
        }
      ]
      }
    ]
  }
};
