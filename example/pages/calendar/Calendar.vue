<template>
  <l-page-content>
    <l-navbar slot="header">Calendar</l-navbar>
    <example-group contentClass="group-content">
      basic
      <template v-slot:content>
        <l-calendar></l-calendar>
      </template>
    </example-group>
  </l-page-content>
</template>
<script>
export default {
  components: {},
  data() {
    return {}
  }
}
</script>
<style lang="scss">
@import './calendar.scss';
</style>
