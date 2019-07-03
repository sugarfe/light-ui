import ToastView from './toast.vue'

class Toast {
	constructor(option = {}) {
		this.open(option)
	}
	open({ time, text }) {
		this.popup = new this.$vue.prototype.$Popup(ToastView, {
			position: 'center',
			text,
			isMask: false,
			onMaskClose() {}
		})
		time > 0 &&
			setTimeout(() => {
				this.close()
			}, time)
	}
	close() {
		this.popup.close()
	}
}

export default {
	name: 'Toast',
	component: Toast,
	install(Vue, option) {
		Toast.prototype.$vue = Vue
		Toast.prototype.$option = option
	}
}
