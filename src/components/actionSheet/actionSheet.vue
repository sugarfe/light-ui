<template>
	<div class="action-sheet">
		<header class="action-sheet-item">{{ title }}</header>
		<ul>
			<!-- <li
        class="action-sheet-item"
        v-for="(item, index) in items"
        :key="index"
        @click="select(index)"
      >{{item[dataText]}}</li>-->
			<!-- <slot name="group-item" v-for="item in data" :row="item"></slot> -->
		</ul>
		<!-- <slot>2212</slot> -->
		<footer class="action-sheet-item" @click="$emit('popup-close')">
			{{ cancelTxt }}
		</footer>
	</div>
</template>
<script>
export default {
	data() {
		return {
			items: []
		}
	},
	props: {
		data: {
			type: Array,
			default: () => {
				return []
			}
		},
		title: {
			type: String,
			default: () => {
				return ''
			}
		},
		cancelTxt: String,
		dataText: String,
		dataValue: String
	},
	created() {
		this.init()
	},
	methods: {
		init() {
			this.items = this.data.map(item => {
				let obj = {}
				if (typeof item === 'string') {
					obj[this.dataText] = item
					obj[this.dataValue] = item
				} else {
					obj = { ...item }
				}
				return obj
			})
		},
		cancel() {
			this.$emit('onCancel')
		},
		select(index) {
			this.$emit('onSelect', this.items[index])
		}
	}
}
</script>

<style lang="scss">
@import './actionSheet.scss';
</style>
