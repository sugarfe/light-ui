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
		let picker = new Picker({
			data: this.data,
			value,
			onScrollEnd: ({ column, selectedIndex, values }) => {
				let [year, month, day] = values
				if (month === 2 && column !== 2) {
					let dayData = getDayData(year, month)
					let selectedIndexDay = selectedIndex[2]
					let maxIndex = dayData.length - 1
					let index = maxIndex > selectedIndexDay ? selectedIndexDay : maxIndex
					picker.refillColumn(2, dayData, index)
				}
			},
			onOk: (values, text, selectedIndex) => {
				let date = new Date(values.join('/'))
				if (typeof this.onOk === 'function') {
					this.onOk(date, dateFormat('yyyy-MM-dd', date))
				}
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
