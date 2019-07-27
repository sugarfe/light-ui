class transform {
	constructor({ el, onTransform, maxLeft = 0, minRight = 0 } = {}) {
		this.el = el
		this.maxLeft = maxLeft
		this.minRight = minRight
		this.on = {
			transform: onTransform
		}
		this.position = {
			//初始位置
			start: [0, 0],
			//移动的距离
			moveDistance: [0, 0],
			//上次停留的位置
			lastTime: [0, 0]
		}
		this.init()
	}
	init() {
		this.touchstart = this.touchstart.bind(this)
		this.touchmove = this.touchmove.bind(this)
		this.touchend = this.touchend.bind(this)
		this.el.addEventListener('touchstart', this.touchstart, false)
		this.el.addEventListener('touchmove', this.touchmove, false)
		this.el.addEventListener('touchend', this.touchend, false)
	}
	touchstart(e) {
		let [touche] = e.touches
		this.position.start = [touche.pageX, touche.pageY]
	}
	touchmove(e) {
		let [touche] = e.touches
		let [startX, startY] = this.position.start
		this.position.moveDistance = [touche.pageX - startX, touche.pageY - startY]

		this.onTransform()
	}
	touchend() {
		let [x1, y1] = this.position.moveDistance
		let [x2, y2] = this.position.lastTime
		let x = x1 + x2
		let y = y1 + y2
		this.maxLeft && x > this.maxLeft && (x = this.maxLeft)
		this.minRight && x < this.minRight && (x = this.minRight)
		this.position.lastTime = [x, y]
	}
	onTransform() {
		let { moveDistance, lastTime } = this.position
		let [x1, y1] = moveDistance
		let [x2, y2] = lastTime
		let x = x1 + x2
		let y = y1 + y2
		this.maxLeft && x > this.maxLeft && (x = this.maxLeft)
		this.minRight && x < this.minRight && (x = this.minRight)
		typeof this.on.transform === 'function' && this.on.transform([x, y])
	}
	destroy() {
		this.el.removeEventListener('touchstart', this.touchstart, false)
		this.el.removeEventListener('touchmove', this.touchmove, false)
		this.el.removeEventListener('touchend', this.touchend, false)
	}
}

const requestAnimationFrame = (() => {
	return (
		window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame
	)
})()
export { transform, requestAnimationFrame }
