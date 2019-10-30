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
            <checkbox value="confirm">Confirm</checkbox>
            <checkbox value="cancelText">CancelText</checkbox>
            <checkbox value="okText">OkText</checkbox>
            <checkbox value="delayClose">DelayClose</checkbox>
            <checkbox value="render">Render</checkbox>
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
import 
<script>
let option = {
  isMaskClose: true,
  confirm: true,
  cancelText: 'cancel',
  okText: 'ok',
  delayClose: true,
  render: true
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
        render: this.options.render
          ? () => {
              return <input class="dialog-input" placeholder="请输入" />
            }
          : undefined,
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
<style lang="scss">
.dialog-input {
  border: 1px solid #f0f0f0;
  height: 32px;
  width: 100%;
  padding: 0 10px;
}
</style>