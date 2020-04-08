import PopupView from './Popup.vue'
class Popup {
	static instance = []
	static clear = (index = -1) => {
		if (index === -1) {
			Popup.instance.map(item => {
				item.close()
			})
		} else {
			let instance = Popup.instance[index]
			instance && instance.close()
		}
	}
	constructor(component = {}, option = {}, dom = document.body) {
		Popup.instance.push(this)
		this.id = `popup-${Date.now()}`
		this.popupViewOptionScope = [
			'position',
			'isMaskClose',
			'isMask',
			'onClose',
			'autoShow',
			'size',
			'offset',
			'transition'
		]
		this.option = this.initOption(option)
		this.dom = dom
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
		this.dom.appendChild(this.instance.$el)
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
			this.close()
		}
		componentOption.on['popup-hide'] = () => {
			this.hide()
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
	show() {
		this.componentInstance && this.componentInstance.show()
	}
	hide() {
		this.componentInstance && this.componentInstance.hide()
	}
	close() {
		this.componentInstance && this.componentInstance.close()
		Popup.instance = Popup.instance.filter(item => {
			return item.id !== this.id
		})
	}
}

export { Popup }

export default {
	name: 'Popup',
	component: Popup,
	install(Vue, option) {
		Popup.prototype.$vue = Vue
		Popup.prototype.$option = option
	}
}
