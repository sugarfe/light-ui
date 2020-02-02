<template>
	<PageContent>
		<Navbar slot="header">l-switch</Navbar>
		<example-group contentClass="group-content">
			basic
			<template v-slot:content>
				<div class="river">
					<l-switch v-model="valueDefault"></l-switch>
				</div>
			</template>
		</example-group>
		<example-group contentClass="group-content">
			disabled
			<template v-slot:content>
				<div class="river">
					<l-switch v-model="valueDisable" :disabled="disabled"></l-switch>
				</div>
			</template>
		</example-group>
	</PageContent>
</template>

<script>
export default {
	data() {
		return {
			valueDefault: true,
			selectList1: true,
			selectList2: false,
			valueDisable: false,
			valuePrevent: false,
			disabled: true
		}
	},
	methods: {}
}
</script>

<style lang="scss">
p {
	background-color: #eee;
	color: #666;
	padding: 10px 20px;
}
.river {
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>
