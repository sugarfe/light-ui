import components from './components/component.js'
import './style/index.scss'
const jsCallComponent = [
	'Popup',
	'Toast',
	'Dialog',
	'Picker',
	'ActionSheet',
	'Loading',
	'DatePicker'
]

export default {
	install: (Vue, option = {}) => {
		components.map(module => {
			if (!!module.mark && !!option[module.mark]) {
				let obj = option[module.mark]
				for (let o in obj) {
					module.props[o].default = () => {
						return obj[o]
					}
				}
			}
			if (jsCallComponent.includes(module.name)) {
				let componentOption = option[module.name.toLowerCase()] || {}
				module.install(Vue, {
					...componentOption,
					dependence: {
						...(option.dependence || {})
					}
				})
				Vue.prototype[`$${module.name}`] = module.component
			} else {
				Vue.component(module.name, module)
			}
		})
	}
}
