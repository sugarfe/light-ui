<template>
  <div
    class="flex-box"
    :class="dynamicClass"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'flex',
  props: {
    row: {
      type: Boolean,
      default() {
        return false
      }
    },
    column: {
      type: Boolean,
      default() {
        return false
      }
    },
    wrap: {
      type: Boolean,
      default() {
        return false
      }
    },
    reverse: {
      type: Boolean,
      default() {
        return false
      }
    },
    justify: {
      type: String,
      default() {
        return ''
      }
    },
    align: {
      type: String,
      default() {
        return ''
      }
    }
  },
  computed: {
    dynamicClass() {
      return {
        'flex-row': this.row && !this.reverse,
        'flex-row-reverse': this.row && this.reverse,
        'flex-column': this.column && !this.reverse,
        'flex-column-reverse': this.column && this.reverse,
        'flex-wrap': this.wrap,
        'flex-wrap-reverse': this.wrapReverse,
        [`flex-justify-${this.justify}`]: !!this.justify,
        [`flex-align-${this.align}`]: !!this.align
      }
    }
  }
}
</script>
<style lang='scss'>
@import './flex.scss';
</style>
