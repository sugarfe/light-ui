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
			this.wheelList = this.data
			this.initSelectedIndex()
			setTimeout(() => {
				this.wheelList.forEach((item, index) => {
					this.initWheel(index)
				})
				this.$emit('onFinish', option.wheels)
			})
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
				console.log('scrollStart')
			})
			option.wheels[index].on('scrollEnd', () => {
				this.$emit('onScrollEnd', {
					column: index,
					selectedIndex: option.wheels[index].getSelectedIndex()
				})
				let i = index + 1
				let selectedIndexAll = this.getSelectedIndexAll()
				if (this.cascade && i < this.data.length) {
					while (i < this.data.length) {
						let selectedIndex = option.wheels[i - 1].getSelectedIndex()
						let newData = this.rule(
							{
								column: i - 1,
								selectedIndex,
								value: this.data[i - 1][selectedIndex][this.dataValue]
							},
							{
								selectedIndexAll,
								values: selectedIndexAll.map((selectedIndex, i) => {
									return this.wheelList[i][selectedIndex][this.dataValue]
								})
							}
						)
						if (newData) {
							let type = Object.prototype.toString.call(newData)
							console.log(type)
							let items, _selectedIndex
							if (type === '[object Array]') {
								items = newData
								_selectedIndex = 0
							} else if (type === '[object Object]') {
								items = newData.data
								_selectedIndex = newData.selectedIndex
							}
							this.refillColumn(i, items)
							console.log(_selectedIndex)
							option.selectedIndex[i] = _selectedIndex
							// option.wheels[i].wheelTo(_selectedIndex)
							++i
						} else {
							i = this.data.length
						}
					}
					this.lock = false
				} else {
					this.lock = false
				}
			})
		},
		refillColumn(index, data) {
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
			option.selectedIndex[index] = 0
			this.$nextTick(() => {
				this.initWheel(index)
			})
		},
		initSelectedIndex() {
			let values = []
			if (typeof this.value === 'string') {
				values = [this.value]
			} else if (typeof this.value === 'object') {
				values = [...this.value]
			}
			this.wheelList.forEach((item, index) => {
				let i = item.findIndex(o => {
					return o[this.dataValue] === values[index]
				})
				option.selectedIndex[index] = ~i ? i : 0
			})
		},
		ok() {
			if (this.lock) {
				return
			}
			option.wheels.forEach((scrollInstance, i) => {
				option.selectedIndex[i] = scrollInstance.getSelectedIndex()
			})
			let values = option.selectedIndex.map((selectedIndex, i) => {
				return this.wheelList[i][selectedIndex][this.dataValue]
			})
			let text = option.selectedIndex.map((selectedIndex, i) => {
				return this.wheelList[i][selectedIndex][this.dataText]
			})
			this.$emit('onOk', {
				values,
				text,
				selectedIndex: option.selectedIndex
			})
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
