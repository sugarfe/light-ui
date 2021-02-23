import EXIF from 'exif-js'
function getCompressedOption({
	originWidth,
	originHeight,
	width: _width,
	height: _height
}) {
	if (originWidth < _width && originHeight < _height) {
		return { width: originWidth, height: originHeight }
	}
	let width, height
	if (originWidth / originHeight > _width / _height) {
		// 更宽，按照宽度限定尺寸
		width = _width
		height = Math.round(_width * (originHeight / originWidth))
	} else {
		height = _height
		width = Math.round(_height * (originWidth / originHeight))
	}
	return { width, height }
}

function getPhotoOrientation(file) {
	return new Promise(resolve => {
		EXIF.getData(file, function() {
			resolve(EXIF.getTag(this, 'Orientation'))
		})
	})
}

function rotateImage(
	image,
	type,
	orientation,
	width,
	height,
	quality = 1,
	callback
) {
	let canvas = document.createElement('canvas')
	let ctx = canvas.getContext('2d')
	switch (orientation) {
		case 6:
			canvas.height = width
			canvas.width = height
			ctx.rotate(Math.PI / 2)
			ctx.translate(0, -height)
			break
		//旋转180°
		case 3:
			canvas.height = height
			canvas.width = width
			ctx.rotate(Math.PI)
			ctx.translate(-width, -height)
			break
		//旋转270°
		case 8:
			canvas.height = width
			canvas.width = height
			ctx.rotate(-Math.PI / 2)
			ctx.translate(-height, 0)
			break
		default: {
			canvas.height = height
			canvas.width = width
		}
	}
	ctx.drawImage(image, 0, 0, width, height)
	if (typeof callback === 'function') {
		debugger
		canvas.toBlob(callback, type, quality)
	}
}

export { getCompressedOption, getPhotoOrientation, rotateImage }
