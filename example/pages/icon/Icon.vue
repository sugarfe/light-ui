<template>
	<PageContent class="icon-page">
		<Navbar slot="header">Icon</Navbar>
		<Grid ref="grid" :col="5" :square="true" :spacing="1" :vertical="1">
			<GridItem
				v-for="item in list"
				:key="item"
				class="flex-box-center icon-item"
			>
				<i :class="`icon-${item}`"> </i>
				<span>{{ item }}</span>
			</GridItem>
		</Grid>
	</PageContent>
</template>
<script>
export default {
	data() {
		return {
			list: [
				'add',
				'checkmark',
				'close',
				'search',
				'arrow-forward',
				'arrow-up',
				'arrow-down',
				'arrow-back'
			]
		}
	},
	computed: {},
	methods: {
		test() {
			console.log('cell')
		}
	}
}
</script>
<style lang="scss" scoped>
.icon-page {
	.icon-item {
		background-color: #f7f7f7;
		position: relative;
		i {
			font-size: 28px;
			color: rgb(30, 30, 30);
		}
		span {
			position: absolute;
			bottom: 5px;
			font-size: 12px;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			width: 100%;
			padding: 0 5px;
			text-align: center;
		}
	}
}
</style>
