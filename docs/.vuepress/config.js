module.exports = {
	title: 'Light-UI',
	description: ' ',
	dest: './dist',
	port: 9527,
	base: '/light-ui/',
  theme:'index.js',
	themeConfig: {
		nav: [
			{ text: '组件', link: '/api/' },
			{
				text: 'Github',
				link: 'https://github.com/sugarfe/light-ui'
			}
		],
    // 为以下路由添加侧边栏
		sidebar: {
			'/api/': [
				{
          title: '布局',
          collapsable:false,
					children: ['layout/grid', 'layout/navbar']
				},
				{
          title: '表单',
          collapsable:false,
					children: [
						'form/button',
						'form/radio',
						'form/checkbox',
						'form/switch'
					],
				},
				{
					title: '弹出',
					children: [
						'popup/popup',
						'popup/dialog',
						'popup/actionSheet',
						'popup/picker'
					]
				},
				{
          title: '滚动',
          collapsable:false,
					children: []
				}
			]
		}
  },
  header: {
    background: {
      // url: '/assets/img/bg.jpg',
      useGeo: true,
    },
    showTitle: false,
  },
	markdown: {
		anchor: {
			permalink: true
		},
		toc: {
			includeLevel: [1, 2]
		},
		evergreen: true,
		config: md => {
			// 使用更多 markdown-it 插件！
			md.use(require('markdown-it-task-lists')).use(
				require('markdown-it-imsize'),
				{ autofill: true }
			)
		}
	}
}
