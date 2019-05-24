<template>
  <div>
    <router-link to="/">home</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log(this.$pagination);
  },
  methods: {}
};
</script>
<style lang='scss'>
@import "./index.scss";
</style>
