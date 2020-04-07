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
      type: Number,
      default: 0
    },
    vertical: {
      type: Number,
      default: 0
    },
    square: {
      type: Boolean,
      default() {
        return true
      }
    }
  },
  data() {
    return {
      children: 0,
      itemHeight: 0
    }
  },
  computed: {
    row() {
      return this.children > 0 ? Math.ceil(this.children / this.col) : 0
    },
    width() {
      return this.col === 1
        ? '100%'
        : `calc((100% - ${this.spacing}px * ${this.col - 1}) / ${this.col})`
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      let spacing = this.square * (this.col - 1)
      this.itemHeight = this.square
        ? (this.$el.offsetWidth - spacing) / this.col
        : 0
    },
    addItem() {
      ++this.children
    },
    removeItem() {
      --this.children
    },
    getItemSize(i) {
      return {
        index: i,
        marginRight: i % this.col ? this.spacing : 0,
        marginBottom:
          this.vertical && Math.ceil(i / this.col) < this.row
            ? this.vertical
            : 0,
        height: this.itemHeight,
        width: this.width
      }
    },
    getIndex(gridItem) {
      return (
        [...this.$el.children].findIndex(item => {
          return gridItem.$el === item
        }) + 1
      )
    },
    refresh() {
      this.init()
      let children = this.$children
      let length = this.$children.length
      for (let i = 0; i < length; i++) {
        children[i].updateSize()
      }
    }
  },
  watch: {
    col() {
      this.refresh()
    },
    square() {
      this.refresh()
    },
    children() {
      for (let i = 0; i < this.$children.length; i++) {
        this.$children[i].updateIndex()
      }
    }
  }
}
</script>
