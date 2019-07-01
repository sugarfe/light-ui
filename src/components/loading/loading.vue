<template>
  <div class="l-loading">
    <img src="./bars.svg">
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: {
    text: {
      type: String,
      default: () => {
        return '加载中'
      }
    }
  }
}
</script>
<style lang="scss">
@import './loading.scss';
</style>
