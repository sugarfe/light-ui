import PopupView from './Popup.vue'
class Popup {
	static instance = []
	constructor(component = {}, option = {}) {
		Popup.instance.push(this)
		this.id = `popup-${Date.now()}`
		this.popupViewOptionScope = [
			'position',
			'isMaskClose',
			'isMask',
			'distance',
			'onClose',
			'onAfterLeave',
			'onAfterEnter'
		]
		this.option = this.initOption(option)
		this.init(component, this.option, option)
	}
	init(component, option, { render, scopedSlots }) {
		for (let o in this.$option.dependence) {
			component[o] = this.$option.dependence[o]
		}
		this.instance = new this.$vue({
			el: document.createElement('div'),
			render(h) {
				typeof scopedSlots === 'function' &&
					(option.componentOption['scopedSlots'] = scopedSlots(h))
				return h(PopupView, option.popupOption, [
					h(
						component,
						option.componentOption,
						typeof render === 'function' ? [render(h)] : this.$slots.default
					)
				])
			}
		})
		this.componentInstance = this.instance.$children[0]
		document.body.appendChild(this.instance.$el)
	}
	initOption(option) {
		let popupOption = {},
			componentOption = {}
		for (let o in option) {
			if (['render', 'scopedSlots'].includes(o)) {
				continue
			}
			this.popupViewOptionScope.includes(o)
				? (popupOption[o] = option[o])
				: (componentOption[o] = option[o])
		}

		popupOption = sorting(popupOption)
		componentOption = sorting(componentOption)
		componentOption.on['popup-close'] = () => {
			Popup.instance = Popup.instance.filter(item => {
				return item.id !== this.id
			})
			this.close()
		}
		function sorting(data) {
			let props = {}
			let on = {}
			Object.keys(data).forEach(key => {
				key.substr(0, 2) === 'on'
					? (on[key] = data[key])
					: (props[key] = data[key])
			})
			return {
				props,
				on
			}
		}
		return {
			popupOption,
			componentOption
		}
	}
	close() {
		this.componentInstance && this.componentInstance.close()
	}
}

export default {
	name: 'Popup',
	component: Popup,
	install(Vue, option) {
		Popup.prototype.$vue = Vue
		Popup.prototype.$option = option
	}
}
