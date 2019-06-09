import ToastView from "./toast.vue"


class Toast {
  static isMaskClose = false;
  static isMask = true;
  constructor(option = {}) {
    this.open(option);
  }
  open({ time, text, isMaskClose = Toast.isMaskClose, isMask = Toast.isMask }) {
    this.popup = new this.$vue.prototype.$RunPopup(
      ToastView,
      {
        position: 'center',
        text,
        isMaskClose,
        isMask,
        onMaskClose() {
        }
      })
    time > 0 && setTimeout(() => { this.close() }, time);
  }
  close() {
    this.popup.close();
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
