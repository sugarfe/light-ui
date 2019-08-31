import Calendar from './Calendar.vue'
import CalendarJsCall from './calendar.js'

Calendar.install = Vue => {
	Vue.component(Calendar.name, Calendar)
	Vue.prototype.$Calendar = CalendarJsCall
}

export default Calendar
