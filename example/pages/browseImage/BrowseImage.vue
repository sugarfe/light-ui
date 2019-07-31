<template>
  <PageContent>
    <Navbar slot="header">BrowseImage</Navbar>
    <example-group contentClass="group-content">
      basic
      <template v-slot:content>
        <BrowseImage v-model="value"></BrowseImage>
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
  watch: {
    value() {}
  }
}
</script>
<style lang="scss" >
</style>
