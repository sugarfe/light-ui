<template>
  <PageContent>
    <Navbar slot="header">Flex</Navbar>
    <example-group contentClass="group-content">
      baic
      <template v-slot:content>
        <flex
          style="height:200px"
          column
        >
          <flexItem :flex="1">111</flexItem>
          <flexItem :flex="1">222</flexItem>
        </flex>
      </template>
    </example-group>
    </PageContent>
</template>
<script>
export default {
  data() {
    return {
      data: 10,
      option: {
        col: 2,
        square: [1]
      }
    }
  }
}
</script>
<style lang="scss" >
.grid-item {
  background-color: #ffb403;
  color: #fff;
}
</style>
