<template>
  <l-page-content
    class="example-dialog-page"
    contentClass="flex-box-column"
  >
    <l-navbar slot="header">ActionSheet</l-navbar>
    <div class="flex-1">
      <example-group contentClass="group-content">
        option
        <template v-slot:content>
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
        onChange: val => {}
      })
    }
  }
}
</script>
<style lang="scss">
@import './actionSheet.scss';
</style>
