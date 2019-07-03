<template>
  <div class="l-grid-box flex-box flex-wrap">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Grid',
  props: {
    col: {
      type: Number,
      default() {
        return 1
      }
    },
    spacing: {
      type: String,
      default: '0px'
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
        width:
          this.col === 1
            ? '100%'
            : `calc((100% - ${this.spacing} * ${this.col - 1}) / ${this.col})` //`${Math.floor(100 / this.col)}%`//
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
      this.itemWidht = ~this.$children.length
        ? this.$children[0].$el.offsetWidth
        : 0
      this.row = Math.ceil(this.$children.length / this.col)
      this.$children.map((item, index) => {
        item.setIndex && item.setIndex(index + 1)
        item.init()
      })
    },
    refresh() {
      this.$nextTick(() => {
        this.init()
      })
    }
  },
  watch: {
    col() {
      this.refresh()
    },
    square() {
      this.refresh()
    }
  }
}
</script>
