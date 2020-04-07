<template>
  <div
    class="l-grid-item"
    :style="style"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GridItem',
  data() {
    return {
      index: -1,
      width: 0,
      height: 'auto',
      marginBottom: 0,
      marginRight: 0
    }
  },
  computed: {
    style() {
      return {
        width: this.width,
        height: this.height,
        marginBottom: this.marginBottom,
        marginRight: this.marginRight
      }
    }
  },
  mounted() {
    this.init()
  },
  destroy() {
    this.$parent.removeItem()
  },
  methods: {
    init() {
      this.$parent.addItem()
    },
    updateIndex() {
      this.index = this.$parent.getIndex(this)
    },
    updateSize() {
      let {
        marginRight,
        marginBottom,
        width,
        height
      } = this.$parent.getItemSize(this.index)
      this.marginRight = `${marginRight}px`
      this.marginBottom = `${marginBottom}px`
      this.width = width
      this.height = height !== 0 ? `${height}px` : 'initial'
    }
  },
  watch: {
    index() {
      this.$nextTick(() => {
        this.updateSize()
      })
    }
  }
}
</script>
<style lang="scss">
@import './grid.scss';
</style>
