<template>
  <PageContent>
    <Navbar slot="header">Calendar</Navbar>
    <Button
      block
      @click="open"
    >打开</Button>
  </PageContent>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      value: undefined
    }
  },
  methods: {
    open() {
      new this.$Calendar({
        value: this.value,
        onComplete: value => {
          this.value = value.map(item => {
            return new Date(item.timeStamp)
          })
        }
      })
    }
  }
}
</script>
<style lang="scss">
@import './calendar.scss';
</style>
