const path = require('path')
const rules = require('./rules.js')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
function resolve(dir) {
	return path.join(__dirname, '../../', dir)
}
module.exports = {
	context: path.resolve(__dirname, '../../'),
	module: {
		rules
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			vue$: 'vue/dist/vue.esm.js',
			'@runSrc': resolve('src'),
			'@example': resolve('example')
		}
	},
	plugins: [new VueLoaderPlugin()]
}
