const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './index.js',									// define o ponto de entrada como index.js
	output: {
		filename: 'bundle.js',								// define o nome do 'bundle' javascript gerado
		path: path.resolve(__dirname, 'prod')				// define o diretório de produção
	},
	plugins: [
		new HtmlWebpackPlugin(								// define o arquivo html de template
			{template: 'publico/index.html'}
		) 
	],
//	resolve: {
//		modules: [__dirname, 'src', 'node_modules'],
//		extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
//		},
//	module: {
//		rules: [
//			{
//				test: /\.jsx?$/,
//				exclude: /node_modules/,
//				loader: require.resolve('babel-loader')
//			},
//			{
//				test:/\.css$/,
//				use:['style-loader','css-loader']
//			},
//			{
//				test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
//				type: 'asset/resource',
//			}
//		]
//	},
//	performance: {
//		hints: false,
//		maxEntrypointSize: 512000,
//		maxAssetSize: 512000
//	}
}
