const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const basePath = __dirname;
const distPath = 'dist';

module.exports = {
  //mode
  mode: 'production',
  //entry
  entry: {
    app: './src/index.js'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    compress: true,
    port: 9000,
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader"
          }
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'img',
          name: '[name].[ext]'
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/envia.php', to: './' },
      ],
    }),
  ],
  //output
  output: {
    path: path.join(basePath, distPath),
    filename: 'bundle.js'
  }
}