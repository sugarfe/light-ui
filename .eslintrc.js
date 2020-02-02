module.exports = {
	root: true,
	env: {
		node: true
	},
	// @vue/prettier引入覆盖eslint规则
	extends: ['plugin:vue/essential', '@vue/prettier'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
	},
	plugins: ['vue', 'prettier'],
	parserOptions: {
		parser: 'babel-eslint'
	}
}
