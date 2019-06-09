const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
function resolve(dir) {
	return path.join(__dirname, '../../', dir);
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
				path.resolve(__dirname, '../../src/style/variables/size.scss'),
			],
		},
	},
];

module.exports = [
	{
		test: /\.vue$/,
		loader: 'vue-loader',
		options: {
			loaders: {
				scss: {
					use: sassLoader,
				},
				css: {
					use: ['css-loader', { loader: 'postcss-loader', options: { sourceMap: true } }],
					fallback: 'style-loader',
				},
			},
		},
	},
	{
		test: /\.js$/,
		loader: 'babel-loader',
		exclude: [resolve('node_modules')],
	},
	{
		test: /\.js$/,
		loader: 'eslint-loader',
		enforce: 'pre',
		include: [path.resolve(__dirname, 'src')], // 指定检查的目录
		options: {
			// 这里的配置项参数将会被传递到 eslint 的 CLIEngine
			formatter: require('eslint-friendly-formatter'), // 指定错误报告的格式规范
		},
	},
	{
		test: /\.scss$/,
		loader: sassLoader,
	},
	{
		test: /\.css$/,
		loader: sassLoader,
	},
];
