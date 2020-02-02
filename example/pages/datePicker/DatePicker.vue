<template>
	<PageContent
		class="example-button-page"
		contentClass="content flex-box-column"
	>
		<Navbar slot="header">DatePicker</Navbar>
		<div class="flex-1">
			<example-group contentClass="group-content">
				scope
				<template v-slot:content>
					<radio-group v-model="scope" right>
						<radio :value="1">年</radio>
						<radio :value="2">月</radio>
						<radio :value="3">日</radio>
					</radio-group>
				</template>
			</example-group>
		</div>
		<div class="action-panel">
			<Button block theme="primary" @click="open">打开</Button>
		</div>
	</PageContent>
</template>
<script>
export default {
	data() {
		return {
			scope: 1
		}
	},
	mounted() {},
	methods: {
		open() {
			new this.$DatePicker({
				scope: this.scope,
				mode: ['yyyy-MM-dd', 'hh', 'mm']
			})
		}
	}
}
</script>
<style lang="scss">
@import './datePicker.scss';
</style>
