const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/main.ts",
  output: {
    filename: "bundle.[contenthash].js", //contenthash est optionnel
    clean: true,
    path: path.resolve(__dirname, "dist"), //chemin absolu
  },
  mode: "production",
  module: {
    rules: [
      //Configuration compilation TS
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
};
