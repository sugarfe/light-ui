<template>
  <div class="run-navbar flex-box flex-align-center">
    <slot name="left">
      <div
        class="run-navbar-icon"
        @click="back"
      >
        <i class="icon-arrow-back"></i>
      </div>
    </slot>
    <div class="flex-1">
      <span class="run-navbar-title">
        <slot></slot>
      </span>
    </div>
    <slot name="right"></slot>
  </div>
</template>
<script>
import { debuglog } from 'util'
export default {
  name: 'navbar',
  props: {
    backHandle: {
      type: Function
    }
  },
  methods: {
    back() {
      typeof this.backHandle === 'function'
        ? this.backHandle()
        : this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss">
@import './navbar.scss';
</style>
