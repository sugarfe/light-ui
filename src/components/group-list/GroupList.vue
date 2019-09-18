<template>
  <div
    ref="l-group-list"
    class="l-group-list"
  >
    <div
      class="l-group-list-warp"
      ref="scrollWarp"
      @scroll="onScroll"
    >
      <slot></slot>
    </div>
    <ul
      class="l-group-list-nav"
      @touchstart="touchstart"
      @touchmove.stop.prevent="touchmove"
    >
      <li
        v-for="(item,i) in nav"
        :key="i"
        :class="{'l-nav-active':i === activeIndex}"
      >
        {{item}}
      </li>
    </ul>
  </div>
</template>
<script>
let navWarpTop = 0,
  groupWarpTop = 0
export default {
  name: 'GroupList',
  props: {
    nav: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      scrollTop: 0,
      activeIndex: 0
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      let navDom = document.querySelector('.l-group-list-nav')
      let groupDom = this.$refs['l-group-list']
      navWarpTop = (groupDom.offsetHeight - navDom.offsetHeight) / 2
      groupWarpTop = groupDom.offsetTop
    },
    onScroll(e) {
      this.scrollTop = e.target.scrollTop
    },
    changeActiveIndex(i) {
      this.activeIndex =
        i !== undefined
          ? i
          : this.$children.findIndex(item => {
              return item.isScrollInner
            })
    },
    scrollTo(i) {
      if (this.$children[i]) {
        this.$refs['scrollWarp'].scrollTo(0, this.$children[i].scrollBegin)
        this.changeActiveIndex(i)
      }
    },
    touchstart(e) {
      this.touchmove(e)
    },
    touchmove(e) {
      let i = this.getNavIndex(e.touches[0].pageY)
      this.scrollTo(i)
    },
    getNavIndex(pageY) {
      let i = Math.ceil((pageY - navWarpTop - groupWarpTop) / 22)
      return (i < 0 ? 0 : i > this.nav.length ? this.nav.length : i) - 1
    }
  }
}
</script>
<style lang="scss">
@import './group.list.scss';
</style>
