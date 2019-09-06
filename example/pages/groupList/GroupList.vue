<template>
  <PageContent>
    <Navbar slot="header">GroupList</Navbar>
    <GroupList :nav="navList">
      <GroupItem
        v-for="(item,index) in data"
        :key="index"
        :data="item.data"
      >
        <span slot="title">{{item.name}}</span>
        <div slot-scope="param">
          <div class="group-list-item">
            {{param.row.text}}
          </div>
        </div>
      </GroupItem>
    </GroupList>
  </PageContent>
</template>
<script>
import data from './data.json'
export default {
  data() {
    return {
      data
    }
  },
  computed: {
    navList() {
      return this.data.map(item => {
        return item.name
      })
    }
  },
  methods: {}
}
</script>
<style lang="scss" >
</style>
