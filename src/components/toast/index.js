import ToastView from './toast.vue'

class Toast {
	static duration = 1000
	static text = ''
	constructor(option = {}) {
		this.open(option)
	}
	open({ duration, text, onComplete }) {
		this.popup = new this.$vue.prototype.$Popup(ToastView, {
			position: 'center',
			text: text || Toast.text,
			isMask: false,
			onComplete: () => {
				typeof onComplete === 'function' && onComplete()
				this.close()
			},
			duration: duration || Toast.duration
		})
	}
	close() {
		this.popup.close()
	}
}

export default {
	name: 'Toast',
	component: Toast,
	install(Vue, option = {}) {
		Toast.prototype.$vue = Vue
		Toast.prototype.$option = option
		option.duration && (Toast.duration = option.duration)
		typeof option.text === 'string' &&
			!!option.text &&
			(Toast.text = option.text)
	}
}
