<template>
  <div class="run-navbar run-display-flex run-align-center">
    <div>
      <slot name="left"></slot>
    </div>
    <div class="run-flex-1">
      <span class="run-navbar-title">
        <slot></slot>
      </span>
    </div>
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "navbar",
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style lang='scss'>
@import "./navbar.scss";
</style>
