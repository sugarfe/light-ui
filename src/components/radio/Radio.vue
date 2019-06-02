<template>
  <div
    class="run-radio flex-box flex-align-center"
    :class="dynamicClass"
  >
    <input
      type="radio"
      :value="value"
      :disabled="disabled"
      :name="name"
      @change="change"
    >
    <div class="run-radio-mark flex-box-center"></div>
    <div class="run-radio-label">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { mixinProps } from "@runSrc/components/mixin.js";
export default {
  name: "radio",
  mixins: [mixinProps],
  props: {
    value: {
      type: [String, Number],
      default() {
        return undefined;
      }
    }
  },
  data() {
    return {
      name: ""
    };
  },
  computed: {
    checked() {
      return !!this.value && this.$parent.value === this.value;
    },
    dynamicClass() {
      return {
        "run-radio-checked": this.checked,
        "run-radio-disabled": this.disabled
      };
    }
  },
  created: function () {
    this.init();
  },
  methods: {
    init() {
      try {
        this.name = this.$parent.getRadioName();
      } catch (error) {
        console.error(error);
      }
    },
    change() {
      try {
        this.$parent.change(this.value);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
<style lang="scss">
@import "./radio.scss";
</style>