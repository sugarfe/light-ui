<template>
  <run-page-content>
    <run-navbar>tab</run-navbar>
    <template v-slot:content>
      <example-group contentClass="group-content">
        default
        <template v-slot:content>
          <run-tab v-model="currentIndex" currentBarClass="currentBarClass">
            <run-tab-item v-for="(item,index) in 7" :key="index">{{index}}</run-tab-item>
          </run-tab>
        </template>
      </example-group>
      <example-group contentClass="group-content">
        select animation
        <template v-slot:content>
          <run-tab :animation="animation" v-model="currentIndex2" currentBarClass="currentBarClass">
            <run-tab-item v-for="(item,index) in 7" :key="index">{{index}}</run-tab-item>
          </run-tab>
          <select v-model="animation">
            <option value="general">general</option>
            <option value="none">none</option>
            <option value="earthworm">earthworm</option>
          </select>
        </template>
      </example-group>
      <example-group contentClass="group-content">
        prevent isDelay
        <template v-slot:content>
          <run-tab
            @selectIndex="selectIndex"
            :isDelay="true"
            :animation="animation"
            v-model="currentIndex3"
            currentBarClass="currentBarClass"
          >
            <run-tab-item v-for="(item,index) in 4" :key="index">{{index}}</run-tab-item>
          </run-tab>
        </template>
      </example-group>
      <example-group contentClass="group-content">
        scroll
        <template v-slot:content>
          <run-tab :scroll="true" v-model="currentIndex4" currentBarClass="currentBarClass">
            <run-tab-item class="run-tab-item1" v-for="(item,index) in 10" :key="index">{{index}}</run-tab-item>
          </run-tab>
        </template>
      </example-group>
    </template>
  </run-page-content>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 6, // 选中下标
      currentIndex2: 1, // 选中下标
      currentIndex3: 0,
      currentIndex4: 9,
      animation: "earthworm" //动画切换
    };
  },
  methods: {
    selectIndex(val) {
      setTimeout(() => {
        this.currentIndex3 = val;
      }, 500);
    }
  },
  watch: {
    currentIndex(value) {}
  }
};
</script>

<style lang="scss">
.currentBarClass {
  span {
    width: 50%;
  }
}
.run-tab-item1 {
  //   padding: 0 20px;
  //   flex-wrap: nowrap;
}
</style>
