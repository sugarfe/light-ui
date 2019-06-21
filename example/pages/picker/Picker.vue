<template>
  <l-page-content
    class="example-button-page"
    contentClass="content flex-box-column"
  >
    <l-navbar slot="header">Picker</l-navbar>
    <div class="flex-1">
      <example-group contentClass="group-content">
        basic
        <template v-slot:content>
          <l-radio-group
            v-model="column"
            right
          >
            <l-radio :value="1">一列</l-radio>
            <l-radio :value="2">二列</l-radio>
            <l-radio :value="3">三列</l-radio>
          </l-radio-group>
        </template>
      </example-group>
      <example-group contentClass="group-content">
        Text:
        <template v-slot:content>{{ text }}</template>
      </example-group>
      <example-group contentClass="group-content">
        Value:
        <template v-slot:content>{{ value }}</template>
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
import data from './picker.json'
import { debuglog } from 'util'
export default {
  data() {
    return {
      value: [],
      text: [],
      column: 1
    }
  },
  mounted() {},
  methods: {
    open() {
      new this.$Picker({
        data: data.slice(0, this.column),
        value: this.value,
        onOk: (values, text, selectedIndex) => {
          this.value = values
          this.text = text
        }
      })
    }
  },
  watch: {
    column(column) {
      this.value = []
      this.text = []
    }
  }
}
</script>
<style lang="scss">
@import './picker.scss';
</style>
