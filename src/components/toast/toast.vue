<template>
  <div
    class="l-toast"
    :class="className"
  >
    <div v-html="text"></div>
  </div>
</template>
<script>
export default {
  name: 'toast',
  data() {
    return {}
  },
  props: {
    text: {
      type: String,
      default: () => {
        return undefined
      }
    },
    className: {
      type: String,
      default: () => {
        return 'initClass'
      }
    },
  },
  methods: {

  }
}
</script>
<style lang="scss">
@import "./toast.scss";
</style>
