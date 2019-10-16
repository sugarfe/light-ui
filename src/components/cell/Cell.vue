<template>
  <div
    class="l-cell flex-box flex-align-center"
    @click="handle"
  >
    <label class="l-cell-label">
      <slot></slot>
    </label>
    <div class="flex-1 l-cell-value">
      <slot name="value"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Cell',
  props: {
    linkTo: {
      type: String,
      default() {
        return undefined
      }
    }
  },
  created() {},
  methods: {
    handle() {
      !this.linkTo ? this.$emit('click') : (location.href = this.linkTo)
    }
  }
}
</script>
<style lang='scss'>
@import './cell.scss';
</style>
