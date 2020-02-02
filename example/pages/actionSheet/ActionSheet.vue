<template>
	<PageContent class="example-dialog-page" contentClass="flex-box-column">
		<Navbar slot="header">ActionSheet</Navbar>
		<div class="flex-1">
			<Cell @click="open()">
				Basic
				<template slot="value">
					<i class="iconfont icon-arrow-forward"></i>
				</template>
			</Cell>
			<Cell @click="open(true)">
				scopedSlots
				<template slot="value">
					<i class="iconfont icon-arrow-forward"></i>
				</template>
			</Cell>
		</div>
	</PageContent>
</template>
<script>
export default {
	data() {
		return {
			list: [
				{
					title: '内地',
					text: 13099887788
				},
				{
					text: 877889900
				},
				{
					title: '香港',
					text: 877889900
				},
				{
					text: 19988776677
				}
			]
		}
	},
	methods: {
		open(render = false) {
			new this.$ActionSheet({
				title: '联系方式',
				data: this.list,
				dataText: 'text',
				itemBoxClass: 'temp-class',
				scopedSlots: render
					? h => {
							return {
								default: props => {
									return (
										<div class="phone-action-sheet">
											{!!props.item.title && <span>{props.item.title}</span>}
											<a>{props.item.text}</a>
										</div>
									)
								}
							}
					  }
					: undefined,
				onChange: val => {}
			})
		}
	}
}
</script>
<style lang="scss">
.phone-action-sheet {
	font-size: 15px;
	a {
		color: #333333;
		&::before {
			content: '';
			position: absolute;
			height: 100%;
			width: 100%;
			top: 0;
			left: 0;
		}
	}
	span {
		position: absolute;
		left: 10px;
		color: #ffb403;
	}
}
</style>
