<template>
  <PageContent
    class="example-popup-page"
    contentClass="flex-box-column"
  >
    <Navbar slot="header">Popup</Navbar>
    <div class="flex-1">
      <example-group contentClass="group-content">
        position
        <template v-slot:content>
          <radio-group
            v-model="option.position"
            right
          >
            <radio
              :value="item"
              v-for="(item, index) in optionData.position"
              :key="index"
            >{{ item }}</radio>
          </radio-group>
        </template>
      </example-group>
    </div>
    <div class="action-panel">
      <Button
        block
        theme="primary"
        @click="open"
      >打开</Button>
    </div>
  </PageContent>
</template>
<script>
import PopupModel from './PopupModel'
export default {
  data() {
    return {
      positionIndex: 0,
      sizeIndex: 0,
      optionData: {
        position: ['top', 'bottom', 'left', 'right', 'center']
      },
      option: {
        position: 'top',
        size: '100%',
        isMask: false
      }
    }
  },
  methods: {
    open() {
      new this.$Popup(PopupModel, {
        ...this.option
      })
    }
  },
  beforeRouteLeave(to, from, next) {
    next()
  },
  beforeRouteEnter(to, from, next) {
    next()
  },
  beforeRouteUpdate() {}
}
</script>
<style lang="scss">
@import './popup';
</style>
