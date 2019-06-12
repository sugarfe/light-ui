function generateData({ scope = 1, max, min, col = scope } = {}) {
	let minYear = typeof min === 'number' ? min : new Date().getFullYear()
	let maxYear = typeof max === 'number' ? max : minYear + 10
	let data = []
	data.push(
		generateDataByYear({
			maxYear,
			minYear
		})
	)
	if (scope > 1) {
		data.push(Array.from({ length: 12 }, (v, k) => k + 1))
	}
	if (scope > 2) {
		data.push(Array.from({ length: 31 }, (v, k) => k + 1))
	}
	return data
}

function generateDataByYear({ maxYear, minYear }) {
	let data = []
	for (let i = minYear; i <= maxYear; i++) {
		data.push(i)
	}
	return data
}
export { generateData }
