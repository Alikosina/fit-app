const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { TypedCssModulesPlugin } = require("typed-css-modules-webpack-plugin");

const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "dist",
    historyApiFallback: true,
    watchContentBase: true,
    port: 9000
  },
  module: {
    rules: [
      { test: /\.(ts|tsx)?$/, use: { loader: "awesome-typescript-loader" } },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          // Use CSS Modules
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "/assets/fonts/",
              publicPath: "/assets/fonts/"
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "/assets/img/",
              publicPath: "/assets/img/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new TypedCssModulesPlugin({
      globPattern: "src/**/*.css"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".scss"],
    alias: {
      "@app": path.resolve(__dirname, "./src"),
      "@containers": path.resolve(__dirname, "./src/containers"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@img": path.resolve(__dirname, "src/assets/img")
    }
  }
};
