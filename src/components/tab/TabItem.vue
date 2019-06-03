<template>
  <div
    class="l-tab-item"
    @click="selectIndex"
    :class="{currentNavCalss:currentIndex == id}"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tab-item",
  data() {
    return {
      id: "999", // 下标 唯一识别符
      currentIndex: "", // 选中下标
      currentNavCalss: "" // 选中的样式
    };
  },
  created() { },
  methods: {
    setItem(index, currentIndex) {
      // 设置id 和选中下标
      this.id = index;
      currentIndex || currentIndex == 0
        ? (this.currentIndex = currentIndex)
        : (this.currentIndex = null);
    },
    setCurrentNavName(val) {
      // 设置选中类名
      this.currentNavCalss = val;
    },
    selectIndex() {
      // 选中下标，
      this.$parent.selectIndex(this.id);
    },
    setInput() {
      // 设置 value 值，供父元素调用
      this.$parent.$emit("input", this.id);
    }
  }
};
</script>

<style lang="scss">
// .currentNavCalss{
// 	color: red;
// }
</style>
