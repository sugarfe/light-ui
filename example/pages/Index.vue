<template>
	<PageContent class="index-page" contentClass="index-page-component-list">
		<div class="title flex-box flex-align-center" slot="header">
			<div class="flex-1">
				LightUI
			</div>
			<Button theme="warning" size="small" @click="$router.push('/icon')"
				>Icon</Button
			>
		</div>
		<example-group
			contentClass="group-content"
			v-for="(group, index) in componentList"
			:key="index"
		>
			{{ group.name }}
			<template v-slot:content>
				<Grid ref="grid" :col="3" :square="true" :spacing="1" :vertical="1">
					<GridItem
						v-for="(item, i) in group.items"
						:key="i"
						class="component-item flex-box-center"
						@click.native="navigateTo(item)"
						>{{ item }}</GridItem
					>
				</Grid>
			</template>
		</example-group>
	</PageContent>
</template>
<script>
import componentList from '@example/assets/component.router.json'
export default {
	components: {},
	data() {
		return {
			componentList
		}
	},
	methods: {
		navigateTo(router) {
			this.$router.push(router)
		}
	}
}
</script>
<style lang="scss">
@import './index.scss';
</style>
