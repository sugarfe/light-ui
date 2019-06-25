<template>
  <l-page-content class="example-button-page">
    <l-navbar slot="header">Navbar</l-navbar>
    <example-group contentClass="group-content">
      theme
      <template v-slot:content>
        <l-grid
          :col="1"
          :square="false"
          vertical="2px"
        >
          <l-grid-item>
            <l-navbar>default</l-navbar>
          </l-grid-item>
          <l-grid-item>
            <l-navbar theme="primary">primary</l-navbar>
          </l-grid-item>
          <l-grid-item>
            <l-navbar theme="success">success</l-navbar>
          </l-grid-item>
          <l-grid-item>
            <l-navbar theme="warning">warning</l-navbar>
          </l-grid-item>
          <l-grid-item>
            <l-navbar theme="alert">alert</l-navbar>
          </l-grid-item>
        </l-grid>
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
