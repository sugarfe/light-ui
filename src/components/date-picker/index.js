import { Picker } from '../picker/index.js'
import { generateData, getDayData } from './help.js'
import { dateFormat } from '@/utils/index.js'
class DatePicker {
	constructor({ scope = 1, max, min, onOk, value } = {}) {
		this.option = {
			scope,
			max,
			min,
			value
		}
		this.onOk = onOk
		this.value = value
		this.init()
	}
	init() {
		this.data = generateData(this.option)
		let value = dateFormat('yyyy-MM-dd', this.value)
			.split('-')
			.map(item => {
				return Number(item)
			})
		console.log(value, this.data)
		new Picker({
			data: this.data,
			value,
			cascade: true,
			rule({ column }, { values, selectedIndexAll }) {
				if (column === 0 && values[1] === 2) {
					return this.data[1]
				} else if (column === 1) {
					let data = getDayData(...values)
					let maxSelectedIndex = data.length - 1
					return {
						data,
						selectedIndex:
							selectedIndexAll[2] < maxSelectedIndex
								? selectedIndexAll[2]
								: maxSelectedIndex
					}
				}
				return undefined
			},
			onOk: (values, text, selectedIndex) => {
				let date = new Date(values.join('/'))
				console.log(date, values.join('/'))
				typeof this.onOk === 'function' &&
					this.onOk(date, dateFormat('yyyy-MM-dd', date))
			}
		})
	}
}

export default {
	name: 'DatePicker',
	component: DatePicker,
	install(Vue, option) {
		DatePicker.prototype.$vue = Vue
		DatePicker.prototype.$option = option
		!Picker.prototype.$vue && (Picker.prototype.$vue = Vue)
	}
}
