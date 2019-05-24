
import DialogView from "./dialog.vue"

class Dialog{
  constructor(option={}){
    if (option.render) {
      this.$vue.component('DialogContent', {
        render: option.render
      })
    }
    //全局参数
    if (this.$option) {
      let o = this.$option;
      for (var key in o) {
        if (option[key] === undefined) {
          option[key] = o[key];
        }
      }
    }
    option.size=option.size || '200px'
    let RunDialog = new this.$vue.prototype.$RunPopup(
      DialogView,
      {
      position: 'center',//动画方式
      isMask: option.isMask === undefined ? true : option.isMask,
      isMaskClose: option.isMaskClose === undefined ? true : option.isMaskClose,
      ...option,
      onCancel: (val) => {
        option.cancel && option.cancel(val)
      },
      onOk: (val) => {
        option.ok && option.ok(val)
      },
      onHandle: (val) => {
        option.handle && option.handle(val)
      },
      onMaskClose(val) {
        option.handle && option.handle('handle')
      }
    })
    if (option.duration) {
      setTimeout(() => {
        RunDialog.close()
        option.handle && option.handle('handle')
      }, option.duration)
    }
  }
}

export default {
  name: "Dialog",
  component: Dialog,
  install(Vue, option) {
    Dialog.prototype.$vue = Vue;
    Dialog.prototype.$option = option;
  }
}