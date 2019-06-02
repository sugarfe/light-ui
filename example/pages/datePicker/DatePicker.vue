<template>
  <run-page-content
    class="example-button-page"
    contentClass="content flex-box-column"
  >
    <run-navbar>DatePicker</run-navbar>
    <template v-slot:content>
      <div class="flex-1">
        <example-group contentClass="group-content">
          scope
          <template v-slot:content>
            <run-radio-group
              v-model="scope"
              right
            >
              <run-radio :value="1">年</run-radio>
              <run-radio :value="2">月</run-radio>
              <run-radio :value="3">日</run-radio>
            </run-radio-group>
          </template>
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
import { debuglog } from 'util';
export default {
  data() {
    return {
      scope: 1
    };
  },
  mounted() { },
  methods: {
    open() {
      new this.$RunDatePicker({
        scope: this.scope
      });
    }
  }
};
</script>
<style lang="scss">
@import "./datePicker.scss";
</style>

