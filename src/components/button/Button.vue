<template>
  <button
    class="l-button"
    :disabled="disabled"
    :class="dynamicClass"
    @click="clickHandle"
  >
    <span>
      <slot></slot>
    </span>
    <Loading
      class="l-button-loading"
      size="20px"
      v-if="state === -1"
    ></Loading>
  </button>
</template>
<script>
import { mixinProps } from '@/components/mixin.js'
import Loading from "@/components/loading/Loading.vue"
export default {
  name: 'Button',
  mixins: [mixinProps],
  components: {
    Loading
  },
  data() {
    return {
      state: 0
    }
  },
  props: {
    block: {
      type: Boolean,
      default() {
        return false
      }
    },
    light: {
      type: Boolean,
      default() {
        return false
      }
    },
    async: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  computed: {
    dynamicClass() {
      let styleClassArray = [
        `l-button-size-${this.size}`,
        `l-button-${this.light ? 'light-' : ''}theme-${this.theme}`
      ]
      this.block && styleClassArray.push('l-button-block')
      this.light && styleClassArray.push('l-button-light')
      this.state === -1 && styleClassArray.push('l-button-async')
      return styleClassArray.join(' ')
    }
  },
  methods: {
    clickHandle() {
      !!~this.state && this.$emit('click', this.async ? this.asyncCallback() : undefined)
    },
    asyncCallback() {
      this.state = -1;
      return () => {
        this.state = 0;
      }
    },
    styleChangeByType(value) {
      let mark = `l-button-${value}`
      value
        ? styleClassArray.push(mark)
        : (styleClassArray = styleClassArray.filter(item => {
          return item !== mark
        }))
    }
  },
  watch: {
    block(value) {
      this.styleChangeByType('block')
    },
    light(value) {
      this.styleChangeByType('light')
    }
  }
}
</script>
<style lang="scss">
@import './button.scss';
</style>
