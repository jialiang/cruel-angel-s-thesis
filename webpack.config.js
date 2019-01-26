const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const webpack = require("webpack");
const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "docs"),
    publicPath: "",
    filename: "main.js"
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //   util: path.join(__dirname, "src/utilities/common-utilities"),
    //   glu: path.join(__dirname, "src/utilities/webgl-utilities"),
    //   fastdom: "fastdom"
    // }),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      inlineSource: ".(js|css)$"
    }),
    new HtmlWebpackInlineSourcePlugin()
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          interpolate: true
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader",
        options: {
          name: "image/[name].[ext]"
        }
      },
      {
        test: /\.ico$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]"
        }
      },
      {
        test: /\.woff$/,
        loader: "url-loader"
      },
      {
        test: /\.(flac|mp3|vtt|ac3)$/,
        loader: "file-loader",
        options: {
          name: "music/[name].[ext]"
        }
      },
      {
        test: /\.pdf$/,
        loader: "file-loader",
        options: {
          name: "pdf/[name].[ext]"
        }
      },
      {
        test: /\.svgo$/,
        loader: "raw-loader"
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false
            // beautify: true
          },
          mangle: true,
          compress: true
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
};
