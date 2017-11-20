var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

	entry: './js/main.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/,
				use: ExtractTextPlugin.extract({
					use: ['css-loader?url=false', 'sass-loader'],
					fallback: 'style-loader'
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("bundle.css"),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		})
	]
};



if(process.env.NODE_ENV === 'production'){

	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	);

}