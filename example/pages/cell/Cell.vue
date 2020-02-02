<template>
	<PageContent>
		<Navbar slot="header">Cell</Navbar>
		<Cell @click="test">
			姓名
			<template slot="value">
				张三
			</template>
		</Cell>
		<Cell>
			姓名
			<template slot="value">
				张三
			</template>
		</Cell>
		<Cell>
			姓名
			<template slot="value">
				张三
			</template>
		</Cell>
		<Cell>
			姓名
			<template slot="value">
				张三
			</template>
		</Cell>
	</PageContent>
</template>
<script>
export default {
	data() {
		return {
			values: []
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
