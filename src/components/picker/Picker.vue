<template>
	<div class="l-picker flex-box-column">
		<div class="l-picker-top flex-box flex-align-center">
			<span class="l-picker-button" @click="cancel">取消</span>
			<span class="l-picker-title flex-1" :class="titleOption.class">
				{{ titleOption.text }}
			</span>
			<span class="l-picker-button" @click="ok">确定</span>
		</div>
		<div
			class="l-picker-contant flex-1 flex-box"
			ref="l-picker-scroll-wrapper"
			v-show="wheelList.length > 0"
		>
			<div v-for="(item, index) in wheelList" :key="index">
				<ul class="l-picker-wheel-scroll">
					<li
						v-for="(o, i) in item"
						class="wheel-item"
						:key="i"
						v-text="o[dataText]"
					></li>
				</ul>
			</div>
			<span class="l-picker-mask l-picker-mask-top"></span>
			<span class="l-picker-mask l-picker-mask-bottom"></span>
		</div>
	</div>
</template>
<script>
import BScroll from 'better-scroll'
let option
export default {
	props: {
		data: {
			type: Array,
			default() {
				return []
			}
		},
		dataText: {
			type: String,
			default() {
				return 'text'
			}
		},
		dataValue: {
			type: [String],
			default() {
				return 'value'
			}
		},
		dataId: {
			type: [String, Number],
			default() {
				return 'id'
			}
		},
		dataParentId: {
			type: [String, Number],
			default() {
				return 'parentId'
			}
		},
		value: {
			type: [String, Array],
			default() {
				return undefined
			}
		},
		title: {
			type: [String, Object],
			default() {
				return ''
			}
		},
		cascade: {
			type: Boolean,
			default() {
				return false
			}
		},
		col: {
			type: Number,
			default: 1
		},
		rootRule: {
			type: Function,
			default: undefined
		},
		rule: {
			type: Function,
			default() {
				return undefined
			}
		}
	},
	data() {
		return {
			titleOption: {
				text: '',
				class: ''
			},
			wheelList: [],
			lock: false
		}
	},
	created() {
		option = {
			wheels: [],
			values: undefined,
			selectedIndex: []
		}
	},
	mounted() {
		this.data.length && this.init()
	},
	destroyed() {
		option.wheels.forEach(scrollInstance => {
			scrollInstance.destroy()
		})
	},
	methods: {
		init() {
			this.wheelList = this.initData(this.wheelList)
			setTimeout(() => {
				this.wheelList.forEach((item, index) => {
					this.initWheel(index)
				})
				this.$emit('onFinish', option.wheels)
			})
		},
		initData(list = [], seletctItemId) {
			if (this.cascade) {
				let index = list.length
				let currentColList = this.data.filter(
					index === 0
						? this.rootRule
						: item => {
								return item[this.dataParentId] === seletctItemId
						  }
				)
				list.push(currentColList)
				let seletctIndex = this.getSelectedIndex(index, currentColList)
				option.selectedIndex[index] = seletctIndex
				if (this.col > index + 1) {
					this.initData(list, currentColList[seletctIndex][this.dataId])
				}
			} else {
				let tempList = []
				for (let item of this.data) {
					item = item.map(function(item) {
						if (Object.prototype.toString.call(item) !== '[object Object]') {
							return {
								[this.dataValue]: item,
								[this.dataText]: item
							}
						}
						return item
					})
					tempList.push(item)
				}
				tempList.map((item, index) => {
					option.selectedIndex[index] = this.getSelectedIndex(index, item)
				})
				list = tempList
			}
			return list
		},
		initWheel(index) {
			if (option.wheels[index] instanceof BScroll) {
				option.wheels[index].destroy()
			}
			option.wheels[index] = new BScroll(
				this.$refs['l-picker-scroll-wrapper'].children[index],
				{
					wheel: {
						selectedIndex: option.selectedIndex[index],
						observeDOM: false
					}
				}
			)
			option.wheels[index].on('scrollStart', () => {
				this.lock = true
			})
			option.wheels[index].on('scrollEnd', () => {
				let selectedIndexList = this.getSelectedIndexAll()
				let { values } = this.getValues()
				this.$emit('onScrollEnd', {
					column: index,
					values,
					selectedIndex: selectedIndexList
				})
				if (this.cascade && index + 1 < this.col) {
					this.updateColumn(index, selectedIndexList[index])
				}
				this.lock = false
			})
		},
		updateColumn(currentIndex, selectIndex) {
			let currentItem = this.wheelList[currentIndex][selectIndex]
			let list = this.data.filter(item => {
				return item[this.dataParentId] === currentItem[this.dataId]
			})
			let nextIndex = currentIndex + 1
			this.refillColumn(nextIndex, list)
			if (nextIndex < this.col - 1) {
				this.updateColumn(nextIndex, 0)
			}
		},
		refillColumn(index, data, selectIndex = 0) {
			this.$set(
				this.wheelList,
				index,
				data.map(item => {
					if (typeof item !== 'object') {
						return {
							[this.dataText]: item,
							[this.dataValue]: item
						}
					} else {
						return item
					}
				})
			)
			option.selectedIndex[index] = selectIndex
			this.$nextTick(() => {
				this.initWheel(index)
			})
		},
		getSelectedIndex(index, list) {
			let values = []
			if (typeof this.value === 'object') {
				values = [...this.value]
			} else {
				values = [this.value]
			}
			let i = list.findIndex(o => {
				return o[this.dataValue] === values[index]
			})
			return ~i ? i : 0
		},
		ok() {
			if (this.lock) {
				return
			}
			let { values, text } = this.getValues()
			this.$emit('onOk', {
				values,
				text,
				selectedIndex: option.selectedIndex
			})
		},
		getValues() {
			option.wheels.forEach((scrollInstance, i) => {
				option.selectedIndex[i] = scrollInstance.getSelectedIndex()
			})
			let values = option.selectedIndex.map((selectedIndex, i) => {
				return this.wheelList[i][selectedIndex][this.dataValue]
			})
			let text = option.selectedIndex.map((selectedIndex, i) => {
				return this.wheelList[i][selectedIndex][this.dataText]
			})
			return { values, text }
		},
		cancel() {
			this.$emit('popup-close')
		},
		getWheelsInstance() {
			return option.wheels
		},
		getSelectedIndexAll() {
			return option.wheels.map((item, index) => {
				return option.wheels[index].getSelectedIndex()
			})
		}
	},
	watch: {
		title: {
			immediate: true,
			deep: true,
			handler(value) {
				if (typeof value === 'stirng') {
					this.titleOption.text = value
				} else if (
					Object.prototype.toString.call(value) === '[object Object]'
				) {
					this.titleOption = {
						text: value.text,
						class: value.class
					}
				}
			}
		}
	}
}
</script>
<style lang="scss">
@import './picker.scss';
</style>
