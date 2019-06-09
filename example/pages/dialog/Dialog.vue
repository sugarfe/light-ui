<template>
  <run-page-content
    class="example-dialog-page"
    contentClass="flex-box-column"
  >
    <run-navbar>Dialog</run-navbar>
    <template v-slot:content>
      <div class="flex-1">
        <example-group contentClass="group-content">
          option
          <template v-slot:content>
            <run-checkbox-group
              right
              v-model="values"
            >
              <run-checkbox value="isMaskClose">isMaskClose</run-checkbox>
              <run-checkbox value="confirm">confirm</run-checkbox>
              <run-checkbox value="cancelText">cancelText</run-checkbox>
              <run-checkbox value="okText">okText</run-checkbox>
            </run-checkbox-group>
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
let option = {
  isMaskClose: true,
  confirm: true,
  cancelText: "cancel",
  okText: "ok"
}
export default {
  data() {
    return {
      values: []
    }
  },
  computed: {
    options() {
      let obj = {};
      this.values.forEach((item) => {
        obj[item] = option[item]
      })
      return obj
    }

  },
  methods: {
    open() {
      console.log(JSON.stringify(this.options))
      new this.$RunDialog({
        title: "提示",
        text: 'dialog',
        isMaskClose: true,
        ...this.options
      })

    },
  }
}
</script>
