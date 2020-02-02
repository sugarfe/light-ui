<template>
	<div class="run-list-warp">
		<light-scroll
			ref="scroll"
			@scroll="onScroll"
			:listenScroll="true"
			v-if="simulationScroll"
		>
			<slot></slot>
		</light-scroll>
		<div class="native-scroll" v-else>
			<slot></slot>
		</div>
		<div
			class="run-item-active"
			ref="run-item-active"
			:style="itemActiveStyle"
			v-show="isfloat && y < 0 && ~activeItemIndex"
		></div>
		<div class="run-list-nav-warp">
			<ul
				class="nav-warp"
				@touchstart="touchstart"
				@touchmove.stop.prevent="touchmove"
			>
				<li
					v-for="(n, i) in nav"
					:key="i"
					:class="{ 'run-list-nav-active': activeItemIndex === i }"
				>
					{{ n }}
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import Scroll from '../scroll/Scroll.vue'
let navLiChilds, navOffsetTop, scrollDomTop
export default {
	name: 'GroupList',
	components: {
		'light-scroll': Scroll
	},
	props: {
		isfloat: {
			type: Boolean,
			default() {
				return true
			}
		},
		nav: {
			type: Array,
			default() {
				return []
			}
		},
		isInit: {
			type: Boolean,
			default() {
				return true
			}
		},
		simulationScroll: {
			type: Boolean,
			default() {
				return true
			}
		}
	},
	data() {
		return {
			groupBarHeight: 0,
			groupItemHeight: 0,
			y: 0,
			totalHeight: 0,
			diffHeight: 0,
			listItem: [],
			navList: [],
			itemActiveStyle: {
				transform: 'translate3d(0,0,0)',
				'-webkit-transform': 'translate3d(0,0,0)'
			}
		}
	},
	computed: {
		activeItemIndex() {
			let y = Math.abs(this.y) + 5
			return this.listItem.findIndex(item => {
				return (
					y >= item.startFixed + this.diffHeight &&
					y <= item.endFixed + this.diffHeight
				)
			})
		}
	},
	mounted: function() {
		this.$nextTick(() => {
			!!this.isInit && this.init()
		})
	},
	methods: {
		touchstart(e) {
			let i = navLiChilds.findIndex(item => {
				return item === e.target
			})
			this.scrollTo(i)
		},
		touchmove({ touches }) {
			let [touche] = touches
			let i = Math.floor((touche.pageY - navOffsetTop - scrollDomTop) / 18)
			i = Math.min(Math.max(i, 0), navLiChilds.length - 1)
			i !== this.activeItemIndex && this.scrollTo(i)
		},
		scrollTo(i) {
			this.$refs['scroll'].scrollToElement(
				this.$children[0].$children[i].$el,
				260
			)
		},
		init() {
			let scrollDom = this.$el.querySelector('.l-scroll')
			let itemEl = this.$children[0].$el.querySelectorAll('.run-list-item-warp')
			if (!itemEl || itemEl.length < 1) {
				return
			}
			navLiChilds = [...this.$el.querySelector('.nav-warp').children]
			navOffsetTop =
				(scrollDom.offsetHeight -
					this.$el.querySelector('.nav-warp').offsetHeight) /
				2
			scrollDomTop =
				document.documentElement.offsetHeight - scrollDom.offsetHeight
			console.log(navOffsetTop)
			this.groupBarHeight = itemEl[0].querySelector(
				'.run-list-group-bar'
			).offsetHeight
			let selfHeight = 0
			for (let i = 0; i < itemEl.length; i++) {
				selfHeight = itemEl[i].querySelector('.run-list-item').offsetHeight
				this.listItem.push({
					startFixed: this.totalHeight,
					endFixed: this.totalHeight + selfHeight
				})
				this.totalHeight += selfHeight
			}
			this.diffHeight = scrollDom.children[0].offsetHeight - this.totalHeight
		},
		refresh() {
			this.navList = []
			this.init()
			this.$refs['scroll'].refresh()
		},
		onScroll(pos) {
			this.y = pos.y
			let i = this.listItem.findIndex(value => {
				return (
					Math.abs(this.y) >=
						value.startFixed - this.groupBarHeight + this.diffHeight &&
					Math.abs(this.y) <= value.startFixed + this.diffHeight
				)
			})
			if (~i) {
				let n = -(
					this.groupBarHeight -
					(this.listItem[i].startFixed - Math.abs(this.y) + this.diffHeight)
				)
				this.itemActiveStyle['transform'] = `translate3d(0,${n}px,0)`
				this.itemActiveStyle['-webkit-transform'] = `translate3d(0,${n}px,0)`
			} else {
				this.itemActiveStyle['transform'] = `translate3d(0,0,0)`
				this.itemActiveStyle['-webkit-transform'] = `translate3d(0,0,0)`
			}
		}
	},
	watch: {
		activeItemIndex(val) {
			let listItems = this.$children[0].$el.querySelectorAll(
				'.run-list-item-warp'
			)

			if (listItems.length > val && !!~val) {
				this.$refs['run-item-active'].innerHTML = listItems[val]
					.querySelector('.run-list-item')
					.querySelector('.run-list-group-bar')
					.cloneNode(true).outerHTML
			}
		}
	},
	directives: {}
}
</script>
<style lang="scss">
@import './group.list.scss';
</style>
