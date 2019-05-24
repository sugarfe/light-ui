<template>
  <run-page-content>
    <run-navbar>Calendar</run-navbar>
    <template v-slot:content>
      <example-group contentClass="group-content">
        basic
        <template v-slot:content>
          <run-calendar></run-calendar>
        </template>
      </example-group>
    </template>
  </run-page-content>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  }
};
</script>
<style lang="scss">
@import "./calendar.scss";
</style>