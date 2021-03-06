

import LoadingView from "./loading.vue"

class Loading{
  constructor(option={}){
    //全局参数
    if (this.$option) {
      let o = this.$option;
      for (var key in o) {
        if (option[key] === undefined) {
          option[key] = o[key];
        }
      }
    }
    option.size=option.size || 'auto'
    this.RunLoading = new this.$vue.prototype.$RunPopup(
      LoadingView,
      {
      position: 'center',//动画方式
      isMask: option.isMask === undefined ? true : option.isMask,
      isMaskClose: false,
      ...option,
      onCancel: (val) => {
        option.cancel && option.cancel(val)
      },
    })
  }
  close(){
    this.RunLoading && this.RunLoading.close()
  }
}

export default {
  name: "Loading",
  component: Loading,
  install(Vue, option) {
    Loading.prototype.$vue = Vue;
    Loading.prototype.$option = option;
  }
}