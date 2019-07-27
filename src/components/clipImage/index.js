import PopupClipImagePage from './ClipImage.vue'

class ClipImage {
	constructor({ url } = {}) {
		this.popupClipPage(url)
	}
	popupClipPage(url) {
		this.popup = new this.$vue.prototype.$Popup(PopupClipImagePage, {
			position: 'bottom',
			isMask: false,
			size: '100%',
			url
		})
	}
}
export default {
	name: 'ClipImage',
	component: ClipImage,
	install(Vue, option = {}) {
		ClipImage.prototype.$vue = Vue
		ClipImage.prototype.$option = option
	}
}
