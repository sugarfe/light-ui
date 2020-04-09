<template>
	<PageContent
		class="example-picker-page"
		contentClass="content flex-box-column"
	>
		<Navbar slot="header">Picker</Navbar>
		<div class="flex-1">
			<Cell>
				column
				<template slot="value">
					<radio-group v-model="column" right horizontal>
						<radio :value="1">1</radio>
						<radio :value="2">2</radio>
					</radio-group>
				</template>
			</Cell>
			<Cell>
				cascade
				<template slot="value">
					<l-switch v-model="cascade"></l-switch>
				</template>
			</Cell>
			<Cell>
				Value
				<div slot="value" class="flex-box">
					<div class="value-item" v-for="(item, index) in text" :key="index">
						{{ item }}
					</div>
				</div>
			</Cell>
		</div>
		<div class="action-panel">
			<Button block theme="primary" @click="open">打开</Button>
		</div>
	</PageContent>
</template>
<script>
import data from './picker.json'
import pickerMultiData from './pickerMulti.json'
let list = []
export default {
	data() {
		return {
			value: [],
			text: [],
			column: 2,
			cascade: true
		}
	},
	mounted() {},
	methods: {
		open() {
			let list = []
			new this.$Picker({
				data: this.cascade ? data : pickerMultiData.slice(0, this.column),
				value: this.value,
				title: {
					text: '城市选择'
				},
				dataValue: 'id',
				dataText: 'name',
				cascade: this.cascade,
				col: 2,
				rootRule: item => {
					return item.parentId === '10000001'
				},
				onOk: (values, text, selectedIndex) => {
					this.value = values
					this.text = text
				}
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
