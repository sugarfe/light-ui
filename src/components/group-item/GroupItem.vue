<template>
  <div
    class="l-group-item-warp"
    :class="{'l-group-item-inner':isScrollInner}"
    :style="dynamicStyle"
  >
    <div
      class="group-list-bar"
      ref="item-bar"
      :style="dynamicStyleItemBar"
    >
      <slot name="title">
        {{title}}
      </slot>
    </div>
    <div>
      <slot
        v-for="(item,index) in data"
        :row="item"
      >
        <div
          class="group-list-item"
          :key="index"
        >
          {{item.text}}
        </div>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GroupItem',
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    title: {
      type: String,
      default() {
        return ''
      }
    }
  },
  computed: {
    parentScrollTop() {
      return this.$parent.scrollTop
    },
    isScrollInner() {
      return (
        this.parentScrollTop > 0 &&
        this.scrollBegin < this.parentScrollTop &&
        this.parentScrollTop < this.scrollEnd
      )
    },
    dynamicStyle() {
      return {
        'padding-top': this.isScrollInner ? `${this.itemBarHeight}px` : 0
      }
    },
    dynamicDistanceBar() {
      return this.parentScrollTop - this.scrollEnd
    },
    dynamicStyleItemBar() {
      let result = Math.abs(this.dynamicDistanceBar)
      result =
        result != 0 && result < this.itemBarHeight
          ? -(this.dynamicDistanceBar + this.itemBarHeight)
          : 0
      return {
        transform: ` translateY(${result}}px)`,
        '-webkit-transform': ` translateY(${result}px)`
      }
    }
  },
  data() {
    return {
      scrollBegin: 0,
      scrollEnd: 0,
      itemBarHeight: 0
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.scrollBegin = this.$el.offsetTop
      this.scrollEnd = this.scrollBegin + this.$el.offsetHeight
      this.itemBarHeight = this.$refs['item-bar'].offsetHeight
    }
  },
  watch: {
    isScrollInner(value) {
      value && this.$parent.changeActiveIndex()
    }
  }
}
</script>
<style lang="scss">
@import './group.item.scss';
</style>
