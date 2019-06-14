<template>
  <run-page-content
    class="example-dialog-page"
    contentClass="flex-box-column"
  >
    <run-navbar>ActionSheet</run-navbar>
    <template v-slot:content>
      <div class="flex-1">
        <example-group contentClass="group-content">
          option
          <template v-slot:content>
            <!-- <run-checkbox-group right v-model="values">
              <run-checkbox value="isMaskClose">isMaskClose</run-checkbox>
              <run-checkbox value="confirm">confirm</run-checkbox>
              <run-checkbox value="cancelText">cancelText</run-checkbox>
              <run-checkbox value="okText">okText</run-checkbox>
              <run-checkbox value="delayClose">delayClose</run-checkbox>
            </run-checkbox-group>-->
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
export default {
  data() {
    return {
      list: [1, 2, 3]
    }
  },
  methods: {
    open() {
      new this.$RunActionSheet({
        title: 'title',
        data: this.list,
        dataText: 'label',
        itemBoxClass: 'aaaa',
        scopedSlots(h) {
          return {
            default: props => {
              return <div>{props.item.label}</div>
            }
          }
        },
        onChange: val => {
          console.log(val)
        }
      })
    }
  }
}
</script>
<style lang="scss">
@import './actionSheet.scss';
</style>