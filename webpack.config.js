const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    app: path.join(__dirname, "src", "index.tsx"),
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    historyApiFallback: true,
    port: 4000,
    open: true,
    hot: true,
  },
  target: "web",
  resolve: {
    extensions: [".ts", ".tsx", ".js", "*"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
        exclude: "/node_modules/",
      },
    ],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./", "index.html"),
    }),
    new HotModuleReplacementPlugin(),
  ],
  devtool: "inline-source-map",
};
