<template>
  <l-page-content class="popup-model flex-box flex-column flex-align-center">
    <l-navbar>Content</l-navbar>
    <l-button
      theme="primary"
      @click="close"
    >关闭</l-button>
  </l-page-content>
</template>
<script>
export default {
  props: {},
  created() {},
  methods: {
    close() {
      this.$emit('popup-close')
    }
  },
  beforeRouteLeave(to, from, next) {}
}
</script>
<style lang="scss">
.popup-model {
  background-color: #fff;
}
</style>
