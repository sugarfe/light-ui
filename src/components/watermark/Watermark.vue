<template>
  <div class="l-watermark">
    <div
      class="l-watermark-background flex-box-column"
      ref="background"
    >
      <div
        v-for="(item, index) in row"
        :key="index"
        class="flex-box flex-1"
      >
        <div
          v-for="(item, i) in textArray"
          :key="i"
          class="flex-1 l-watermark-text"
          v-html="item"
        >
        </div>
      </div>
    </div>
    <div class="l-watermark-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'watermark',
  props: {
    text: {
      type: [String, Array],
      default() {
        return ''
      }
    },
    row: {
      type: Number,
      default() {
        return 5
      }
    }
  },
  computed: {
    textArray() {
      return Object.prototype.toString.call(this.text) === '[object Array]'
        ? [...this.text]
        : [this.text]
    }
  },
  data() {
    return {}
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      //   this.height = this.$refs['background'].offsetHeight / this.row
      //   console.log(this.$refs['background'].offsetHeight, this.height)
    }
  }
}
</script>
<style lang='scss'>
@import './watermark.scss';
</style>
