<template>
  <div class="l-picker flex-box-column">
    <div class="l-picker-top flex-box flex-align-center">
      <span @click="cancel">取消</span>
      <span class="l-picker-title flex-1"></span>
      <span @click="ok">确定</span>
    </div>
    <div
      class="l-picker-contant flex-1 flex-box"
      ref="l-picker-scroll-wrapper"
      v-show="data.length > 0"
    >
      <div
        v-for="(item, index) in data"
        :key="index"
      >
        <ul class="l-picker-wheel-scroll">
          <li
            v-for="(o, i) in item"
            class="wheel-item"
            :key="i"
            v-text="o[dataText]"
          ></li>
        </ul>
      </div>
      <span class="l-picker-mask l-picker-mask-top"></span>
      <span class="l-picker-mask l-picker-mask-bottom"></span>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
let option
export default {
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    dataText: {
      type: String,
      default() {
        return 'text'
      }
    },
    dataValue: {
      type: [String],
      default() {
        return 'value'
      }
    },
    value: {
      type: [String, Array],
      default() {
        return undefined
      }
    }
  },
  data() {
    return {}
  },
  created() {
    option = {
      wheels: [],
      values: undefined,
      selectedIndex: []
    }
  },
  mounted() {
    setTimeout(() => {
      this.data.length && this.init()
    })
  },
  destroyed() {
    option.wheels.forEach(scrollInstance => {
      scrollInstance.destroy()
    })
  },
  methods: {
    init() {
      this.initSelectedIndex()
      this.data.forEach((item, index) => {
        option.wheels[index] = new BScroll(
          this.$refs['l-picker-scroll-wrapper'].children[index],
          {
            wheel: {
              selectedIndex: option.selectedIndex[index]
            }
          }
        )
      })
      this.$emit('onFinish', option.wheels)
    },
    initSelectedIndex() {
      let values = []
      if (typeof this.value === 'string') {
        values = [this.value]
      } else if (typeof this.value === 'object') {
        values = [...this.value]
      }
      this.data.forEach((item, index) => {
        let i = item.findIndex(o => {
          return o[this.dataValue] === values[index]
        })
        option.selectedIndex[index] = ~i ? i : 0
      })
    },
    ok() {
      option.wheels.forEach((scrollInstance, i) => {
        option.selectedIndex[i] = scrollInstance.getSelectedIndex()
      })
      let values = option.selectedIndex.map((selectedIndex, i) => {
        return this.data[i][selectedIndex][this.dataValue]
      })
      let text = option.selectedIndex.map((selectedIndex, i) => {
        return this.data[i][selectedIndex][this.dataText]
      })
      this.$emit('onOk', {
        values,
        text,
        selectedIndex: option.selectedIndex
      })
    },
    cancel() {
      this.$emit('popup-close')
    },
    getWheelsInstance() {
      return option.wheels
    }
  }
}
</script>
<style lang="scss">
@import './picker.scss';
</style>
