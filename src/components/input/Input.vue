<template>
  <div class="run-input-warp run-display-flex" :class="dynamicClass">
    <input
      ref="$input"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      @focus="onFocusHandle"
      class="run-input run-flex-1"
      v-model="currentValue"
      v-if="!textarea"
    >
    <div class="run-input-textarea-wrapper run-flex-1" v-else>
      <textarea
        ref="$textarea"
        spellcheck="false"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="placeholder"
        v-model="currentValue"
        class="run-textarea"
      ></textarea>
      <pre class="run-textarea-block">%{{currentValue}}</pre>
    </div>
    <div class="run-input-tool run-display-flex run-align-center">
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
        "run-input-warp-textarea": this.textarea
      };
    }
  },
  data() {
    return {
      currentValue: ""
    };
  },
  mounted() {},
  methods: {
    onFocusHandle(e) {
      debugger;
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
