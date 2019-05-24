<template>
  <run-page-content>
    <run-navbar>Grid</run-navbar>
    <template v-slot:content>
      <example-group contentClass="group-content">
        col 4 square
        <template v-slot:content>
          <div class="index-page">
            <run-grid ref="grid" :col="4" :square="true" spacing="1px" vertical="1px">
              <run-grid-item v-for="item in data" :key="item" style="background-color:#ffb403"></run-grid-item>
            </run-grid>
          </div>
        </template>
      </example-group>
    </template>
  </run-page-content>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      data: 10
    };
  },
  computed: {},
  created: function() {
    // setTimeout(() => {
    //   this.data += 3;
    //   this.$nextTick(() => {
    //     this.$refs["grid"].refresh();
    //   });
    // }, 2000);
  },
  beforeMount: function() {},
  mounted: function() {},
  beforeDestroy: function() {},
  destroyed: function() {},
  methods: {},
  watch: {},
  directives: {}
};
</script>
<style lang="scss">
.index-page {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}
</style>