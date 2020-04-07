import { dateFormat } from '@/utils/index.js'
function generateData({
	scope = ['yyyy-MM-dd'],
	max,
	min,
	value = new Date()
} = {}) {
	let minYear = typeof min === 'number' ? min : new Date().getFullYear()
	let maxYear = typeof max === 'number' ? max : minYear + 10
	let valueList = dateFormat('yyyy-MM-dd', value)
		.split('-')
		.map(item => {
			return Number(item)
		})
	let data = []
	data.push(
		generateDataByYear({
			maxYear,
			minYear
		})
	)
	data.push(Array.from({ length: 12 }, (v, k) => k + 1))
	data.push(getDayData(...valueList))
	return data
}

function getDayData(year, moon) {
	let lastDay = dateFormat('dd', new Date(year, moon, 0))
	return Array.from({ length: lastDay }, (v, k) => k + 1)
}

function generateDataByYear({ maxYear, minYear }) {
	let data = []
	for (let i = minYear; i <= maxYear; i++) {
		data.push(i)
	}
	return data
}
export { generateData, getDayData }
