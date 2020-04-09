import PickerTemplate from './Picker.vue'
class Picker {
	instance
	constructor(option = {}) {
		option.data = option.data.map(item => {
			if (item.length > 0 && typeof item[0] !== 'object') {
				item = item.map(o => {
					return {
						text: o,
						value: o
					}
				})
			}
			return item
		})
		this.option = option
		this.init()
	}
	init() {
		this.popup = new this.$vue.prototype.$Popup(PickerTemplate, {
			position: 'bottom',
			...this.option,
			onFinish: () => {},
			onOk: ({ values, text, selectedIndex }) => {
				if (typeof this.option.onOk === 'function') {
					this.option.onOk([...values], [...text], [...selectedIndex])
				}
				this.popup.close()
			}
		})
		this.popup.instance.$nextTick(() => {
			this.instance = this.popup.instance.$children[0].$children[0]
		})
	}
	refillColumn(index, data, selectIndex) {
		this.instance.refillColumn(index, data, selectIndex)
	}
}

export default {
	name: 'Picker',
	component: Picker,
	install(Vue) {
		!Picker.prototype.$vue && (Picker.prototype.$vue = Vue)
	}
}
export { Picker }
