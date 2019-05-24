<template>
  <run-page-content class="example-button-page">
    <run-navbar>Input</run-navbar>
    <template v-slot:content>
      <example-group contentClass="group-content">
        basic
        <template v-slot:content>
          <run-input></run-input>
        </template>
      </example-group>
      <example-group contentClass="group-content">
        textarea
        <template v-slot:content>
          <run-input v-model="value" textarea></run-input>
        </template>
      </example-group>
    </template>
  </run-page-content>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      value: ""
    };
  },
  created() {},
  methods: {}
};
</script>
<style lang='scss'>
</style>
