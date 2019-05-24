<template>
  <run-page-content class="index-page" contentClass="index-page-component-list">
    <div class="title">RUNUI</div>
    <template v-slot:content>
      <example-group
        contentClass="group-content"
        v-for="(group,index) in componentList"
        :key="index"
      >
        {{group.name}}
        <template v-slot:content>
          <run-grid ref="grid" :col="3" :square="true" spacing="1px" vertical="1px">
            <run-grid-item
              v-for="(item,i) in group.items"
              :key="i"
              class="component-item run-flex-box-center"
              @click.native="navigateTo(item)"
            >{{item}}</run-grid-item>
          </run-grid>
        </template>
      </example-group>
    </template>
  </run-page-content>
</template>
<script>
import componentList from "@example/assets/component.router.json";
export default {
  components: {},
  data() {
    return {
      componentList
    };
  },
  methods: {
    navigateTo(router) {
      this.$router.push(router);
    }
  }
};
</script>
<style lang="scss">
@import "./index.scss";
</style>