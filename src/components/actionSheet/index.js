import ActionSheetView from './ActionSheet.vue'

class ActionSheet{
  constructor(option = {}) {
    //全局参数
    if (this.$option) {
      let o = this.$option;
      for (var key in o) {
        if (option[key] === undefined) {
          option[key] = o[key];
        }
      }
    }
    new this.$vue.prototype.$RunPopup(
      ActionSheetView,
      {
      position: 'bottom',//动画方式
      isMask: option.isMask === undefined ? true : option.isMask,
      isMaskClose: option.isMaskClose === undefined ? true : option.isMaskClose,
      ...option,
      onChange: (val) => {
        option.onChange && option.onChange(val)
      },
      onMaskClose(val) {
        option.handle && option.handle('handle')
      }
    })
  }
}

export default {
  name: "ActionSheet",
  component: ActionSheet,
  install(Vue, option) {
    ActionSheet.prototype.$vue = Vue;
    ActionSheet.prototype.$option = option;
  }
}