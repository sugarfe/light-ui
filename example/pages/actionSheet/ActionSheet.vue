<template>
  <PageContent
    class="example-dialog-page"
    contentClass="flex-box-column"
  >
    <Navbar slot="header">ActionSheet</Navbar>
    <div class="flex-1">
      <example-group contentClass="group-content">
        option
        <template v-slot:content>
        </template>
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
              return h('div', props.item.label)
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
