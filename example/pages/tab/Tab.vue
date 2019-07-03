<template>
  <PageContent>
    <Navbar slot="header">tab</Navbar>
    <example-group contentClass="group-content">
      default
      <template v-slot:content>
        <tab v-model="currentIndex">
          <tab-item
            v-for="(item, index) in 7"
            :key="index"
          >{{
            index
            }}</tab-item>
        </tab>
      </template>
    </example-group>
    <example-group contentClass="group-content">
      select animation
      <template v-slot:content>
        <tab
          :animation="animation"
          v-model="currentIndex2"
        >
          <tab-item
            v-for="(item, index) in 7"
            :key="index"
          >{{
            index
            }}</tab-item>
        </tab>
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
        <tab
          @selectIndex="selectIndex"
          :isDelay="true"
          :animation="animation"
          v-model="currentIndex3"
        >
          <tab-item
            v-for="(item, index) in 4"
            :key="index"
          >{{
            index
            }}</tab-item>
        </tab>
      </template>
    </example-group>
    <example-group contentClass="group-content">
      scroll
      <template v-slot:content>
        <tab
          :scroll="true"
          v-model="currentIndex4"
        >
          <tab-item
            class="tab-item1"
            v-for="(item, index) in 10"
            :key="index"
          >{{ index }}</tab-item>
        </tab>
      </template>
    </example-group>
    </PageContent>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 6, // 选中下标
      currentIndex2: 1, // 选中下标
      currentIndex3: 0,
      currentIndex4: 9,
      animation: 'earthworm' //动画切换
    }
  },
  methods: {
    selectIndex(val) {
      setTimeout(() => {
        this.currentIndex3 = val
      }, 500)
    }
  },
  watch: {
    currentIndex(value) {}
  }
}
</script>

<style lang="scss">
</style>
