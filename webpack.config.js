const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
		bundle: './src/index.js'
	},
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
				test: /\.css$/,
				exclude: /(node_modules|dist)/,
				use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
			},
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      inject: 'body',
			minify: { collapseWhitespace: true, removeComments: true },
			hash: true,
			xhtml: true
    })
  ]
};