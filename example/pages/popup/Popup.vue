<template>
  <PageContent
    class="example-popup-page"
    contentClass="flex-box-column"
  >
    <Navbar slot="header">Popup</Navbar>
    <div class="flex-1">
      <Cell @click="open({position:'top'})">
        Top
        <template slot="value">
          <i class="iconfont icon-arrow-forward"></i>
        </template>
      </Cell>
      <Cell @click="open({position:'bottom'})">
        Bottom
        <template slot="value">
          <i class="iconfont icon-arrow-forward"></i>
        </template>
      </Cell>
      <Cell @click="open({position:'left'})">
        Left
        <template slot="value">
          <i class="iconfont icon-arrow-forward"></i>
        </template>
      </Cell>
      <Cell @click="open({position:'right'})">
        Right
        <template slot="value">
          <i class="iconfont icon-arrow-forward"></i>
        </template>
      </Cell>
      <Cell @click="open({position:'center',isMask:true})">
        Center
        <template slot="value">
          <i class="iconfont icon-arrow-forward"></i>
        </template>
      </Cell>
      <Cell @click="open({position:'left',size:'300px'})">
        Left - 300px
        <template slot="value">
          <i class="iconfont icon-arrow-forward"></i>
        </template>
      </Cell>
      <Cell @click="open({position:'bottom',size:'200px',isMask:true})">
        Bottom - 200px - Mask
        <template slot="value">
          <i class="iconfont icon-arrow-forward"></i>
        </template>
      </Cell>
      <Cell @click="open({position:'left',open:true})">
        Open
        <template slot="value">
          <i class="iconfont icon-arrow-forward"></i>
        </template>
      </Cell>
    </div>
  </PageContent>
</template>
<script>
import PopupModel from './PopupModel'
export default {
  data() {
    return {
      option: {
        position: 'top',
        size: '100%',
        isMask: false
      }
    }
  },
  methods: {
    open(option) {
      new this.$Popup(PopupModel, {
        ...this.option,
        ...option
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
