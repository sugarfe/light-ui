<template>
  <l-page-content
    class="example-button-page"
    contentClass="content flex-box-column"
  >
    <l-navbar slot="header">DatePicker</l-navbar>
    <div class="flex-1">
      <example-group contentClass="group-content">
        scope
        <template v-slot:content>
          <l-radio-group
            v-model="scope"
            right
          >
            <l-radio :value="1">年</l-radio>
            <l-radio :value="2">月</l-radio>
            <l-radio :value="3">日</l-radio>
          </l-radio-group>
        </template>
      </example-group>
    </div>
    <div class="action-panel">
      <l-button
        block
        theme="primary"
        @click="open"
      >打开</l-button>
    </div>
  </l-page-content>
</template>
<script>
import { debuglog } from 'util'
export default {
  data() {
    return {
      scope: 1
    }
  },
  mounted() {},
  methods: {
    open() {
      new this.$DatePicker({
        scope: this.scope,
        mode: ['yyyy-MM-dd', 'hh', 'mm']
      })
    }
  }
}
</script>
<style lang="scss">
@import './datePicker.scss';
</style>
