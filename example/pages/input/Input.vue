<template>
  <l-page-content class="example-button-page">
    <l-navbar>Input</l-navbar>
    <template v-slot:content>
      <example-group contentClass="group-content">
        basic
        <template v-slot:content>
          <l-input></l-input>
        </template>
      </example-group>
      <example-group contentClass="group-content">
        textarea
        <template v-slot:content>
          <l-input
            v-model="value"
            textarea
          ></l-input>
        </template>
      </example-group>
      <example-group contentClass="group-content">
        disabled
        <template v-slot:content>
          <l-input disabled></l-input>
        </template>
      </example-group>
    </template>
  </l-page-content>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      value: ''
    }
  },
  created() { },
  methods: {}
}
</script>
<style lang="scss"></style>
