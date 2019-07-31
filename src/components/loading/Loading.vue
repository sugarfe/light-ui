<template>
  <svg
    class="l-loading"
    :class="dynamicClass"
    :style="dynamicStyle"
    viewBox="25 25 50 50"
  >
    <circle
      class="l-loading-path"
      cx="50"
      cy="50"
      r="23"
      fill="none"
    />
  </svg>
</template>

<script>
export default {
  name: 'loading',
  props: {
    size: {
      type: String,
      default() {
        return 'lg'
      }
    },
    theme: {
      type: String,
      validator(value) {
        return ['primary', 'secondary'].includes(value)
      },
      default() {
        return 'primary'
      }
    }
  },
  computed: {
    dynamicClass() {
      let styleClassArray = []
      this.theme && styleClassArray.push(`l-loading-${this.theme}`)
      ;['lg', 'sm'].includes(this.size) &&
        styleClassArray.push(`l-loading-${this.size}`)
      return styleClassArray
    },
    dynamicStyle() {
      let styleArray = {}
      !['lg', 'sm'].includes(this.size) && (styleArray.width = this.size)
      return styleArray
    }
  }
}
</script>
<style lang="scss">
@import './loading.scss';
</style>
