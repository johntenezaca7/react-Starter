const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

const DIST = path.join(__dirname, "/public");

module.exports = {
  entry: path.join(__dirname, "/react/ClientApp.jsx"),
  output: {
    path: DIST,
    filename: "bundle.js"
  },
  watch: true,
  resolve: {
    extensions: [".js", ".jsx"]
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, "/react/"),
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin("style.css")]
};
