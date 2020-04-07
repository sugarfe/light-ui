<template>
  <div class="l-browse-image">
    <input
      ref="input"
      type="file"
      accept="image/*"
      :multiple="multiple"
      @change="change"
    />
    <slot></slot>
  </div>
</template>
<script>
import {
  getCompressedOption,
  getPhotoOrientation,
  rotateImage
} from './browse.service.js'
export default {
  name: 'BrowseImage',
  props: {
    multiple: {
      type: Boolean,
      default() {
        return false
      }
    },
    compressed: {
      type: Boolean,
      default() {
        return false
      }
    },
    size: {
      type: Object,
      default() {
        return {
          width: 300,
          height: 300
        }
      }
    },
    quality: {
      type: Number,
      default() {
        return 1
      }
    }
  },
  data() {
    return {
      result: {},
      reader: undefined,
      tempList: [],
      file: undefined
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {},
    async fileHandle(objectURL) {
      let img = document.createElement('img')
      img.src = objectURL
      return new Promise(resolve => {
        img.onload = e => {
          let { width: originWidth, height: originHeight } = e.target
          if (!this.compressed) {
            resolve({
              img,
              width: originWidth,
              height: originHeight
            })
            return
          }
          let { width, height } = getCompressedOption({
            originWidth,
            originHeight,
            ...this.size
          })
          resolve({
            img,
            width,
            height
          })
        }
      })
    },
    change(e) {
      let { target } = e
      this.tempList = [...target.files]
      target.value = ''
      this.browseCompleted()
    },
    browseCompleted() {
      let [file] = this.tempList.splice(0, 1)
      this.file = file
      this.result = {
        id: `img-${new Date().getTime()}`,
        name: file.name,
        suffix: file.name.split('.').pop()
      }
      let objectURL = URL.createObjectURL(file)
      this.fileHandle(objectURL).then(({ img, width, height }) => {
        URL.revokeObjectURL(objectURL)
        getPhotoOrientation(this.file).then(orientation => {
          rotateImage(img, orientation, width, height, this.quality, Blob => {
            let tempUrl = URL.createObjectURL(Blob)
            setTimeout(() => {
              URL.revokeObjectURL(tempUrl)
            })
            this.result.tempUrl = tempUrl
            this.result.size = Blob.size
            this.result.file = Blob
            console.log(Blob)
            this.emitInput()
            if (this.tempList.length > 0) {
              this.browseCompleted()
            }
          })
        })
      })
    },
    emitInput() {
      this.$emit('onSuccess', { ...this.result })
      this.result = {}
    },
    browse() {
      this.$refs['input'].click()
    }
  }
}
</script>
<style lang="scss">
@import './browse.image';
</style>
