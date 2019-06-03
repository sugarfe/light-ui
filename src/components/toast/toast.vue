<template>
  <div
    class="l-toast"
    :class="className"
  >
    <div>
      {{message}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'toast',
  data() {
    return {}
  },
  props: {
    message: {
      type: String,
      default: () => {
        return ''
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
@import url("./toast.scss");
</style>
