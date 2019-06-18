<template>
  <div class="l-grid-box flex-box flex-wrap">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'grid',
  props: {
    col: {
      type: Number,
      default() {
        return 1
      }
    },
    spacing: {
      type: String,
      default: 0
    },
    vertical: {
      type: String,
      default: '0px'
    },
    square: {
      type: Boolean,
      default() {
        return true
      }
    }
  },
  computed: {
    itemStyle() {
      return {
        width: `calc((100% - ${this.spacing} * ${this.col - 1}) / ${this.col})` //`${Math.floor(100 / this.col)}%`//
      }
    }
  },
  data() {
    return {
      row: 0,
      itemWidht: 0
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.row = Math.ceil(this.$children.length / this.col)
      this.$children.map((item, index) => {
        item.setIndex && item.setIndex(index + 1)
      })
      this.itemWidht = ~this.$children.length
        ? this.$children[0].$el.offsetWidth
        : 0
    },
    refresh() {
      this.init()
    }
  }
}
</script>
