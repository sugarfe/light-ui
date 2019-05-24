<template>
  <div class="run-checkbox-group run-display-flex" :class="dynamicClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "checkbox-group",
  props: {
    value: {
      type: Array,
      default() {
        return [];
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
  data() {
    return {
      values: []
    };
  },
  computed: {
    dynamicClass() {
      return {
        "run-flex-direction-row": this.horizontal,
        "run-flex-direction-column": !this.horizontal,
        "run-checkbox-group-small": this.size === "small",
        "run-checkbox-group-right": this.right,
        "run-checkbox-group-row-right": this.horizontal && this.right
      };
    }
  },
  methods: {
    change({ value, checked }) {
      if (checked && !this.values.includes(value)) {
        this.values.push(value);
      } else if (!checked) {
        let i = this.values.findIndex(item => {
          return item === value;
        });
        !!~i && this.values.splice(i, 1);
      }
      this.$emit("input", this.values);
    }
  },
  watch: {
    value: {
      handler(value) {
        this.values = [...value];
      },
      immediate: true
    }
  }
};
</script>
