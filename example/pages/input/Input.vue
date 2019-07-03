<template>
  <PageContent class="example-button-page">
    <Navbar slot="header">Input</Navbar>
    <example-group contentClass="group-content">
      basic
      <template v-slot:content>
        <Input />
      </template>
    </example-group>
    <example-group contentClass="group-content">
      textarea
      <template v-slot:content>
        <Input
          v-model="value"
          textarea
        />
      </template>
    </example-group>
    <example-group contentClass="group-content">
      disabled
      <template v-slot:content>
        <Input disabled />
      </template>
    </example-group>
  </PageContent>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      value: ''
    }
  },
  created() {},
  methods: {}
}
</script>
<style lang="scss"></style>
