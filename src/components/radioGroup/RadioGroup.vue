<template>
  <div
    class="run-radio-group flex-box"
    :class="dynamicClass"
  >
    <slot></slot>
  </div>
</template>
<script>
const radioName = Date.now();
export default {
  name: "radio-group",
  props: {
    value: {
      type: [String, Number],
      default() {
        return undefined;
      }
    },
    horizontal: {
      type: Boolean,
      default() {
        return false;
      }
    },
    right: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  computed: {
    radioList() {
      return this.$children || [];
    },
    dynamicClass() {
      return {
        "flex-row": this.horizontal,
        "flex-column": !this.horizontal,
        "run-radio-group-small": this.size === "small",
        "run-radio-group-right": this.right,
        "run-radio-group-row-right": this.horizontal && this.right
      };
    }
  },
  methods: {
    change(value) {
      this.$emit("input", value);
      this.$emit("onChange", value);
    },
    getRadioName() {
      return radioName;
    }
  }
};
</script>
