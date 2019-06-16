<template>
  <l-page-content
    class="example-dialog-page"
    contentClass="flex-box-column"
  >
    <l-navbar>ActionSheet</l-navbar>
    <template v-slot:content>
      <div class="flex-1">
        <example-group contentClass="group-content">
          option
          <template v-slot:content>
            <!-- <l-checkbox-group right v-model="values">
              <l-checkbox value="isMaskClose">isMaskClose</l-checkbox>
              <l-checkbox value="confirm">confirm</l-checkbox>
              <l-checkbox value="cancelText">cancelText</l-checkbox>
              <l-checkbox value="okText">okText</l-checkbox>
              <l-checkbox value="delayClose">delayClose</l-checkbox>
            </l-checkbox-group>-->
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
    </template>
  </l-page-content>
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
      new this.$ActionSheet({
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
