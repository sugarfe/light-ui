<template>
	<PageContent>
		<Navbar slot="header">BrowseImage</Navbar>

		<example-group contentClass="group-content">
			basic
			<template v-slot:content>
				<BrowseImage
					ref="browseImage"
					v-model="value"
					compressed
					:quality="0.5"
					:size="{ width: 800, height: 600 }"
				></BrowseImage>
				<BrowseImage
					multiple
					v-model="value"
					:quality="0.5"
					compressed
					@onSuccess="onSuccess"
				></BrowseImage>
				<Button @click="browse">browse</Button>
			</template>
		</example-group>
	</PageContent>
</template>
<script>
export default {
	data() {
		return {
			value: []
		}
	},
	methods: {
		browse() {
			this.$refs['browseImage'].browse()
		},
		onSuccess(e) {
			console.log('onSuccess', e)
		}
	},
	watch: {
		value() {
			console.log(this.value.length)
		}
	}
}
</script>
<style lang="scss"></style>
