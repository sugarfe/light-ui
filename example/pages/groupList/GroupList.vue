<template>
	<PageContent>
		<Navbar slot="header">GroupList</Navbar>
		<GroupList :nav="navList">
			<GroupItem v-for="(item, index) in data" :key="index" :data="item.data">
				<div slot="title" class="title">{{ item.name }}</div>
				<div slot-scope="param">
					<div class="group-list-item">
						{{ param.row.text }}
					</div>
				</div>
			</GroupItem>
		</GroupList>
	</PageContent>
</template>
<script>
import data from './data.json'
export default {
	data() {
		return {
			data
		}
	},
	computed: {
		navList() {
			return this.data.map(item => {
				return item.name
			})
		}
	},
	methods: {}
}
</script>
<style lang="scss" scoped>
.title {
	height: 38px;
	line-height: 38px;
	padding-left: 10px;
	background-color: #cacaca;
	color: #fff;
}
.group-list-item {
	width: 100%;
	height: 60px;
	line-height: 60px;
	background-color: #fff;
	padding: 0 10px;
	position: relative;
}
</style>
