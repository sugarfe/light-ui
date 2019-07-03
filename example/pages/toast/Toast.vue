<template>
  <PageContent
    class="example-popup-page"
    contentClass="flex-box-column"
  >
    <Navbar slot="header">Toast</Navbar>
    <div class="flex-1">
      <example-group contentClass="group-content">
        basic
        <template v-slot:content> </template>
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
  name: 'toast',
  data() {
    return {}
  },
  props: {},
  mounted() {},
  methods: {
    open(position) {
      new this.$Toast({
        text: '请填写相关内容',
        time: 2000
      })
    }
  }
}
</script>
