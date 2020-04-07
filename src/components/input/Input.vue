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
      :maxlength="maxLength"
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
        :type="type"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="placeholder"
        v-model="currentValue"
        @focus="onFocusHandle"
        @blur="onBlurHandle"
        :maxlength="maxLength"
        class="l-textarea"
      ></textarea>
      <pre class="l-textarea-block">{{ currentValue }}
</pre>
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
    },
    noBorder: {
      type: Boolean,
      default: false
    },
    maxLength: {
      type: Number,
      default: undefined
    }
  },
  computed: {
    dynamicClass() {
      return {
        'l-input-warp-textarea': this.textarea,
        'l-input-warp-border': !this.noBorder
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
