import { dateFormat } from '@/utils/index.js'
function generateData({ max, min, value = new Date() } = {}) {
	let minYear = typeof min === 'number' ? min : new Date().getFullYear()
	let maxYear = typeof max === 'number' ? max : minYear + 10
	let currentYear = new Date().getFullYear()
	if (maxYear < currentYear) {
		maxYear = currentYear
	}
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
		}).map(item => {
			return {
				text: `${item}年`,
				value: item
			}
		})
	)

	data.push(
		Array.from({ length: 12 }, (v, k) => k + 1).map(item => {
			return {
				text: `${item}月`,
				value: item
			}
		})
	)
	data.push(
		getDayData(...valueList).map(item => {
			return {
				text: `${item}日`,
				value: item
			}
		})
	)
	data.push(
		Array.from({ length: 24 }, (v, k) => k).map(item => {
			return {
				text: `${item}时`,
				value: item
			}
		})
	)
	data.push(
		Array.from({ length: 60 }, (v, k) => k).map(item => {
			return {
				text: `${item}分`,
				value: item
			}
		})
	)
	data.push(
		Array.from({ length: 60 }, (v, k) => k).map(item => {
			return {
				text: `${item}秒`,
				value: item
			}
		})
	)
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
