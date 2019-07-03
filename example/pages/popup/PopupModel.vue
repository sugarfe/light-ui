<template>
  <PageContent class="popup-model flex-box flex-column flex-align-center">
    <Button
      theme="primary"
      @click="close"
    >关闭</Button>
  </PageContent>
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
