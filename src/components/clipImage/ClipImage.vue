<template>
  <div class="l-clip-image flex-box-column">
    <div
      class="l-clip-contant flex-1 flex-box-center"
      ref="clip-contant"
    >
      <img
        ref="img"
        :src="url"
        v-if="url"
        :style="dynamicImgStyle"
        @load="onImgLoad"
      >
      <canvas
        ref="canvas"
        class="clip-canvas"
      ></canvas>
    </div>
    <div class="l-clip-tool flex-box flex-align-center flex-justify-space-between">
      <span
        class="l-clip-tool-cancel"
        @click="cancel"
      >取消</span>
      <span
        class="l-clip-tool-ok"
        @click="clipHandle"
      >确定</span>
    </div>
  </div>
</template>
<script>
import { transform, requestAnimationFrame } from './clipHelp.js'
//展示容器的Transform实例
let contantTransform,
  //遮罩区域的canvas实例Context
  ctx,
  //遮罩区域的canvas
  clipCanvas,
  //裁剪区域的canvas实例Context
  clipCtx
//展示的尺寸大小
let clipContantSize = [0, 0]
//阈值
let thresholds = {
  imgWidth: 0,
  imgHeight: 0,
  maxTop: 0,
  maxBottom: 0,
  maxLeft: 0,
  maxRight: 0
}
export default {
  props: {
    url: {
      type: String,
      default() {
        return undefined
      }
    },
    size: {
      type: Array,
      default() {
        return [150, 150]
      }
    }
  },
  computed: {
    dynamicImgStyle() {
      return {
        transform: `translate(${this.transformX}px,${this.transformY}px)`,
        '-webkit-transform': `translate(${this.transformX}px,${this.transformY}px)`
      }
    }
  },
  data() {
    return {
      transformX: 0,
      transformY: 0
    }
  },
  mounted() {
    this.init()
  },
  destroyed() {
    contantTransform.destroy()
  },
  methods: {
    init() {
      ctx = this.$refs['canvas'].getContext('2d')
      ctx.save()
      clipCanvas = document.createElement('canvas')
      clipCtx = clipCanvas.getContext('2d')
      this.onClipContantTransform()
    },
    //监听展示区的触摸事件
    onClipContantTransform() {
      contantTransform = new transform({
        el: this.$refs['clip-contant'],
        maxLeft: thresholds.maxLeft,
        minRight: -thresholds.maxLeft,
        onTransform: ([x, y]) => {
          requestAnimationFrame(() => {
            x > thresholds.maxLeft && (x = thresholds.maxLeft)
            x < -thresholds.maxLeft && (x = -thresholds.maxLeft)
            this.transformX = x
            this.transformY = y
          })
        }
      })
    },
    cancel() {
      this.$emit('popup-close')
    },
    onImgLoad(e) {
      let target = e.target
      let ClipContant = this.$refs['clip-contant']
      let canvas = this.$refs['canvas']
      if (target.offsetWidth > ClipContant.offsetWidth) {
        target.style.width = `${ClipContant.offsetWidth}px`
      }
      this.$nextTick(() => {
        clipContantSize = [ClipContant.offsetWidth, ClipContant.offsetHeight]
        canvas.width = clipContantSize[0]
        canvas.height = clipContantSize[1]
        this.transformClipRect()
      })
    },
    transformClipRect() {
      let [w, h] = clipContantSize
      let [rectW, rectH] = this.size
      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = 'black'
      ctx.globalAlpha = 0.7
      ctx.fillRect(0, 0, w, h)
      ctx.restore()
      ctx.save()
      let left = parseFloat(((w - rectW) / 2).toFixed(2))
      let top = parseFloat(((h - rectH) / 2).toFixed(2))
      ctx.clearRect(left, top, rectW, rectH)
      let img = this.$refs['img']
      thresholds.imgWidth = img.offsetWidth
      thresholds.imgHeight = img.offsetHeight
      thresholds.maxLeft = left
      thresholds.maxTop = parseFloat(
        ((thresholds.imgHeight - rectH) / 2).toFixed(2)
      )
    },
    clipHandle() {
      let canvas = this.$refs['canvas']
      let { width, height } = canvas
      clipCanvas.width = width
      clipCanvas.height = height
      clipCtx.drawImage(
        this.$refs['img'],
        0,
        0,
        width,
        height,
        0,
        0,
        width,
        height
      )
      let result = canvas.toDataURL()
    }
  }
}
</script>
<style lang='scss'>
@import './clip.image.scss';
</style>
