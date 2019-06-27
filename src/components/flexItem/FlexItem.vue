<template>
  <div
    :class="dynamicClass"
    :style="dynamicStyle"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'flexItem',
  props: {
    order: {
      type: [Number, String],
      default() {
        return 0
      }
    },
    flex: {
      type: [Number, String],
      default() {
        return 0
      }
    }
  },
  computed: {
    dynamicClass() {
      return {}
    },
    dynamicStyle() {
      return {
        '-webkit-order': this.order,
        '-ms-flex-order': this.order,
        order: this.order,
        '-webkit-box-ordinal-group': this.order,
        '-webkit-box-flex': this.flex,
        '-webkit-flex': this.flex,
        '-moz-box-flex': this.flex,
        '-moz-flex': this.flex,
        '-ms-flex': this.flex,
        flex: this.flex
      }
    }
  },
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>
<style lang='scss'>
</style>
