<template>
  <svg
    class="l-loading"
    :class="{
                [`l-loading-${size}`]: size,
                [`l-loading-${theme}`]: theme,
            }"
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
        return ['primary', 'secondary'].indexOf(value) > -1
      },
      default() {
        return 'primary'
      }
    }
  }
}
</script>
<style lang="scss">
@import './loading.scss';
</style>
