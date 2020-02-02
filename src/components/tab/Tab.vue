<template>
	<div class="l-tab" :class="dynamicClass">
		<div ref="l-tab-list" class="l-tab-list" @click="activeHandle">
			<slot
				v-for="(item, index) in data"
				:item="{
					text: item,
					index,
					isActive: index === activeIndex
				}"
			>
				<div
					class="l-tab-item"
					:class="{ 'l-tab-item-active': index === activeIndex }"
					:key="index"
				>
					{{ item }}
				</div>
			</slot>
		</div>
		<div
			v-if="isScrollBar"
			class="l-tab-scroll-bar"
			:style="dynamicScrollBarStyle"
			:class="dynamicScrollBarClass"
		></div>
	</div>
</template>
<script>
export default {
	name: 'Tab',
	props: {
		data: {
			type: Array,
			default() {
				return []
			}
		},
		value: {
			type: Number,
			default() {
				return 0
			}
		},
		animation: {
			type: [String],
			default: 'general'
		},
		small: {
			type: Boolean,
			default() {
				return false
			}
		},
		isScrollBar: {
			type: Boolean,
			default() {
				return true
			}
		}
	},
	computed: {
		dynamicScrollBarStyle() {
			let left = this.activeIndex * this.itemProportion
			return {
				left: `${left}%`,
				right: `${100 - left - this.itemProportion}%`
			}
		},
		dynamicScrollBarClass() {
			return {
				[`l-tab-scroll-bar-ani-${this.track}`]: !!this.track
			}
		},
		dynamicClass() {
			return {
				'l-tab-size-small': this.small
			}
		},
		itemProportion() {
			return parseFloat((100 / this.data.length).toFixed(2))
		}
	},
	data() {
		return {
			activeIndex: 0,
			oldActiveIndex: 0,
			track: ''
		}
	},
	created() {
		this.init()
	},
	methods: {
		init() {
			this.changeAnimation()
		},
		activeHandle(e) {
			let currentItem = e.target
			let i = [...this.$refs['l-tab-list'].children].findIndex(item => {
				return item === currentItem
			})
			this.oldActiveIndex = this.activeIndex
			this.activeIndex = i
			this.changeAnimation()
			this.$emit('input', i)
		},
		changeAnimation() {
			switch (this.animation) {
				case 'earthworm':
					this.track =
						this.activeIndex > this.oldActiveIndex
							? 'earthworm-forward'
							: 'earthworm-back'
					break
				case 'none':
					this.track = ''
					break
				case 'general':
					this.track = 'general'
					break
				default:
					this.track = 'general'
			}
		}
	},
	watch: {
		value: {
			immediate: true,
			handler(value) {
				this.activeIndex =
					value > this.data.length
						? this.data.length - 1
						: value < 0
						? 0
						: value
			}
		}
	}
}
</script>
<style lang="scss">
@import './tab.scss';
</style>
