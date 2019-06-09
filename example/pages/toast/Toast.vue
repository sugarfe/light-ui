<template>
  <run-page-content
    class="example-popup-page"
    contentClass="flex-box-column"
  >
    <run-navbar>Popup</run-navbar>
    <template v-slot:content>
      <div class="flex-1">
        <example-group contentClass="group-content">
          basic
          <template v-slot:content>

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
  name: 'toast',
  data() {
    return {}
  },
  props: {},
  mounted() {
  },
  methods: {
    open(position) {
      new this.$RunToast({
        text: '你好',
        time: 2000
      })
    }
  }
}
</script>
