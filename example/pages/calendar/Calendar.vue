<template>
  <PageContent>
    <Navbar slot="header">Calendar</Navbar>
    {{text}}
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
      value: undefined,
      text: undefined
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
          this.text = value
            .map(item => {
              return item.string
            })
            .join(' - ')
        }
      })
    }
  }
}
</script>
<style lang="scss">
@import './calendar.scss';
</style>
