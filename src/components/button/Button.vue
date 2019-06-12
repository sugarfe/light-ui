<template>
	<button class="l-button" :class="styleClass" @click="clickHandle">
		<slot></slot>
	</button>
</template>
<script>
export default {
	name: 'button',
	mark: 'button',
	props: {
		size: {
			type: String,
			default() {
				return 'default'
			}
		},
		theme: {
			type: String,
			default() {
				return 'default'
			}
		},
		disabled: {
			type: Boolean,
			default() {
				return false
			}
		},
		block: {
			type: Boolean,
			default() {
				return false
			}
		},
		light: {
			type: Boolean,
			default() {
				return false
			}
		}
	},
	computed: {
		styleClass() {
			let styleClassArray = [
				`l-button-size-${this.size}`,
				`l-button-${this.light ? 'light-' : ''}theme-${this.theme}`
			]
			this.block && styleClassArray.push('l-button-block')
			this.light && styleClassArray.push('l-button-light')
			return styleClassArray.join(' ')
		}
	},
	methods: {
		clickHandle() {
			this.$emit('click')
		},
		styleChangeByType(value) {
			let mark = `l-button-${value}`
			value
				? styleClassArray.push(mark)
				: (styleClassArray = styleClassArray.filter(item => {
						return item !== mark
				  }))
		}
	},
	watch: {
		block(value) {
			this.styleChangeByType('block')
		},
		light(value) {
			this.styleChangeByType('light')
		}
	}
}
</script>
<style lang="scss">
@import './button.scss';
</style>
