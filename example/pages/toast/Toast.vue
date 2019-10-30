<template>
  <PageContent
    class="example-popup-page"
    contentClass="flex-box-column"
  >
    <Navbar slot="header">Toast</Navbar>
    <div class="flex-1">
      <Cell @click="open">
        Basic
        <template slot="value">
          <i class="iconfont icon-arrow-forward"></i>
        </template>
      </Cell>
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
    open() {
      new this.$Toast()
    }
  }
}
</script>
