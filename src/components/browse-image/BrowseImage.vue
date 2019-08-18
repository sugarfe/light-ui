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
    <GridItem class="l-browse-item l-browse-item-push flex-box-center">
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
    }
  },
  components: {
    Grid,
    GridItem
  },
  data() {
    return {
      items: [],
      originalItmes: [],
      deleteOriginalList: []
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      reader = new FileReader()
      reader.onload = e => {
        this.$nextTick(() => {
          this.items[this.items.length - 1].base64 = e.target.result
          this.emitInput()
        })
      }
    },
    change(e) {
      let { target } = e
      let [files] = target.files
      this.items.push({
        name: files.name,
        size: files.size,
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
