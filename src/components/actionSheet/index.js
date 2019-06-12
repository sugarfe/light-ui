import ActionSheetView from './ActionSheet.vue'
class ActionSheet {
	static isMaskClose = true
	static dataText = 'text'
	static dataValue = 'value'
	static cancelTxt = '取消'
	constructor(option = {}) {
		this.open(option)
	}
	open({
		data = [],
		title,
		cancelTxt = ActionSheet.cancelTxt,
		dataText = ActionSheet.dataText,
		dataValue = ActionSheet.dataValue,
		isMaskClose = ActionSheet.isMaskClose
	} = {}) {
		this.popup = new this.$vue.prototype.$RunPopup(ActionSheetView, {
			position: 'bottom',
			size: 'auto',
			isMaskClose,
			data,
			title,
			dataText,
			dataValue,
			cancelTxt,
			render: h => {
				return h('div', {}, 'ssss')
			}
		})
	}
	close() {
		this.popup.close()
	}
}

export default {
	name: 'ActionSheet',
	component: ActionSheet,
	install(Vue, option) {
		ActionSheet.prototype.$vue = Vue
		ActionSheet.prototype.$option = option
	}
}
