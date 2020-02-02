import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './index.scss'
import LightUI from '@/index.js'
import routes from './router.js'
import './style/index.scss'
import store from './vuex/index.js'
import ExampleGroup from './components/exampleGroup/ExampleGroup.vue'
import vconsole from 'vconsole'
// new vconsole()
let router = new VueRouter({
	routes
})
Vue.component(ExampleGroup.name, ExampleGroup)
;[VueRouter].map(plugin => {
	Vue.use(plugin)
})
Vue.use(LightUI, {
	button: {
		light: false
	},
	toast: {
		duration: 2000,
		text: '请等待...'
	},
	dependence: {
		store,
		router
	}
})

new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>',
	created() {}
})
