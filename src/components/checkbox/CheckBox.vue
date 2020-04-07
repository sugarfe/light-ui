<template>
  <div
    class="l-checkbox flex-box flex-align-center"
    :class="dynamicClass"
  >
    <input
      ref="input"
      type="checkbox"
      :value="value"
      :disabled="disabled"
      @change="change"
    />
    <div class="l-checkbox-mark flex-box-center"></div>
    <div class="l-checkbox-label">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { mixinProps } from '@/components/mixin.js'
import { debuglog } from 'util'
export default {
  name: 'Checkbox',
  mixins: [mixinProps],
  props: {
    value: {
      type: [String, Number, Boolean],
      default() {
        return undefined
      }
    }
  },
  data() {
    return {
      isSingle: true,
      singleValue: undefined
    }
  },
  computed: {
    checked() {
      return !this.isSingle
        ? this.$parent.values.includes(this.value)
        : !!this.value
    },
    dynamicClass() {
      return {
        'l-checkbox-checked': this.checked,
        'l-checkbox-disabled': this.disabled
      }
    }
  },
  mounted() {
    this.isSingle =
      this.$parent && !~this.$parent.$el.className.indexOf('l-checkbox-group')
    if (this.isSingle) {
      this.singleValue = this.value
      this.$el.querySelector('input').checked = !!this.singleValue
    }
  },
  methods: {
    change(e) {
      console.log(this.checked)
      if (this.isSingle) {
        this.singleValue = !this.singleValue
        this.$emit('input', e.target.checked ? this.singleValue : undefined)
        return
      }
      try {
        this.$parent.change({
          value: this.value,
          checked: !this.checked
        })
      } catch (error) {
        console.error(error)
      }
    }
  },
  watch: {
    checked() {
      console.log(this.checked, this.$refs.input.checked)
    }
  }
}
</script>
<style lang="scss">
@import './checkbox.scss';
</style>
