<template>
  <l-page-content>
    <l-navbar slot="header">Flex</l-navbar>
    <example-group contentClass="group-content">
      baic
      <template v-slot:content>
        <l-flex
          style="height:200px"
          column
        >
          <l-flexItem :flex="1">111</l-flexItem>
          <l-flexItem :flex="1">222</l-flexItem>
        </l-flex>
      </template>
    </example-group>
  </l-page-content>
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
