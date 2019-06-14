<template>
  <div class="action-sheet">
    <header
      class="action-sheet-item"
      v-if="title"
    >{{ title }}</header>
    <section
      ref="sheet-item"
      @click="select"
      :class="itemBoxClass"
    >
      <slot
        v-for="(item) in items"
        :item="item"
      >
        <div>{{item[dataText]}}</div>
      </slot>
    </section>
    <footer
      class="action-sheet-item"
      @click="$emit('popup-close')"
    >
      {{ cancelTxt }}
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: []
    }
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    title: {
      type: String,
      default: () => {
        return ''
      }
    },
    cancelTxt: String,
    dataText: String,
    dataValue: String,
    itemBoxClass: String
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.items = this.data.map(item => {
        let obj = {}
        if (typeof item !== 'object') {
          obj[this.dataText] = item
          obj[this.dataValue] = item
        } else {
          obj = { ...item }
        }
        return obj
      })
    },
    cancel() {
      this.$emit('onCancel')
    },
    select(e) {
      let currentItem = e.target
      let i = [...this.$refs['sheet-item'].children].findIndex(item => {
        return item === currentItem
      })
      this.$emit('onSelect', this.items[i])
    }
  }
}
</script>

<style lang="scss">
@import './actionSheet.scss';
</style>
