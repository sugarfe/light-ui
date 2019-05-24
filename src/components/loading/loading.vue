<template>
  <div class="run-loading" >
     <div class="loading">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
      <div class="line4"></div>
      <div class="line5"></div>
      <div class="line6"></div>
      <div class="line7"></div>
      <div class="line8"></div>
      <div class="line9"></div>
      <div class="line10"></div>
      <div class="line11"></div>
      <div class="line12"></div>
    </div>
    <div class="run-loading-text"  v-if="text">
      {{text}}
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {}
  },
  props:{
    text:{
      type:String,
      default:()=>{
        return '加载中'
      }
    }
  },
}
</script>
<style lang="scss">
@import './loading.scss';
</style>
