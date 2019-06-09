<template>
  <div
    class="l-dialog"
    :class="{'l-dialog-confirm':confirm}"
  >
    <header
      class="l-dialog-header"
      v-if="title"
    >
      {{title}}
    </header>
    <section>
      {{text}}
    </section>
    <footer class="flex-box">
      <div
        class="l-dialog-button flex-1"
        @click="cancel"
        v-if="confirm"
      >
        {{cancelText}}
      </div>
      <div
        class="l-dialog-button l-dialog-button-ok flex-1"
        @click="ok"
      >
        {{okText}}
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
        return false;
      }
    },
    title: {
      type: String,
      default: () => {
        return ''
      },
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
    ok() {
      this.$emit('onOk', 'ok')
      this.handle()
    },
    cancel() {
      this.$emit('onCancel', 'cancel')
      this.handle()
    },
    handle() {
      this.$emit('onHandle', 'handle')
      this.$emit('popup-close')
    }
  },

}
</script>
<style lang="scss">
@import './dialog.scss';
</style>

