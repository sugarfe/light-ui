<template>
	<PageContent class="example-button-page">
		<Navbar slot="header">Navbar</Navbar>
		<example-group contentClass="group-content">
			theme
			<template v-slot:content>
				<Grid :col="1" :square="false" :vertical="2">
					<GridItem>
						<Navbar>default</Navbar>
					</GridItem>
					<GridItem>
						<Navbar theme="primary">primary</Navbar>
					</GridItem>
					<GridItem>
						<Navbar theme="success">success</Navbar>
					</GridItem>
					<GridItem>
						<Navbar theme="warning">warning</Navbar>
					</GridItem>
					<GridItem>
						<Navbar theme="alert">alert</Navbar>
					</GridItem>
				</Grid>
			</template>
		</example-group>
	</PageContent>
</template>
<script>
export default {
	components: {},
	data() {
		return {
			value: ''
		}
	},
	created() {},
	methods: {}
}
</script>
<style lang="scss">
.Navbar-theme-1 {
	background: #ffb403;
	.icon-arrow-back {
		color: #fff;
	}
	.Navbar-title {
		color: #fff;
	}
}
</style>
