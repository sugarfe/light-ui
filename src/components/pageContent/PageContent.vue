<template>
  <div
    class="l-page"
    :class="dynamic.class"
  >
    <slot name="header"></slot>
    <div
      class="l-page-content flex-1 l-scroll-y"
      :class="contentClass"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PageContent',
  props: {
    flex: {
      type: Boolean,
      default() {
        return true
      }
    },
    fullHeight: {
      type: Boolean,
      default() {
        return true
      }
    },
    flexDirectionColumn: {
      type: Boolean,
      default() {
        return true
      }
    },
    contentClass: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      dynamic: {
        class: {
          'l-page-full-height': this.fullHeight,
          'flex-box': this.flex,
          'flex-column': this.flexDirectionColumn
        }
      }
    }
  },
  created() {},
  methods: {}
}
</script>
<style lang="scss">
@import './pageContent.scss';
</style>
