<template>
  <l-page-content contentClass="watermark-page">
    <l-navbar slot="header">Watemark</l-navbar>
    <l-watermark
      :text="['老王','wang']"
      :row="5"
    >
      <div class="list">
        <div
          class="item flex-box"
          v-for="item in 30"
          :key="item"
        >
          <label class="flex-1">姓名</label>
          <div>老王</div>
        </div>
      </div>
    </l-watermark>
  </l-page-content>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      value: ''
    }
  },
  created() {},
  methods: {}
}
</script>
<style lang="scss">
.watermark-page {
  position: relative;
  .list {
    height: 100%;
    overflow: auto;
  }
  .item {
    padding: 20px 15px;
    color: #191919;
    font-size: 16px;
    position: relative;
    &::before {
      @include border-1px(#e8e8e8, bottom);
    }
    label {
      color: #8b8b8b;
    }
  }
}
</style>
