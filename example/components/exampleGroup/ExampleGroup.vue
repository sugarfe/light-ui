<template>
  <div class="example-group">
    <div class="example-group-title flex-box flex-align-center">
      <slot></slot>
    </div>
    <div
      class="example-group-content"
      :class="contentClass"
    >
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "example-group",
  props: {
    contentClass: {
      type: [String, Object],
      default() {
        return "";
      }
    }
  }
};
</script>
<style lang='scss'>
.example-group {
  .example-group-title {
    height: 38px;
    background-color: #f3f3f3;
    font-size: 14px;
    font-weight: 300;
    padding: 0 5px;
  }
  .example-group-content {
    padding: 5px;
  }
}
</style>
