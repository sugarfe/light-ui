<template>
	<Grid
		ref="grid"
		:col="4"
		:square="true"
		spacing="10px"
		vertical="10px"
		class="l-browse-image"
	>
		<slot
			name="original"
			v-for="(item, i) in originalItmes"
			:item="{ ...item, i }"
		>
			<GridItem :key="i" class="l-browse-item">
				<img :src="item" v-if="item" />
				<div
					class="l-browse-item-remove flex-box-center"
					@click="removeItemByOriginal(index)"
				>
					<i class="icon-close"></i>
				</div>
			</GridItem>
		</slot>
		<slot v-for="(item, index) in items" :item="{ ...item, index }">
			<GridItem :key="index" class="l-browse-item">
				<img :id="item.id" :src="item.base64" v-if="item.base64" />
				<div
					class="l-browse-item-remove flex-box-center"
					@click="removeItem(index)"
				>
					<i class="icon-close"></i>
				</div>
			</GridItem>
		</slot>
		<GridItem
			class="l-browse-item l-browse-item-push flex-box-center"
			v-if="maxDisplay"
		>
			<i class="icon-add"></i>
			<input
				ref="input"
				type="file"
				:multiple="multiple"
				accept="image/*"
				@change="change"
			/>
		</GridItem>
	</Grid>
</template>
<script>
import Grid from '@/components/grid/Grid.vue'
import GridItem from '@/components/grid-item/GridItem.vue'
export default {
	name: 'BrowseImage',
	props: {
		data: {
			type: Array,
			default() {
				return []
			}
		},
		multiple: {
			type: Boolean,
			default() {
				return false
			}
		},
		value: {
			type: Array,
			default() {
				return []
			}
		},
		max: {
			type: Number,
			default() {
				return -1
			}
		},
		compressed: {
			type: Boolean,
			default() {
				return false
			}
		},
		size: {
			type: Object,
			default() {
				return {
					width: 300,
					height: 300
				}
			}
		},
		quality: {
			type: Number,
			default() {
				return 1
			}
		},
		capture: {
			type: String,
			default() {
				return ''
			}
		}
	},
	components: {
		Grid,
		GridItem
	},
	computed: {
		maxDisplay() {
			return (this.max > 0 && this.max > this.items.length) || this.max <= 0
		}
	},
	data() {
		return {
			items: [],
			originalItmes: [],
			deleteOriginalList: [],
			reader: undefined,
			tempList: [],
			currentFileCount: 0
		}
	},
	created() {
		this.init()
	},
	methods: {
		init() {
			this.reader = new FileReader()
			this.reader.onload = e => {
				this.$nextTick(() => {
					this.fileHandle(e).then(() => {
						this.tempList.length === 0
							? this.emitInput()
							: this.browseCompleted()
					})
				})
			}
		},
		async fileHandle(e) {
			let item = this.items[this.items.length - 1]
			if (!this.compressed) {
				item.base64 = e.target.result
				this.tempList.length === 0 && this.emitInput()
				return Promise.resolve()
			}
			let img = document.createElement('img')
			img.src = e.target.result
			await new Promise(resolve => {
				img.onload = e => {
					let { width, height } = this.getCompressedOption(e.target)
					let canvas = document.createElement('canvas')
					let ctx = canvas.getContext('2d')
					canvas.width = width
					canvas.height = height
					ctx.clearRect(0, 0, width, height)
					ctx.drawImage(img, 0, 0, width, height)
					this.items[this.items.length - 1].base64 = canvas.toDataURL(
						'image/jpeg',
						this.quality
					)
					resolve()
				}
			})
		},
		//获取压缩参数
		getCompressedOption({ width: originWidth, height: originHeight }) {
			if (originWidth < this.size.width && originHeight < this.size.height) {
				return { width: originWidth, height: originHeight }
			}
			let width, height
			if (originWidth / originHeight > this.size.width / this.size.height) {
				// 更宽，按照宽度限定尺寸
				width = this.size.width
				height = Math.round(this.size.width * (originHeight / originWidth))
			} else {
				height = this.size.height
				width = Math.round(this.size.height * (originWidth / originHeight))
			}
			return { width, height }
		},
		change(e) {
			let { target } = e
			// let [files] = target.files
			this.tempList = [...target.files]
			this.currentFileCount = this.tempList.length
			target.value = ''
			this.browseCompleted()
		},
		browseCompleted() {
			let [files] = this.tempList.splice(0, 1)
			this.items.push({
				id: `img-${new Date().getTime()}`,
				name: files.name,
				size: files.size,
				base64: undefined,
				base64: undefined,
				suffix: files.name.split('.').pop()
			})
			files && this.reader.readAsDataURL(files)
		},
		getOriginalValue() {
			return [...this.originalItmes]
		},
		getOriginalDeleteList() {
			return [...this.deleteOriginalList]
		},
		removeItem(index) {
			this.items.splice(index, 1)
			this.emitInput(true)
		},
		removeItemByOriginal(i) {
			this.deleteOriginalList.push({ ...this.originalItmes[i] })
			this.originalItmes.splice(i, 1)
		},
		emitInput(isDelete) {
			if (!isDelete) {
				this.$emit(
					'onSuccess',
					this.items.slice(this.items.length - this.currentFileCount)
				)
			}
			this.$emit(
				'input',
				this.items.map(item => {
					return {
						...item,
						base64: item.base64.split(',')[1]
					}
				})
			)
		},
		browse() {
			this.$refs['input'].click()
		}
	},
	watch: {
		items() {
			this.$nextTick(() => {
				this.$refs['grid'].refresh()
			})
		},
		data: {
			immediate: true,
			handler() {
				this.originalItmes = [...this.data]
			}
		}
	},
	directives: {}
}
</script>
<style lang="scss">
@import './browse.image';
</style>
