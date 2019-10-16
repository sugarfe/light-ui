<template>
  <div
    class="l-input-warp flex-box"
    :class="dynamicClass"
  >
    <input
      ref="$input"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      @focus="onFocusHandle"
      @blur="onBlurHandle"
      class="l-input flex-1"
      v-model="currentValue"
      v-if="!textarea"
    />
    <div
      class="l-input-textarea-wrapper flex-1"
      v-else
    >
      <textarea
        ref="$textarea"
        spellcheck="false"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="placeholder"
        v-model="currentValue"
        @focus="onFocusHandle"
        @blur="onBlurHandle"
        class="l-textarea"
      ></textarea>
      <pre class="l-textarea-block">%{{ currentValue }}</pre>
    </div>
    <div class="l-input-tool flex-box flex-align-center">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { mixinProps } from '@/components/mixin.js'
export default {
  name: 'Input',
  mixins: [mixinProps],
  props: {
    value: {
      type: String,
      default() {
        return undefined
      }
    },
    placeholder: {
      type: String,
      default() {
        return ''
      }
    },
    type: {
      type: String,
      default() {
        return 'text'
      }
    },
    readonly: {
      type: Boolean,
      default() {
        return false
      }
    },
    textarea: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  computed: {
    dynamicClass() {
      return {
        'l-input-warp-textarea': this.textarea
      }
    }
  },
  data() {
    return {
      currentValue: ''
    }
  },
  mounted() {},
  methods: {
    onFocusHandle(e) {
      this.$emit('onFocus', e)
    },
    onBlurHandle(e) {
      this.$emit('onBlur', e)
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(value) {
        this.currentValue = value
      }
    },
    currentValue(value) {
      this.$emit('input', value)
    }
  }
}
</script>
<style lang="scss">
@import './input.scss';
</style>
