<template>
  <PageContent
    class="example-dialog-page"
    contentClass="flex-box-column"
  >
    <Navbar slot="header">Dialog</Navbar>
    <div class="flex-1">
      <example-group contentClass="group-content">
        option
        <template v-slot:content>
          <checkbox-group
            right
            v-model="values"
          >
            <checkbox value="isMaskClose">isMaskClose</checkbox>
            <checkbox value="confirm">confirm</checkbox>
            <checkbox value="cancelText">cancelText</checkbox>
            <checkbox value="okText">okText</checkbox>
            <checkbox value="delayClose">delayClose</checkbox>
          </checkbox-group>
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
let option = {
  isMaskClose: true,
  confirm: true,
  cancelText: 'cancel',
  okText: 'ok',
  delayClose: true
}
export default {
  data() {
    return {
      values: []
    }
  },
  computed: {
    options() {
      let obj = {}
      this.values.forEach(item => {
        obj[item] = option[item]
      })
      return obj
    }
  },
  methods: {
    open() {
      new this.$Dialog({
        title: '提示',
        text: 'dialog',
        ...this.options,
        render: () => {
          return <div class="aaa">aaaa</div>
        },
        onOk: this.handle,
        onCancel: this.handle,
        onHandle: this.handle
      })
    },
    handle(done) {
      done &&
        setTimeout(() => {
          done()
        }, 1500)
    }
  }
}
</script>
