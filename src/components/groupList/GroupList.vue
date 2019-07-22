<template>
  <div class="l-group-list">
    <div
      class="l-group-list-warp"
      ref="scrollWarp"
      @scroll="onScroll"
    >
      <slot></slot>
    </div>
    <ul class="l-group-list-nav">
      <li
        v-for="(item,i) in nav"
        :key="i"
        :class="{'l-nav-active':i === activeIndex}"
        @click="scrollTo(i)"
      >
        {{item}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "GroupList",
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
  computed: {
  },
  methods: {
    onScroll(e) {
      this.scrollTop = e.target.scrollTop;
    },
    changeActiveIndex(i) {
      this.activeIndex = i || this.$children.findIndex((item) => {
        return item.isScrollInner
      })
    },
    scrollTo(i) {
      this.$refs['scrollWarp'].scrollTo(0, this.$children[i].scrollBegin);
      this.changeActiveIndex(i);
    }
  }
}
</script>
<style lang="scss">
@import './group.list.scss';
</style>
