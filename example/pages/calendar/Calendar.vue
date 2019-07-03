<template>
  <PageContent>
    <Navbar slot="header">Calendar</Navbar>
    <example-group contentClass="group-content">
      basic
      <template v-slot:content>
        <calendar></calendar>
      </template>
    </example-group>
  </PageContent>
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
