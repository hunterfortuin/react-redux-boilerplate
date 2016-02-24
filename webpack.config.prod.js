const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: ['./frontend/scripts/main.js'],
	output: {
		path: path.resolve('./public/javascripts/'),
		filename: 'main.js',
		publicPath: '/javascripts/'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		}),
		new ExtractTextPlugin('../stylesheets/main.css', {
			disable: false,
			allChunks: true
		})
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract(
					'style-loader',
					'css-loader!autoprefixer-loader?browsers=last 2 version!sass-loader'
				)
			}
		]
	},
	node: {
		net: 'empty',
		dns: 'empty'
	}
};
