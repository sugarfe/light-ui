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
      class="l-input flex-1"
      v-model="currentValue"
      v-if="!textarea"
    >
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
        class="l-textarea"
      ></textarea>
      <pre class="l-textarea-block">%{{currentValue}}</pre>
    </div>
    <div class="l-input-tool flex-box flex-align-center">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "input",
  props: {
    value: {
      type: String,
      default() {
        return undefined;
      }
    },
    placeholder: {
      type: String,
      default() {
        return "";
      }
    },
    type: {
      type: String,
      default() {
        return "text";
      }
    },
    disabled: {
      type: Boolean,
      default() {
        return false;
      }
    },
    readonly: {
      type: Boolean,
      default() {
        return false;
      }
    },
    textarea: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  computed: {
    dynamicClass() {
      return {
        "l-input-warp-textarea": this.textarea
      };
    }
  },
  data() {
    return {
      currentValue: ""
    };
  },
  mounted() { },
  methods: {
    onFocusHandle(e) {
      this.$emit("onFocus", e);
    }
  },
  watch: {
    value(value) {
      this.currentValue = value;
    },
    currentValue(value) {
      this.$emit("input", value);
    }
  }
};
</script>
<style lang='scss'>
@import "./input.scss";
</style>
