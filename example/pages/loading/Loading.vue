<template>
  <run-page-content class="example-dialog-page">
    <run-navbar>loading</run-navbar>
    <template v-slot:content>
      <example-group contentClass="group-content">
        default
        <template v-slot:content>
          <run-button size="small" @click="click()" >default</run-button>
        </template>
      </example-group>
    </template>
  </run-page-content>
</template>
<script>
export default {
  data(){
    return {}
  },
  props:{},
  mounted(){},
  methods:{
    click(){
      let loading = new this.$RunLoading({
        text:'嘿嘿嘿'
      })
      setTimeout(()=>{
        loading.close()
      },2000)
    },
  }
}
</script>
