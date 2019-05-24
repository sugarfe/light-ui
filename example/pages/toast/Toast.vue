<template>
  <div>
    <run-button block light @click="click('top')" >toast-top</run-button>
    <run-button block light @click="click('center')" >toast-center</run-button>
    <run-button block light @click="click('bottom')" >toast-bottom</run-button>
    <run-button block light @click="distance()" >toast-distance</run-button>
    <run-button block light @click="isMask()" >toast-isMask</run-button>
    <run-button block light @click="isMaskClose()" >toast-isMaskClose</run-button>
  </div>
</template>
<script>
export default {
  name:'toast',
  data(){
    return {}
  },
  props:{},
  mounted(){},
  methods:{
    click(position){
      new this.$RunToast({
        message:'你好',
        distance:position,
        duration:'2000'
      })
    },
    distance(){
      new this.$RunToast({
        message:'你好',
        duration:'2000',
        distance:'200px'
      })
    },
    isMask(){
      new this.$RunToast({
        message:'没有遮罩',
        duration:'2000',
        isMask:false
      })
    },
    isMaskClose(){
      new this.$RunToast({
        message:'点击关闭',
        duration:'2000',
        // isMask:false,
        isMaskClose:true
      })
    }
  }
}
</script>
