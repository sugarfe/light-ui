<template>
	<PageContent>
		<Navbar slot="header">Radio</Navbar>
		<example-group contentClass="group-content"
			>basic
			<template v-slot:content>
				<RadioGroup v-model="value1">
					<Radio
						:value="item.value"
						v-for="(item, index) in data"
						:key="index"
						>{{ item.text }}</Radio
					>
				</RadioGroup>
			</template>
		</example-group>
		<example-group contentClass="group-content"
			>basic + right
			<template v-slot:content>
				<RadioGroup v-model="value2" right>
					<Radio
						:value="item.value"
						v-for="(item, index) in data"
						:key="index"
						>{{ item.text }}</Radio
					>
				</RadioGroup>
			</template>
		</example-group>
		<example-group contentClass="group-content"
			>horizontal
			<template v-slot:content>
				<RadioGroup v-model="value3" horizontal>
					<Radio
						:value="item.value"
						v-for="(item, index) in data"
						:key="index"
						>{{ item.text }}</Radio
					>
				</RadioGroup>
			</template>
		</example-group>
		<example-group contentClass="group-content"
			>horizontal + right
			<template v-slot:content>
				<RadioGroup v-model="value4" horizontal right>
					<Radio
						:value="item.value"
						v-for="(item, index) in data"
						:key="index"
						>{{ item.text }}</Radio
					>
				</RadioGroup>
			</template>
		</example-group>
		<example-group contentClass="group-content"
			>horizontal + disabled
			<template v-slot:content>
				<RadioGroup v-model="value5" horizontal>
					<Radio
						:value="item.value"
						v-for="(item, index) in data"
						:key="index"
						:disabled="index === 0"
						>{{ item.text }}</Radio
					>
				</RadioGroup>
			</template>
		</example-group>
	</PageContent>
</template>
<script>
export default {
	components: {},
	data() {
		return {
			value1: 1,
			value2: 1,
			value3: 1,
			value4: 1,
			value5: 1,
			data: [
				{
					text: 'JavaScript',
					value: 1
				},
				{
					text: 'CSS',
					value: 2
				},
				{
					text: 'Html',
					value: 3
				}
			]
		}
	},
	computed: {},
	created: function() {},
	beforeMount: function() {},
	mounted: function() {},
	beforeDestroy: function() {},
	destroyed: function() {},
	methods: {},
	watch: {},
	directives: {}
}
</script>
