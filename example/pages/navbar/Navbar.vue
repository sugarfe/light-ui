<template>
  <l-page-content class="example-button-page">
    <l-navbar slot="header">Navbar</l-navbar>
    <example-group contentClass="group-content">
      basic
      <template v-slot:content>
        <l-navbar class="navbar-theme-1">123</l-navbar>
      </template>
    </example-group>
  </l-page-content>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      value: ''
    }
  },
  created() {},
  methods: {}
}
</script>
<style lang="scss">
.navbar-theme-1 {
  background: #ffb403;
  .icon-arrow-back {
    color: #fff;
  }
  .l-navbar-title {
    color: #fff;
  }
}
</style>
