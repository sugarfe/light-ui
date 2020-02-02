<template>
	<scroll
		ref="scroll"
		:data="list"
		@pullingDown="onPullingDown"
		@pullingUp="onPullingUp"
		:pullUpLoad="pullUpLoad"
		:pullDownRefresh="pullDownRefresh"
	>
		<ul>
			<li v-for="item in list">
				{{ item }}
			</li>
		</ul>
	</scroll>
</template>
<script>
export default {
	data() {
		return {
			pullDownRefresh: {
				threshold: 80,
				stop: 40
			},
			pullUpLoad: {
				threshold: -50
			},
			list: []
		}
	},
	mounted() {
		this.list = [].concat(this.setList())
	},
	methods: {
		onPullingDown() {
			// 更新数据
			setTimeout(() => {
				if (Math.random() > 0.5) {
					// 如果有新数据
					this.list = [].concat(this.setList())
				} else {
					// 如果没有新数据
					this.$refs.scroll.forceUpdate()
				}
			}, 1500)
		},
		setList() {
			let arr = []
			for (let i = 0; i <= 20; i++) {
				arr.push(Math.floor(Math.random() * 100))
			}
			return arr
		},
		onPullingUp() {
			// 更新数据
			setTimeout(() => {
				if (Math.random() > 0.5) {
					// 如果有新数据
					this.list = this.list.concat(this.setList())
				} else {
					// 如果没有新数据
					this.$refs.scroll.forceUpdate()
				}
			}, 1500)
		}
	}
}
</script>
<style lang="scss" scoped>
li {
	height: 40px;
	border-bottom: 1px solid #ccc;
}
</style>
