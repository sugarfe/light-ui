<template>
  <PageContent>
    <Navbar slot="header">BrowseImage</Navbar>
    <example-group contentClass="group-content">
      basic
      <template v-slot:content>
        <BrowseImage v-model="value">
          <template v-slot:default="slotProps">
            <GridItem class="l-browse-item">
              <img :src="slotProps.item.base64">
            </GridItem>
          </template>
        </BrowseImage>
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
