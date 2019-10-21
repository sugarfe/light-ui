<template>
  <div
    class="l-toast"
    :class="className"
  >
    <div v-html="text"></div>
  </div>
</template>
<script>
import { setTimeout } from 'timers';
export default {
  name: 'toast',
  data() {
    return {}
  },
  props: {
    text: {
      type: String,
      default: () => {
        return undefined
      }
    },
    className: {
      type: String,
      default: () => {
        return 'initClass'
      }
    },
    duration: {
      type: Number,
      default: () => {
        return 0
      }
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      setTimeout(() => {
        this.$emit('popup-close')
      }, this.duration)
    }
  }
}
</script>
<style lang="scss">
@import './toast.scss';
</style>
