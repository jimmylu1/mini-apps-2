var path = require("path");
var SRC_DIR = path.join(__dirname, "/client");
var DIST_DIR = path.join(__dirname, "/public");

module.exports = {
  mode: "development",
  entry: "./client/index.jsx",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "react"]
          }
        }
      }
    ]
  }
};
