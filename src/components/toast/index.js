import ToastView from "./toast.vue"


class Toast {
  constructor(option){
    //全局参数
    if (this.$option) {
      let o = this.$option;
      for (var key in o) {
        if (option[key] === undefined) {
          option[key] = o[key];
        }
      }
    }
    //处理参数
    option.duration = option.duration ? option.duration : 2000;
    option.isMask = option.isMask === undefined ? true : option.isMask;
    option.isMaskClose = option.isMaskClose === undefined ? false : option.isMaskClose;

    option.cancel = option.cancel ? option.cancel : () => { };

    console.log(option)
    let RunPopup = new this.$vue.prototype.$RunPopup(
      ToastView,
      {
      position: 'opacity',//动画方式
      size:'200px',
      isMask: option.isMask,
      isMaskClose: option.isMaskClose,
      ...option,
      onMaskClose() {
        option.cancel && option.cancel()
      }
    })
    setTimeout(() => {
      RunPopup.close()
      option.cancel && option.cancel()
    }, option.duration)
  }
}

export default {
  name: "Toast",
  component: Toast,
  install(Vue, option) {
    Toast.prototype.$vue = Vue;
    Toast.prototype.$option = option
  }
}
