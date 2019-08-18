<template>
  <div class="l-group-list">
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
      activeIndex: 0,
      navWarpTop: 0
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.navWarpTop = document.querySelector('.l-group-list-nav').offsetTop
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
      this.scrollTo(this.getNavIndex(e.touches[0].pageY))
    },
    getNavIndex(pageY) {
      let i = Math.ceil((pageY - this.navWarpTop + 10) / 22)
      return (i < 0 ? 0 : i > this.nav.length ? this.nav.length : i) - 1
    }
  }
}
</script>
<style lang="scss">
@import './group.list.scss';
</style>
