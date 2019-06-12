<template>
	<div class="run-page-content" :class="dynamic.class">
		<slot></slot>
		<div class="flex-1 run-scroll-y" :class="contentClass">
			<slot name="content"></slot>
		</div>
	</div>
</template>
<script>
export default {
	name: 'page-content',
	props: {
		flex: {
			type: Boolean,
			default() {
				return true
			}
		},
		fullHeight: {
			type: Boolean,
			default() {
				return true
			}
		},
		flexDirectionColumn: {
			type: Boolean,
			default() {
				return true
			}
		},
		contentClass: {
			type: String,
			default() {
				return ''
			}
		}
	},
	data() {
		return {
			dynamic: {
				class: {
					'run-page-content-full-height': this.fullHeight,
					'flex-box': this.flex,
					'flex-column': this.flexDirectionColumn
				}
			}
		}
	},
	created() {},
	methods: {}
}
</script>
<style lang="scss">
@import './pageContent.scss';
</style>
