<template>
  <l-page-content
    class="example-popup-page"
    contentClass="flex-box-column"
  >
    <l-navbar slot="header">Popup</l-navbar>
    <div class="flex-1">
      <example-group contentClass="group-content">
        basic
        <template v-slot:content> </template>
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
  name: 'toast',
  data() {
    return {}
  },
  props: {},
  mounted() {},
  methods: {
    open(position) {
      new this.$Toast({
        text: '你好',
        time: 2000
      })
    }
  }
}
</script>
