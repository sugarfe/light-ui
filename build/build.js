require('shelljs/global')
const path = require('path')
const fs = require('fs')
// const ora = require('ora')
const webpack = require('webpack')
const webpackPublishConfig = require('./webpack/publish.config.js')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

//删除并创建library文件夹
let assetsPath = path.join(__dirname, '../library')
rm('-rf', assetsPath)
mkdir('-p', assetsPath)

class BuildStart {
	constructor(webpackConfig) {
		['modules', 'any'].map(item => {
			let config
			switch (item) {
				case 'modules':
					config = merge(webpackConfig, {
						entry: this.getModules(),
						output: {
							path: path.resolve(__dirname, '../library'),
							filename: '[name]/index.js',
							library: 'lightUI',
							libraryTarget: 'umd'
						},
						plugins: [
							new MiniCssExtractPlugin({
								filename: '[name]/[name].css'
							})
						]
					})
					break
				case 'any':
					config = merge(webpackConfig, {
						entry: {
							lightUI: path.join(__dirname, '../src/index.js')
						},
						output: {
							path: path.resolve(__dirname, '../library'),
							filename: '[name].js',
							library: 'lightUI',
							libraryTarget: 'umd'
						},
						plugins: [
							new MiniCssExtractPlugin({
								filename: '[name].css'
							})
						]
					})
					break
			}
			this.build(config)
		})
	}
	//获取模块
	getModules() {
		let modules = {}
		let componentsPath = path.join(__dirname, '../src/components')
		let files = fs.readdirSync(componentsPath)
		files.map(name => {
			let p = path.join(componentsPath, name)
			if (fs.statSync(p).isDirectory()) {
				modules[name] = p + '/index.js'
			}
		})
		return modules
	}
	build(webpackConfig) {
		return new Promise((resolve, reject) => {
			webpack(webpackConfig, (err, stats) => {
				if (err) {
					reject(err)
					return
				}
				this.outputMessage(err, stats)
				resolve()
			})
		})
	}
	outputMessage(err, stats) {
		if (err) {
			throw err
		}
		process.stdout.write(
			stats.toString({
				colors: true,
				modules: false,
				children: false,
				chunks: false,
				chunkModules: false
			}) + '\n'
		)
	}
}

new BuildStart(webpackPublishConfig)
