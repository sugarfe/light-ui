const webpackBaseConfig = require('./base.config.js')
const merge = require('webpack-merge')
module.exports = merge(webpackBaseConfig, {
	mode: 'production'
})
