/*
 * @Todo: 请补充模块描述
 *
 * @Author: weijianghong
 * @Date: 2023-03-30 18:11:56
 *
 * Copyright © 2014-2023 Rabbitpre.com. All Rights Reserved.
 */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./index.js"),
  output: {
    publicPath: "/",
  },
  devtool: 'source-map',
  devServer: {
    port: 8888,
    historyApiFallback: true,
    hot: true,
    // open: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-react-jsx"],
          },
        },
      },
      {
        test: /\.(le|c)ss$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
};
