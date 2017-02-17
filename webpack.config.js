/**
 * Created by b1anker on 2017/02/17.
 */
const path = require('path');
const webpack = require('webpack');
module.exports = {
	entry: [
		'webpack/hot/dev-server',
		path.resolve(__dirname, './app/main.js')
	],
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader',
			}
		]
	},
	plugins: [new webpack.HotModuleReplacementPlugin()]
};
