<template>
  <l-page-content>
    <l-navbar>Calendar</l-navbar>
    <template v-slot:content>
      <example-group contentClass="group-content">
        basic
        <template v-slot:content>
          <l-calendar></l-calendar>
        </template>
      </example-group>
    </template>
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
