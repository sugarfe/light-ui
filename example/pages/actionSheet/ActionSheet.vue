<template>
  <run-page-content class="example-button-page">
    <run-navbar>actionSheet</run-navbar>
    <template v-slot:content>
      <example-group contentClass="group-content">
        mode
        <template v-slot:content>
          <run-button size="small" @click="click('android')">android</run-button>
          {{value1}}
          <hr/>
          <run-button size="small" @click="click('ios')">ios</run-button>
          {{value2}}
        </template>
      </example-group>
    </template>
  </run-page-content>
</template>
<script>
export default {
  data(){
    return {
      list:[
        {
          label:'1',
          value:'1'
        },
        {
          label:'2',
          value:'2'
        },
        {
          label:'3',
          value:'3'
        },
      ],
      value1:'1',
      value2:'1',
    }
  },
  methods:{
    click(param){
      switch(param){
        case 'android':
          new this.$RunActionSheet({
            title:'title',
            data: this.list,
            value:this.value1,
            mode:'android',
            onChange:(val)=>{
              this.value1 = val.value
              console.log(val)
            }
          })
        break;
        case 'ios':
          new this.$RunActionSheet({
            title:'title',
            data: this.list,
            value:this.value2,
            mode:'ios',
            onChange:(val)=>{
              this.value2 = val.value
              console.log(val)
            }
          })
        break;
      }
    }
  }
};
</script>
<style lang="scss">
@import "./actionSheet.scss";
</style>