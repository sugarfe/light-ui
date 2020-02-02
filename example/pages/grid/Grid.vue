<template>
	<PageContent>
		<Navbar slot="header">Grid</Navbar>
		<example-group contentClass="group-content">
			col
			<template v-slot:content>
				<radio-group v-model="option.col" horizontal>
					<radio :value="1">1</radio>
					<radio :value="2">2</radio>
					<radio :value="3">3</radio>
					<radio :value="4">4</radio>
					<radio :value="6">6</radio>
					<radio :value="10">10</radio>
				</radio-group>
			</template>
		</example-group>
		<example-group contentClass="group-content">
			square
			<template v-slot:content>
				<checkbox-group v-model="option.square" right>
					<checkbox :value="1">square</checkbox>
				</checkbox-group>
			</template>
		</example-group>
		<example-group contentClass="group-content">
			col 4 square
			<template v-slot:content>
				<Grid
					ref="grid"
					:col="option.col"
					:square="!!option.square[0]"
					spacing="1px"
					vertical="1px"
				>
					<GridItem
						v-for="item in data"
						:key="item"
						class="grid-item flex-box-center"
						>{{ item }}</GridItem
					>
				</Grid>
			</template>
		</example-group>
	</PageContent>
</template>
<script>
export default {
	data() {
		return {
			data: 10,
			option: {
				col: 2,
				square: [1]
			}
		}
	}
}
</script>
<style lang="scss">
.grid-item {
	background-color: #ffb403;
	color: #fff;
}
</style>
