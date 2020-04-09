import Index from './pages/Index.vue'
import componentExamplePages from '@example/assets/component.router.json'
let pages = componentExamplePages.reduce((a, b) => {
	return a.concat(b.items)
}, [])

export default [
	{
		path: '/',
		component: Index
	},
	{
		path: '/icon',
		component: () => {
			return import('./pages/icon/Icon.vue')
		}
	},
	...pages.map(item => {
		return {
			path: `/${item}`,
			component: () =>
				import(
					`./pages/${item.replace(/^\S/, function(s) {
						return s.toLowerCase()
					})}/${item}.vue`
				)
		}
	})
]
