const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',

  entry: path.resolve(__dirname, './src/index.js'),

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs'
  },

  externals: [nodeExternals()],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [/src/, /node_modules/],
        resolve: { extensions: ['.js', '.jsx'] },
        use: ['babel-loader']
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS
        ]
      }
    ]
  }
};
