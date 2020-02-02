<template>
	<PageContent contentClass="clip-page">
		<Navbar slot="header">ClipImage</Navbar>
		<div class="browse-warp">
			<input ref="input" type="file" accept="image/*" @change="change" />
		</div>
	</PageContent>
</template>
<script>
let reader
export default {
	data() {
		return {}
	},
	created() {
		this.init()
	},
	methods: {
		init() {
			reader = new FileReader()
			reader.onload = e => {
				new this.$ClipImage({
					url: e.target.result
				})
			}
		},
		change(e) {
			let [files] = e.target.files
			files && reader.readAsDataURL(files)
			this.$refs['input'].value = ''
		}
	}
}
</script>
<style lang="scss">
@import './clip.image.scss';
</style>
