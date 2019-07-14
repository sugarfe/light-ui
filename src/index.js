import components from './components/component.js'
import './style/index.scss'
const jsCallComponent = [
	'popup',
	'toast',
	'dialog',
	'picker',
	'actionSheet',
	'loading',
	'datePicker'
]

export default {
	install: (Vue, option = {}) => {
		components.map(module => {
			let name = module.name.replace(/^\S/, function(s) {
				return s.toLowerCase()
			})
			if (!!name && !!option[name]) {
				let obj = option[name]
				for (let o in obj) {
					if (module.props) {
						module.props[o].default = () => {
							return obj[o]
						}
					}
				}
			}
			if (jsCallComponent.includes(name)) {
				let componentOption = option[name] || {}
				module.install(Vue, {
					...componentOption,
					dependence: {
						...(option.dependence || {})
					}
				})
				Vue.prototype[`$${module.name}`] = module.component
			} else {
				let { prefix = '' } = option
				!!prefix && (prefix = `${prefix}-`)
				Vue.component(`${prefix}${module.name}`, module)
			}
		})
	}
}
