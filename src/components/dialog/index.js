import DialogView from './Dialog.vue';

class Dialog {
	static isMaskClose = false;
	static confirm = false;
	static cancelText = '取消';
	static okText = '确认';
	constructor(option = {}) {
		this.open(option);
	}
	open({
		title,
		text,
		cancelText = Dialog.cancelText,
		okText = Dialog.okText,
		isMaskClose = Dialog.isMaskClose,
		confirm = Dialog.confirm,
	}) {
		this.popup = new this.$vue.prototype.$RunPopup(DialogView, {
			position: 'center',
			title,
			text,
			isMaskClose,
			confirm,
			cancelText,
			okText,
			onMaskClose() {},
		});
	}
}

export default {
	name: 'Dialog',
	component: Dialog,
	install(Vue, option) {
		Dialog.prototype.$vue = Vue;
		Dialog.prototype.$option = option;
	},
};
