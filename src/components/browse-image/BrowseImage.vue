<template>
  <Grid
    ref="grid"
    :col="4"
    :square="true"
    spacing="10px"
    vertical="10px"
    class="l-browse-image"
  >
    <slot
      name="original"
      v-for="(item,i) in originalItmes"
      :item="{...item,i}"
    >
      <GridItem
        :key="i"
        class="l-browse-item"
      >
        <img
          :src="item"
          v-if="item"
        >
        <div
          class="l-browse-item-remove flex-box-center"
          @click="removeItemByOriginal(index)"
        >
          <i class="icon-close"></i>
        </div>
      </GridItem>
    </slot>
    <slot
      v-for="(item,index) in items"
      :item="{...item,index}"
    >
      <GridItem
        :key="index"
        class="l-browse-item"
      >
        <img
          :id="item.id"
          :src="item.base64"
          v-if="item.base64"
        >
        <div
          class="l-browse-item-remove flex-box-center"
          @click="removeItem(index)"
        >
          <i class="icon-close"></i>
        </div>
      </GridItem>
    </slot>
    <GridItem
      class="l-browse-item l-browse-item-push flex-box-center"
      v-if="maxDisplay"
    >
      <i class="icon-add"></i>
      <input
        type="file"
        :multiple="multiple"
        accept="image/*"
        @change="change"
      >
    </GridItem>
  </grid>
</template>
<script>
let reader
import Grid from '@/components/grid/Grid.vue'
import GridItem from '@/components/grid-item/GridItem.vue'
export default {
  name: 'BrowseImage',
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    multiple: {
      type: Boolean,
      default() {
        return false
      }
    },
    value: {
      type: Array,
      default() {
        return []
      }
    },
    max: {
      type: Number,
      default() {
        return -1
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
  components: {
    Grid,
    GridItem
  },
  computed: {
    maxDisplay() {
      return (this.max > 0 && this.max > this.items.length) || this.max <= 0
    }
  },
  data() {
    return {
      items: [],
      originalItmes: [],
      deleteOriginalList: []
    }
  },
  created() {
    console.log(this.compressed, this.quality)
    this.init()
  },
  methods: {
    init() {
      reader = new FileReader()
      reader.onload = e => {
        debugger
        console.log(this.compressed, this.quality, this)
        this.$nextTick(() => {
          this.fileHandle(e)
        })
      }
    },
    fileHandle(e) {
      debugger
      let item = this.items[this.items.length - 1]
      console.log(this.compressed, this.quality)
      if (!this.compressed) {
        item.base64 = e.target.result
        return
      }
      let img = document.createElement('img')
      img.src = e.target.result
      img.onload = e => {
        let { width, height } = this.getCompressedOption(e.target)
        let canvas = document.createElement('canvas')
        let ctx = canvas.getContext('2d')
        canvas.width = width
        canvas.height = height
        ctx.clearRect(0, 0, width, height)
        ctx.drawImage(img, 0, 0, width, height)
        this.items[this.items.length - 1].base64 = canvas.toDataURL(
          'image/jpeg',
          this.quality
        )
        this.emitInput()
      }
    },
    //获取压缩参数
    getCompressedOption({ width: originWidth, height: originHeight }) {
      if (originWidth < this.size.width && originHeight < this.size.height) {
        return { width: originWidth, height: originHeight }
      }
      let width, height
      if (originWidth / originHeight > this.size.width / this.size.height) {
        // 更宽，按照宽度限定尺寸
        width = this.size.width
        height = Math.round(this.size.width * (originHeight / originWidth))
      } else {
        height = this.size.height
        width = Math.round(this.size.height * (originWidth / originHeight))
      }
      return { width, height }
    },
    change(e) {
      debugger
      console.log(this.compressed, this.quality)
      let { target } = e
      let [files] = target.files
      this.items.push({
        id: `img-${new Date().getTime()}`,
        name: files.name,
        size: files.size,
        base64: undefined,
        base64: undefined,
        suffix: files.name.split('.').pop()
      })
      files && reader.readAsDataURL(files)
      target.value = ''
    },
    getOriginalValue() {
      return [...this.originalItmes]
    },
    getOriginalDeleteList() {
      return [...this.deleteOriginalList]
    },
    removeItem(index) {
      this.items.splice(index, 1)
      this.emitInput()
    },
    removeItemByOriginal(i) {
      this.deleteOriginalList.push({ ...this.originalItmes[i] })
      this.originalItmes.splice(i, 1)
    },
    emitInput() {
      this.$emit(
        'input',
        this.items.map(item => {
          return {
            ...item,
            base64: item.base64.split(',')[1]
          }
        })
      )
    }
  },
  watch: {
    items() {
      this.$nextTick(() => {
        this.$refs['grid'].refresh()
      })
    },
    data: {
      immediate: true,
      handler() {
        this.originalItmes = [...this.data]
      }
    }
  },
  directives: {}
}
</script>
<style lang="scss">
@import './browse.image';
</style>
