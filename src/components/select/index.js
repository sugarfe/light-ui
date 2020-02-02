import SelectView from './Select.vue'
class Select {
	constructor(option) {
		this.open(option)
	}
	open(option = {}) {
		this.popup = new this.$vue.prototype.$Popup(SelectView, {
			position: 'right',
			size: '100%',
			isMask: false,
			...option
		})
	}
	close() {
		this.popup.close()
	}
}
export default {
	name: 'Select',
	component: Select,
	install(Vue, option) {
		Select.prototype.$vue = Vue
		Select.prototype.$option = option
	}
}
