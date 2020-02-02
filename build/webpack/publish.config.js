const webpackBaseConfig = require('./base.config.js')
const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
module.exports = merge(webpackBaseConfig, {
	mode: 'production',
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					compress: {
						drop_console: true
					}
				}
			})
		]
	}
})
