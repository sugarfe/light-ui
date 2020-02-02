<template>
	<PageContent class="example-popup-page" contentClass="flex-box-column">
		<Navbar slot="header" ref="navbar">Popup</Navbar>
		<div class="flex-1">
			<example-group contentClass="group-content">
				position
				<template v-slot:content>
					<radio-group v-model="option.position" horizontal>
						<radio value="top">Top</radio>
						<radio value="bottom">Bottom</radio>
						<radio value="left">Left</radio>
						<radio value="right">Right</radio>
						<radio value="center">Center</radio>
					</radio-group>
				</template>
			</example-group>
			<example-group contentClass="group-content">
				size
				<template v-slot:content>
					<radio-group v-model="option.size" horizontal>
						<radio value="100%">100%</radio>
						<radio value="150px">150px</radio>
						<radio value="200px">200px</radio>
					</radio-group>
				</template>
			</example-group>
			<!-- <example-group contentClass="group-content">
				offset
				<template v-slot:content>
					<radio-group v-model="option.offset" horizontal>
						<radio value="0px">0px</radio>
						<radio value="30px">30px</radio>
						<radio value="80px">80px</radio>
					</radio-group>
				</template>
			</example-group> -->
			<Cell>
				isMask
				<template slot="value">
					<l-switch v-model="option.isMask"></l-switch>
				</template>
			</Cell>
			<Cell>
				isMaskClose
				<template slot="value">
					<l-switch v-model="option.isMaskClose"></l-switch>
				</template>
			</Cell>
			<Cell>
				loop
				<template slot="value">
					<Button theme="primary" @click="open(true)">open</Button>
				</template>
			</Cell>
			<!-- <Cell @click="open({ position: 'top' })">
				Top
				<template slot="value">
					<i class="iconfont icon-arrow-forward"></i>
				</template>
			</Cell>
			<Cell @click="open({ position: 'bottom' })">
				Bottom
				<template slot="value">
					<i class="iconfont icon-arrow-forward"></i>
				</template>
			</Cell>
			<Cell @click="open({ position: 'left' })">
				Left
				<template slot="value">
					<i class="iconfont icon-arrow-forward"></i>
				</template>
			</Cell>
			<Cell @click="open({ position: 'right' })">
				Right
				<template slot="value">
					<i class="iconfont icon-arrow-forward"></i>
				</template>
			</Cell>
			<Cell @click="open({ position: 'center', isMask: true })">
				Center
				<template slot="value">
					<i class="iconfont icon-arrow-forward"></i>
				</template>
			</Cell>
			<Cell @click="open({ position: 'left', size: '300px' })">
				Left - 300px
				<template slot="value">
					<i class="iconfont icon-arrow-forward"></i>
				</template>
			</Cell>
			<Cell @click="open({ position: 'bottom', size: '200px', isMask: true })">
				Bottom - 200px - Mask
				<template slot="value">
					<i class="iconfont icon-arrow-forward"></i>
				</template>
			</Cell>
			<Cell @click="open({ position: 'left', open: true })">
				loop - open
				<template slot="value">
					<i class="iconfont icon-arrow-forward"></i>
				</template>
			</Cell> -->
		</div>
		<div class="action-panel">
			<Button block theme="primary" @click="open">open</Button>
		</div>
	</PageContent>
</template>
<script>
import PopupModel from './PopupModel'
export default {
	data() {
		return {
			option: {
				position: 'top',
				size: '100%',
				isMask: false,
				isMaskClose: false,
				offset: '0px'
			}
		}
	},
	methods: {
		open(open = false) {
			new this.$Popup(PopupModel, {
				...this.option,
				option: this.option,
				open
			})
		}
	},
	beforeRouteLeave(to, from, next) {
		next()
	},
	beforeRouteEnter(to, from, next) {
		next()
	},
	beforeRouteUpdate() {}
}
</script>
<style lang="scss">
@import './popup';
</style>
