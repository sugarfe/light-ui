import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './index.scss'
// import RUNUIX from '../node_modules/aaa/lightUI.js';
// import '../library/lightUI.css';
// import { Button } from 'aaa';
import RUNUIX from '@/index.js'
import routes from './router.js'
import './style/index.scss'
import store from './vuex/index.js'
import ExampleGroup from './components/exampleGroup/ExampleGroup.vue'
let router = new VueRouter({
	routes
})
Vue.component(ExampleGroup.name, ExampleGroup)

;[VueRouter].map(plugin => {
	Vue.use(plugin)
})
Vue.use(RUNUIX, {
	button: {
		light: false
	},
	toast: {
		duration: 100
	},
	dependence: {
		store,
		router
	},
	toast: {
		duration: 5000
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
