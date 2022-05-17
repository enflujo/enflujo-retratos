const HtmlWebPackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = {
  entry: {
    programa: './src/index.js',
  },
  output: {
    publicPath: '/',
    filename: '[name].[fullhash].js',
    chunkFilename: '[name].[fullhash].js',
    path: resolve(__dirname, 'publico'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(glsl|vs|fs)$/,
        loader: 'shader-loader',
        options: {
          glsl: {
            chunkPath: resolve(__dirname, '/src/shaders'),
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.glsl'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
};
