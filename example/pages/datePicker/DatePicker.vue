<template>
	<PageContent
		class="example-button-page"
		contentClass="content flex-box-column"
	>
		<Navbar slot="header">DatePicker</Navbar>
		<Cell @click="setOption('max')">
			Max
			<template slot="value">
				{{ max.join('') }}
				<i class="icon-arrow-forward"></i>
			</template>
		</Cell>
		<Cell @click="setOption('min')">
			Min
			<template slot="value">
				{{ min.join('') }}
				<i class="icon-arrow-forward"></i>
			</template>
		</Cell>
		<Cell @click="open">
			日期选择
			<template slot="value">
				{{ text }}
				<i class="icon-arrow-forward"></i>
			</template>
		</Cell>
	</PageContent>
</template>
<script>
export default {
	data() {
		return {
			scope: 1,
			value: undefined,
			text: undefined,
			max: [],
			min: [],
			maxList: [2022, 2023, 2024],
			minList: [2017, 2018, 2019]
		}
	},
	mounted() {},
	methods: {
		open() {
			new this.$DatePicker({
				value: this.value,
				max: this.max[0],
				min: this.min[0],
				onOk: (value, text) => {
					this.value = value
					this.text = text
				}
			})
		},
		setOption(type) {
			new this.$Picker({
				data: [this[`${type}List`]],
				value: this[type],
				onOk: (value, text) => {
					this[type] = value
				}
			})
		}
	}
}
</script>
<style lang="scss">
@import './datePicker.scss';
</style>
