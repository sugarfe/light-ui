<template>
	<PageContent class="browse-page">
		<Navbar slot="header">BrowseImage</Navbar>
		<Cell>
			multiple
			<template slot="value">
				<l-switch v-model="multiple"></l-switch>
			</template>
		</Cell>
		<example-group contentClass="group-content">
			{{ option || 'basic' }}
			<template v-slot:content>
				<Grid ref="grid" :col="4" :square="true" :spacing="5" :vertical="5">
					<GridItem v-for="(item, index) in list" :key="index" class="item">
						<img :src="item.tempUrl" class="item-img" />
					</GridItem>
					<GridItem class="item">
						<BrowseImage
							class="borwse flex-box-center"
							ref="browseImage"
							:quality="0.5"
							:size="{ width: 800, height: 600 }"
							:multiple="multiple"
							@onSuccess="onSuccess"
						>
							+
						</BrowseImage>
					</GridItem>
				</Grid>
			</template>
		</example-group>
	</PageContent>
</template>
<script>
export default {
	data() {
		return {
			list: [],
			multiple: false
		}
	},
	computed: {
		option() {
			return ['multiple']
				.filter(item => {
					return this[item] === true
				})
				.map(item => {
					return `【${item}】`
				})
				.join('')
		}
	},
	methods: {
		browse() {
			this.$refs['browseImage'].browse()
		},
		onSuccess(res) {
			console.log(res)
			this.list.push(res)
		}
	}
}
</script>
<style lang="scss">
.browse-page {
	.borwse {
		width: 100%;
		height: 100%;
	}
	.item {
		box-sizing: border-box;
		border: 1px solid #eee;
	}
	.item-img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
}
</style>
