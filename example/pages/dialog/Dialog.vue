<template>
  <l-page-content
    class="example-dialog-page"
    contentClass="flex-box-column"
  >
    <l-navbar slot="header">Dialog</l-navbar>
    <div class="flex-1">
      <example-group contentClass="group-content">
        option
        <template v-slot:content>
          <l-checkbox-group
            right
            v-model="values"
          >
            <l-checkbox value="isMaskClose">isMaskClose</l-checkbox>
            <l-checkbox value="confirm">confirm</l-checkbox>
            <l-checkbox value="cancelText">cancelText</l-checkbox>
            <l-checkbox value="okText">okText</l-checkbox>
            <l-checkbox value="delayClose">delayClose</l-checkbox>
          </l-checkbox-group>
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
