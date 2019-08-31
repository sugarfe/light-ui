import { Popup } from '@/components/popup/index.js'
import CalendarPage from './Calendar.vue'
class Calendar {
	static instance = []
	constructor(option) {
		this.init(option)
	}
	init({ onComplete, value }) {
		new Popup(CalendarPage, {
			position: 'right',
			size: '100%',
			isMask: false,
			value,
			onOk: res => {
				Object.prototype.toString.call(onComplete) === '[object Function]' &&
					onComplete(res)
			}
		})
	}
}

export default {
	name: 'Calendar',
	component: Calendar,
	install(Vue, option) {
		Calendar.prototype.$vue = Vue
		Calendar.prototype.$option = option
	}
}
