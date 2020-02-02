<template>
	<div class="l-grid-item" :style="style">
		<slot></slot>
	</div>
</template>
<script>
export default {
	name: 'GridItem',
	data() {
		return {
			height: 'auto',
			index: -1,
			marginBottom: 0
		}
	},
	computed: {
		style() {
			return {
				...(this.$parent.itemStyle || {}),
				height: this.square ? `${this.itemWidht}px` : 'auto'
			}
		},
		square() {
			return this.$parent.square || false
		},
		spacing() {
			return this.$parent.spacing || 0
		},
		vertical() {
			return this.$parent.vertical || 0
		},
		col() {
			return this.$parent.col || 1
		},
		row() {
			return this.$parent.row
		},
		itemWidht() {
			return this.$parent.itemWidht
		}
	},
	methods: {
		init() {
			this.height = this.square ? `${this.$parent.itemWidht}px` : 'auto'
		}
	}
}
</script>
<style lang="scss">
@import './grid.scss';
</style>
