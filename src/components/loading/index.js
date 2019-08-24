import LoadingView from './Loading.vue'
import { Popup } from '../popup/index.js'
class Loading {
	static instance = []
	static show = ({ single = false, ...option } = {}) => {
		if ((!Loading.instance.length && single === true) || single === false) {
			new Loading(option)
		}
	}
	static clear = () => {
		while (Loading.instance.length > 0) {
			Loading.instance.splice(0, 1)[0].close()
		}
	}
	constructor(option = {}) {
		if (this.$option) {
			let o = this.$option
			for (var key in o) {
				if (option[key] === undefined) {
					option[key] = o[key]
				}
			}
		}
		option.size = option.size || 'lg'
		this.popupInstance = new Popup(
			LoadingView,
			{
				position: 'center',
				isMask: option.isMask === undefined ? true : option.isMask,
				isMaskClose: false,
				...option,
				onCancel: val => {
					option.cancel && option.cancel(val)
				}
			},
			option.dom
		)
		Loading.instance.push(this.popupInstance)
	}
	close() {
		let i = Loading.instance.findIndex(item => {
			return item.id === this.popupInstance.id
		})
		if (~i) {
			Loading.instance[i].close()
			Loading.instance.splice(i, 1)
		}
	}
}

export default {
	name: 'Loading',
	component: Loading,
	install(Vue, option) {
		Loading.prototype.$vue = Vue
		Loading.prototype.$option = option
	}
}
