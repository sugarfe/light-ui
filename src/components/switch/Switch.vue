<template>
  <div class="l-switch-wrap">
    <input
      class="l-switch"
      type="checkbox"
      v-model="switchValue"
      :disabled="switchDisabled"
    />
    <div
      class="preventDefault"
      v-if="preventDefault"
      @click="_click"
    ></div>
  </div>
</template>

<script>
export default {
  name: "switch",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    preventDefault: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      switchValue: this.value,
      switchDisabled: this.disabled
    };
  },
  methods: {
    _click() {
      this.$emit('preventClick', this.switchValue)
    }
  },
  watch: {
    switchValue(newVal) {
      this.$emit("input", newVal);
    },
    value(value) {
      this.switchValue = value;
    },
    disabled(newVal) {
      this.switchDisabled = newVal;
    }
  }
};
</script>

<style lang="scss">
@import "./switch.scss";
</style>
