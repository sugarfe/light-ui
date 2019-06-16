<template>
  <l-page-content
    class="index-page"
    contentClass="index-page-component-list"
  >
    <div class="title">LightUI</div>
    <template v-slot:content>
      <example-group
        contentClass="group-content"
        v-for="(group,index) in componentList"
        :key="index"
      >
        {{group.name}}
        <template v-slot:content>
          <l-grid
            ref="grid"
            :col="3"
            :square="true"
            spacing="1px"
            vertical="1px"
          >
            <l-grid-item
              v-for="(item,i) in group.items"
              :key="i"
              class="component-item flex-box-center"
              @click.native="navigateTo(item)"
            >{{item}}</l-grid-item>
          </l-grid>
        </template>
      </example-group>
    </template>
  </l-page-content>
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
@import './index.scss';
</style>
