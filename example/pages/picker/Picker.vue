<template>
	<PageContent
		class="example-button-page"
		contentClass="content flex-box-column"
	>
		<Navbar slot="header">Picker</Navbar>
		<div class="flex-1">
			<radio-group v-model="column" right>
				<radio :value="1">一列</radio>
				<radio :value="2">二列</radio>
				<radio :value="3">三列</radio>
			</radio-group>
			<Cell>
				cascade
				<template slot="value">
					<l-switch v-model="cascade"></l-switch>
				</template>
			</Cell>
			<example-group contentClass="group-content">
				Value:
				<template v-slot:content>{{ value }}</template>
			</example-group>
		</div>
		<div class="action-panel">
			<Button block theme="primary" @click="open">打开</Button>
		</div>
	</PageContent>
</template>
<script>
import data from './picker.json'
let list = []
export default {
	data() {
		return {
			value: [],
			text: [],
			column: 1,
			cascade: false
		}
	},
	mounted() {},
	methods: {
		open() {
			list = []
			let id
			for (let i = 0; i < this.column; i++) {
				if (this.value.length > 0) {
					id = i === 0 ? 0 : this.value[i - 1]
				} else {
					id = i === 0 ? 0 : list[i - 1][0].value
				}
				list.push(
					data.filter(item => {
						return item.parentId === id
					})
				)
			}
			new this.$Picker({
				data: list,
				value: this.value,
				title: {
					text: '城市选择'
				},
				cascade: this.cascade,
				rule({ column, selectedIndex, value }) {
					return data.filter(item => {
						return item.parentId === value
					})
				},
				onOk: (values, text, selectedIndex) => {
					this.value = values
					this.text = text
				},
				onScrollEnd: ({ column, selectedIndex }) => {}
			})
		}
	},
	watch: {
		column(column) {
			this.value = []
			this.text = []
		}
	}
}
</script>
<style lang="scss">
@import './picker.scss';
</style>
