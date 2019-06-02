<template>
  <run-page-content
    class="example-button-page"
    contentClass="content flex-box-column"
  >
    <run-navbar>Picker</run-navbar>
    <template v-slot:content>
      <div class="flex-1">
        <example-group contentClass="group-content">
          basic
          <template v-slot:content>
            <run-radio-group
              v-model="column"
              right
            >
              <run-radio :value="1">一列</run-radio>
              <run-radio :value="2">二列</run-radio>
              <run-radio :value="3">三列</run-radio>
            </run-radio-group>
          </template>
        </example-group>
        <example-group contentClass="group-content">
          Text:
          <template v-slot:content>{{text}}</template>
        </example-group>
        <example-group contentClass="group-content">
          Value:
          <template v-slot:content>{{value}}</template>
        </example-group>
      </div>
      <div class="action-panel">
        <run-button
          block
          theme="primary"
          @click="open"
        >打开</run-button>
      </div>
    </template>
  </run-page-content>
</template>
<script>
import data from "./picker.json";
export default {
  data() {
    return {
      value: [],
      text: [],
      column: 1
    };
  },
  mounted() { },
  methods: {
    open() {
      new this.$RunPicker({
        data: data.slice(0, this.column),
        value: this.value,
        onOk: (values, text, selectedIndex) => {
          this.value = values;
          this.text = text;
        }
      });
    }
  },
  watch: {
    column(column) {
      switch (column) {
        case 1:
          this.value = [];
          break;
        case 2:
        case 3:
          this.value = [];
          break;
      }
      this.text = [];
    }
  }
};
</script>
<style lang="scss">
@import "./picker.scss";
</style>

