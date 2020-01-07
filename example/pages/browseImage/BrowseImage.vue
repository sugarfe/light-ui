<template>
  <PageContent>
    <Navbar slot="header">BrowseImage</Navbar>

    <example-group contentClass="group-content">
      basic
      <template v-slot:content>
        <BrowseImage
          ref="browseImage"
          multiple
          v-model="value"
          compressed
        ></BrowseImage>
        <!-- <Button @click="browse">browse</Button> -->
      </template>
    </example-group>
  </PageContent>
</template>
<script>
export default {
  data() {
    return {
      value: []
    }
  },
  methods: {
    browse() {
      this.$refs['browseImage'].browse()
    }
  },
  watch: {
    value() {
      console.log(this.value.length)
    }
  }
}
</script>
<style lang="scss"></style>
