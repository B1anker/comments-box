/**
 * Created by b1anker on 2017/02/17.
 */
const path = require('path');
const webpack = require('webpack');
var publicPath = 'http://localhost:3000/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
module.exports = {
	devtool: 'eval-source-map',
	entry: {
		'/': [path.resolve(__dirname, './src/main.js'), hotMiddlewareScript]
	},
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
			}, {
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}, {
				test: /\.(jpg|png|gif|webp)$/,
				loader: 'url?limit=8000'
			}, {
				test: /\.json$/,
				loader: 'json'
			}
		]
	},
	plugins: [new webpack.optimize.OccurenceOrderPlugin(), new webpack.HotModuleReplacementPlugin(), new webpack.NoErrorsPlugin()]
};
