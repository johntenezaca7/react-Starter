const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

const DIST = path.join(__dirname, '/client/dist');

module.exports = {
  entry: path.join(__dirname,'/client/react'),
  output: {
    path: DIST,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname,'/client/'),
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test:/\.scss$/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader", "sass-loader"]
          })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css"),
  ]
};