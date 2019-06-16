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
		isMaskClose = ActionSheet.isMaskClose,
		itemBoxClass,
		scopedSlots,
		onChange
	} = {}) {
		this.popup = new this.$vue.prototype.$Popup(ActionSheetView, {
			position: 'bottom',
			size: 'auto',
			isMaskClose,
			data,
			title,
			dataText,
			dataValue,
			cancelTxt,
			itemBoxClass,
			scopedSlots,
			onSelect: value => {
				this.close()
				typeof onChange === 'function' && onChange(value)
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
