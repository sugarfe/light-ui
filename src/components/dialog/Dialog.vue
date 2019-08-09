<template>
  <div
    class="l-dialog"
    :class="{ 'l-dialog-confirm': confirm }"
  >
    <header
      class="l-dialog-header"
      v-if="title"
      v-html="title"
    ></header>
    <section>
      <slot>
        {{ text }}
      </slot>
    </section>
    <footer class="flex-box">
      <div
        class="l-dialog-button flex-1"
        @click="handle(false)"
        v-if="confirm"
      >
        {{ cancelText }}
      </div>
      <div
        class="l-dialog-button l-dialog-button-ok flex-1"
        @click="handle(true)"
      >
        {{ okText }}
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: {
    confirm: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    title: {
      type: String,
      default: () => {
        return ''
      }
    },
    cancelText: String,
    okText: String,
    text: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  methods: {
    handle(res) {
      this.$emit('onHandle', res)
    }
  }
}
</script>
<style lang="scss">
@import './dialog.scss';
</style>
