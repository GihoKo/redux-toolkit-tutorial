var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }], '@babel/preset-typescript'],
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: true,
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@/apis': path.resolve(__dirname, 'src/apis'),
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/images': path.resolve(__dirname, 'src/images'),
      '@/mocks': path.resolve(__dirname, 'src/mocks'),
      '@/pages': path.resolve(__dirname, 'src/pages'),
      '@/router': path.resolve(__dirname, 'src/router'),
      '@/store': path.resolve(__dirname, 'src/store'),
      '@/styles': path.resolve(__dirname, 'src/styles'),
      '@/types': path.resolve(__dirname, 'src/types'),
      '@/utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new CleanWebpackPlugin.CleanWebpackPlugin(),
    new Dotenv({
      path: './.env.local',
    }),
  ],
  devServer: {
    hot: true,
    port: 3000,
    open: true,
    historyApiFallback: {
      rewrites: [{ from: /./, to: '/index.html' }],
    },
    static: path.resolve(__dirname, 'dist'),
  },
};
