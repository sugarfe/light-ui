<template>
  <PageContent
    class="popup-model "
    :style="{'background':this.generateColor()}"
    contentClass=" flex-box flex-align-center flex-justify-center"
  >
    <Button
      @click="close"
      light
    >关闭</Button>
    <Button
      theme="success"
      @click="openHandle"
      style="margin-left:10px"
      v-if="open"
    >打开</Button>
    <Button
      theme="alert"
      @click="closeAll"
      style="margin-left:10px"
      v-if="open"
    >关闭所有</Button>
  </PageContent>
</template>
<script>
import PopupModel from './PopupModel'
export default {
  props: {
    open: Boolean
  },
  created() {},
  methods: {
    close() {
      this.$emit('popup-close')
    },
    closeAll() {
      this.$Popup.clear()
    },
    generateColor() {
      return (
        '#' +
        ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6)
      )
    },
    openHandle() {
      new this.$Popup(PopupModel, {
        position: 'left',
        size: '100%',
        isMask: false,
        open: true
      })
    }
  },
  beforeRouteLeave(to, from, next) {}
}
</script>
<style lang="scss">
.popup-model {
  background: #383838;
  min-width: 200px;
  min-height: 200px;
  border-radius: 3px;
}
</style>
