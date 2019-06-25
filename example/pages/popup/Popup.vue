<template>
  <l-page-content
    class="example-popup-page"
    contentClass="flex-box-column"
  >
    <l-navbar slot="header">Popup</l-navbar>
    <div class="flex-1">
      <example-group contentClass="group-content">
        position
        <template v-slot:content>
          <l-radio-group
            v-model="option.position"
            right
          >
            <l-radio
              :value="item"
              v-for="(item, index) in optionData.position"
              :key="index"
            >{{ item }}</l-radio>
          </l-radio-group>
        </template>
      </example-group>
    </div>
    <div class="action-panel">
      <l-button
        block
        theme="primary"
        @click="open"
      >打开</l-button>
    </div>
  </l-page-content>
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
        position: 'top'
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
