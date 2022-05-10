const { merge } = require('webpack-merge');
const base = require('./webpack.base.js');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(base, {
  mode: 'production',
  output: {
    filename: 'js/[name].[contenthash].js',
    path: path.resolve(__dirname, '../../../output/client')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[id].[contenthash].css'
    })
  ]
});
