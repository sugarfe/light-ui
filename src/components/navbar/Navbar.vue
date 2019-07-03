<template>
  <div
    class="l-navbar flex-box-column flex-justify-end"
    :class="`l-navbar-theme-${this.theme}`"
  >
    <nav class="flex-box flex-align-center ">
      <slot name="left">
        <div
          class="l-navbar-icon"
          @click="back"
        >
          <i class="icon-arrow-back"></i>
        </div>
      </slot>
      <div class="flex-1">
        <span class="l-navbar-title">
          <slot></slot>
        </span>
      </div>
      <slot name="right"></slot>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
  props: {
    backHandle: {
      type: Function
    },
    theme: {
      type: String,
      default() {
        return 'default'
      }
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
