import { dateFormat } from '@/utils/index.js'
let getMonthFullData = (year, month) => {
	let data = []
	let currentMonthLastDay = new Date(year, month, 0)
	let currentMonthLastDayDate = currentMonthLastDay.getDate()
	let preMonthLastDay = new Date(year, month - 1, 0)
	let preMonthLastDayWeek = preMonthLastDay.getDay()
	let preMonthLastDayDate = preMonthLastDay.getDate()
	let preMonthLength = preMonthLastDayWeek < 6 ? preMonthLastDayWeek + 1 : 0
	let nextMonth = new Date(year, month)
	let currentMonth = preMonthLastDay.getMonth() + 1
	for (let i = 1; i <= preMonthLength; i++) {
		data.unshift({
			year,
			month: currentMonth,
			day: preMonthLastDayDate--
		})
	}
	let day = 1
	currentMonth = currentMonthLastDay.getMonth() + 1
	while (day <= currentMonthLastDayDate) {
		data.push({
			year,
			month: currentMonth,
			day: day
		})
		++day
	}
	let nextMonthDayLength = 42 - data.length
	day = 1
	currentMonth = nextMonth.getMonth() + 1
	while (day <= nextMonthDayLength) {
		data.push({
			year,
			month: currentMonth,
			day: day
		})
		++day
	}
	data = data.map(item => {
		item.timeStamp = new Date(item.year, item.month - 1, item.day).getTime()
		return item
	})
	day = 1
	let list = []
	while (day <= 6) {
		list.push(data.slice((day - 1) * 7, day * 7))
		++day
	}
	return list
}

//把日期对象分解成需要的对象格式
let getDateInfo = date => {
	return {
		fullYear: date.getFullYear(),
		month: date.getMonth() + 1,
		day: date.getDate(),
		week: date.getDay(),
		timeStamp: date.getTime(),
		string: dateFormat('yyyy-MM-dd', date)
	}
}

//获取月份数组
let getMonthList = (year, month, position, step) => {
	let list = []
	for (let i = 0; i < step; i++) {
		if (position === 0 && month === 1) {
			month = 12
			--year
		} else if (position === 0 && month > 1) {
			--month
		} else if (position === 1 && month === 12) {
			month = 1
			++year
		} else if (position === 1 && month < 12) {
			++month
		}
		list.push([year, month])
	}
	return position === 0 ? list.sort() : list
}

export { getMonthFullData, getDateInfo, getMonthList }
