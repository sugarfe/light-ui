<template>
  <run-page-content class="popup-model flex-box flex-column flex-align-center">
    <run-navbar>Content</run-navbar>
    <template v-slot:content>
      <run-button
        theme="primary"
        @click="close"
      >关闭</run-button>
    </template>
  </run-page-content>
</template>
<script>
export default {
  props: {},
  created() { },
  methods: {
    close() {
      this.$emit("popup-close");
    }
  },
  beforeRouteLeave(to, from, next) { }
};
</script>
<style lang="scss">
.popup-model {
  background-color: #fff;
}
</style>