import DialogView from './Dialog.vue'

class Dialog {
	static isMaskClose = false
	static confirm = false
	static cancelText = '取消'
	static okText = '确认'
	static delayClose = false
	constructor(option = {}) {
		this.open(option)
	}
	open({
		title,
		text,
		cancelText = Dialog.cancelText,
		okText = Dialog.okText,
		isMaskClose = Dialog.isMaskClose,
		confirm = Dialog.confirm,
		delayClose = Dialog.delayClose,
		onOk,
		onCancel,
		onHandle,
		render
	}) {
		this.popup = new this.$vue.prototype.$Popup(DialogView, {
			position: 'center',
			title,
			text,
			isMaskClose,
			confirm,
			cancelText,
			okText,
			render,
			onHandle: res => {
				let done = delayClose ? this.close.bind(this) : undefined
				res && onOk && onOk(done)
				!res && onCancel && onCancel(done)
				onHandle && onHandle(done)
				!done && this.close()
			}
		})
	}
	close() {
		this.popup.close()
	}
}

export default {
	name: 'Dialog',
	component: Dialog,
	install(Vue, option) {
		Dialog.prototype.$vue = Vue
		Dialog.prototype.$option = option
	}
}
