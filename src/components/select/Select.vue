<template>
	<div class="l-select flex-box-column">
		<div class="l-select-search"></div>
		<div class="l-select-history"></div>
		<div class="l-select-list flex-1">
			<div v-for="item in currentList" :key="item[id]" @click="">
				{{ item[name] }}
			</div>
		</div>
		<div class="l-select-footer"></div>
	</div>
</template>
<script>
export default {
	components: {},
	props: {
		data: {
			type: Array,
			default() {
				return []
			}
		},
		id: {
			type: String,
			default() {
				return 'id'
			}
		},
		parentId: {
			type: String,
			default() {
				return 'parentId'
			}
		},
		name: {
			type: String,
			default() {
				return 'name'
			}
		},
		root: {
			type: Function,
			default() {
				return true
			}
		}
	},
	data() {
		return {
			currentId: undefined,
			history: []
		}
	},
	computed: {
		currentList() {
			return this.data.filter(item => {
				return this.currentId
					? item[this.parentId] === this.currentId
					: this.root(item)
			})
		}
	},
	created: function() {
		console.log(this.root, this.data)
	},
	beforeMount: function() {},
	mounted: function() {},
	beforeDestroy: function() {},
	destroyed: function() {},
	methods: {},
	watch: {},
	directives: {}
}
</script>
<style lang="scss">
@import './select';
</style>
