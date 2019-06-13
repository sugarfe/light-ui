const path = require('path')
const webpackBaseConfig = require('./base.config.js')
const merge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
webpackBaseConfig.plugins.push(
	new webpack.HotModuleReplacementPlugin(),
	new HtmlWebpackPlugin({
		filename: 'index.html',
		template: 'template/index.html',
		inject: true
	}),
	new MiniCssExtractPlugin({
		filename: '[name]/[name].css'
	})
)
module.exports = merge(webpackBaseConfig, {
	entry: {
		main: './example/example.index.js'
	},
	output: {
		filename: '[name].[hash].js',
		publicPath: '/'
	},
	devtool: 'source-map',
	mode: 'development',
	devServer: {
		//启用gzip
		compress: true,
		host: '0.0.0.0',
		stats: 'errors-only',
		inline: true,
		hot: true
		// proxy: {
		//     '/smart-recycle-api/*': {
		//         target: 'https://smart-recycle.biminds.cn/',
		//         secure: false,
		//         changeOrigin: true
		//     }
		// }
	}
})
