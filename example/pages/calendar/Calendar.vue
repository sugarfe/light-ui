<template>
  <PageContent>
    <Navbar slot="header">Calendar</Navbar>
    <Cell @click="open">
      basic
      <template slot="value">
        {{text}}
        <i class="iconfont icon-arrow-forward"></i>
      </template>
    </Cell>
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
