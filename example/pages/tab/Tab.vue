<template>
  <PageContent>
    <Navbar slot="header">Tab</Navbar>

    <example-group contentClass="group-content">
      default
      <template v-slot:content>
        <tab
          v-model="currentIndex"
          :data="data"
        >
        </tab>
      </template>
    </example-group>
    <example-group contentClass="group-content">
      small
      <template v-slot:content>
        <tab
          v-model="currentIndex"
          small
          :data="data"
        >
        </tab>
      </template>
    </example-group>
    <example-group contentClass="group-content">
      custom item
      <template v-slot:content>
        <tab
          v-model="currentIndex"
          :data="data"
          :isScrollBar="false"
          class="custom-tab"
          small
        >
          <template v-slot:default="slotProps">
            <div
              class="custom-item l-tab-item"
              :class="{'custom-item-active':slotProps.item.isActive}"
            >
              {{slotProps.item.text}}
            </div>
          </template>
        </tab>
      </template>
    </example-group>
  </PageContent>
</template>

<script>
export default {
  data() {
    return {
      data: ['热门', '娱乐', '体育'],
      currentIndex: 0,
      animation: 'earthworm'
    }
  },
  methods: {}
}
</script>
<style lang="scss">
@import './tab.scss';
</style>
