const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
function resolve(dir) {
	return path.join(__dirname, '../../', dir)
}

let sassLoader = [
	MiniCssExtractPlugin.loader,
	'css-loader?minimize',
	'postcss-loader',
	'sass-loader',
	{
		loader: 'sass-resources-loader',
		options: {
			resources: [
				path.resolve(__dirname, '../../src/style/mixin/border1px.scss'),
				path.resolve(__dirname, '../../src/style/mixin/flex.scss'),
				path.resolve(__dirname, '../../src/style/variables/color.scss'),
				path.resolve(__dirname, '../../src/style/variables/size.scss')
			]
		}
	}
]

module.exports = [
	{
		test: /\.vue$/,
		loader: 'vue-loader',
		options: {
			loaders: {
				scss: {
					use: sassLoader
				},
				css: {
					use: [
						'css-loader',
						{ loader: 'postcss-loader', options: { sourceMap: true } }
					],
					fallback: 'style-loader'
				}
			}
		}
	},
	{
		test: /\.js$/,
		loader: 'babel-loader',
		exclude: [resolve('node_modules')]
	},
	{
		test: /\.js$/,
		loader: 'eslint-loader',
		enforce: 'pre',
		include: [resolve('src')]
	},
	{
		test: /\.scss$/,
		loader: sassLoader
	},
	{
		test: /\.css$/,
		loader: sassLoader
	},
	{
		test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
		loader: 'url-loader',
		exclude: [resolve('node_modules')],
		options: {
			limit: 10000,
			name: '[name].[hash:7].[ext]'
		}
	}
]
