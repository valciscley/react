const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "build")
	},
	plugins: [
		new HtmlWebpackPlugin({template: "index.html"}),
		new CopyPlugin({patterns:[{from: "assets", to: "assets"}]})
	],
	resolve: {modules: [__dirname, 'src', 'node_modules']},
	module: {
		rules: [
			{test: /\.jsx?$/, exclude: /node_modules/, loader: require.resolve("babel-loader")},
			{test:/\.css$/, use:['style-loader','css-loader']},
			{test: /\.(png|svg|jpg|jpeg|gif)$/, use: ['file-loader']}
		]
	},
	performance: {hints: false, maxEntrypointSize: 512000, maxAssetSize: 512000},
	devServer:{compress: true, port: 3000},
	optimization: {
		minimizer: [new TerserPlugin({
			extractComments: false
		})]
	}
}
