<template>
  <l-page-content class="example-dialog-page">
    <l-navbar>loading</l-navbar>
    <example-group contentClass="group-content">
      default
      <template v-slot:content>
        <l-button
          size="small"
          @click="click()"
        >default</l-button>
      </template>
    </example-group>
  </l-page-content>
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
      let loading = new this.$Loading({
        text: '嘿嘿嘿'
      })
      // setTimeout(() => {
      //   loading.close()
      // }, 2000)
    }
  }
}
</script>
