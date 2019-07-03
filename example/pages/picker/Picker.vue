<template>
  <PageContent
    class="example-button-page"
    contentClass="content flex-box-column"
  >
    <Navbar slot="header">Picker</Navbar>
    <div class="flex-1">
      <example-group contentClass="group-content">
        basic
        <template v-slot:content>
          <radio-group
            v-model="column"
            right
          >
            <radio :value="1">一列</radio>
            <radio :value="2">二列</radio>
            <radio :value="3">三列</radio>
          </radio-group>
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
      <Button
        block
        theme="primary"
        @click="open"
      >打开</Button>
    </div>
  </PageContent>
</template>
<script>
import data from './picker.json'
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
