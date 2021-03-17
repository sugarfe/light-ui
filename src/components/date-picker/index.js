import { Picker } from '../picker/index.js'
import { generateData, getDayData } from './help.js'
import { dateFormat } from '@/utils/index.js'
import './data.picker.scss'
import timeData from './timeData.json'
class DatePicker {
	activeIndex = 0
	formatArray = ['yyyy', 'MM', 'dd', 'hh', 'mm', 'ss']
	constructor({ scope = 3, max, min, onOk, value, range = false, time } = {}) {
		if (range && !value) {
			value = [new Date()]
		}
		this.option = {
			scope: time ? 6 : scope,
			max,
			min,
			value,
			range,
			time
		}
		this.onOk = onOk
		this.value = value
		this.range = range
		this.init()
	}
	init() {
		let { scope, time } = this.option
		if (time) {
			this.data = timeData
		} else {
			this.data = generateData({
				...this.option,
				value: this.range ? this.option.value[0] : this.option.value
			})
		}
		let value
		if (this.range || (!this.range && !this.option.time)) {
			value =
				time && !!this.value[1] ? this.value : this.generateValue(this.value)
		} else {
			value = this.value
		}
		let option = {
			datePicker: true,
			data: this.data.slice(0, scope),
			value,
			time,
			range: this.range,
			onScrollEnd: ({ column, selectedIndex, values }) => {
				let [year, month, day] = values
				if (column == 1 && scope > 2 && !time) {
					let dayData = getDayData(year, month).map(item => {
						return {
							text: `${item}日`,
							value: item
						}
					})
					let selectedIndexDay = selectedIndex[2]
					let maxIndex = dayData.length - 1
					let index = maxIndex > selectedIndexDay ? selectedIndexDay : maxIndex
					picker.refillColumn(2, dayData, index)
				}
			},
			onOk: (values, text, selectedIndex) => {
				// debugger
				if (!this.range && !this.option.time) {
					if (values.length > 1) {
						values[1] = values[1] - 1
					}
					;(values = new Date(...values)),
						(text = `${text.slice(0, 3).join('')} ${text
							.slice(3)
							.join('')}`.trim())
				}
				if (typeof this.onOk === 'function') {
					this.onOk(values, text, selectedIndex)
				}
			}
		}
		let picker = new Picker(option)
	}
	generateValue(date = new Date()) {
		if (this.range || (!this.range && this.option.time)) {
			return date.map(item => {
				return this.option.time
					? this.generateDateValue(item).slice(3, 5)
					: this.generateDateValue(item).slice(0, this.option.scope)
			})
		}
		return this.generateDateValue(date)
	}
	generateDateValue(date) {
		let { scope } = this.option
		return dateFormat(
			scope > 3
				? this.formatArray
						.slice(0, 3)
						.concat(this.formatArray.slice(3))
						.join('-')
				: this.formatArray.slice(0, 3).join('-'),
			date
		)
			.split('-')
			.map(item => {
				return Number(item)
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
