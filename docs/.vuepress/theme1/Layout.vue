<template>
  <div>
    <router-link to="/api">home</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  created() {
    console.log(this.$pagination,this.$site);
  },
  methods: {}
}
</script>
<style lang='scss'>
@import './index.scss';
</style>
