<template>
  <div class="run-checkbox run-display-flex run-align-center" :class="dynamicClass">
    <input type="checkbox" :value="value" :disabled="disabled" @change="change">
    <div class="run-checkbox-mark run-flex-box-center"></div>
    <div class="run-checkbox-label">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { mixinProps } from "@runSrc/components/mixin.js";
export default {
  name: "checkbox",
  mixins: [mixinProps],
  props: {
    value: {
      type: [String, Number],
      default() {
        return undefined;
      }
    }
  },
  computed: {
    checked() {
      return this.$parent.values.includes(this.value);
    },
    dynamicClass() {
      return {
        "run-checkbox-checked": this.checked,
        "run-checkbox-disabled": this.disabled
      };
    }
  },
  methods: {
    change(e) {
      try {
        this.$parent.change({
          value: this.value,
          checked: e.target.checked
        });
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
<style lang="scss">
@import "./checkbox.scss";
</style>