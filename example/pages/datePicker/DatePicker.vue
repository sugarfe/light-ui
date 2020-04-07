<template>
	<PageContent
		class="example-button-page"
		contentClass="content flex-box-column"
	>
		<Navbar slot="header">DatePicker</Navbar>
		<Cell @click="open">
			日期选择
			<template slot="value">
				{{ text }}
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
			text: undefined
		}
	},
	mounted() {},
	methods: {
		open() {
			new this.$DatePicker({
				value: this.value,
				onOk: (value, text) => {
					this.value = value
					this.text = text
				}
			})
		}
	}
}
</script>
<style lang="scss">
@import './datePicker.scss';
</style>
