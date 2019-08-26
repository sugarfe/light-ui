<template>
  <PageContent class="example-dialog-page">
    <Navbar>loading</Navbar>
    <example-group contentClass="group-content">
      default
      <template v-slot:content>
        <Button
          size="small"
          @click="click()"
        >default</Button>
      </template>
    </example-group>
  </PageContent>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: {},
  mounted() {},
  methods: {
    click() {
      this.$Loading.show()
      setTimeout(() => {
        this.$Loading.clear()
      }, 2000)
    }
  }
}
</script>
