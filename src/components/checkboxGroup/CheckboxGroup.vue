<template>
  <div
    class="l-checkbox-group flex-box"
    :class="dynamicClass"
  >
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
        "flex-row": this.horizontal,
        "flex-column": !this.horizontal,
        "l-checkbox-group-small": this.size === "small",
        "l-checkbox-group-right": this.right,
        "l-checkbox-group-row-right": this.horizontal && this.right
      };
    }
  },
  methods: {
    change({ value, checked }) {
      if (checked && !this.values.includes(value)) {
        this.values.push(value);
      }
      else if (!checked) {
        let i = this.values.findIndex(item => {
          return item === value;
        });
        ! !~i && this.values.splice(i, 1);
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
