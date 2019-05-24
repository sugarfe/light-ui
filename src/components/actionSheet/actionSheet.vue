<template>
  <div :class="`action-sheet-${mode}`" class="action-sheet">
    <div class="header" v-if="title">
      {{title}}
    </div>
    <div class="section">
      <li v-for="(item,index) in data" 
      :key="'item'+index" 
      @click="choose(item)"
      :class="value==item.value?'active':''">
        {{item.label}}
      </li>
    </div>
    <div class="footer" v-if="footer">
      取消
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {}
  },
  props:{
    value:{
      type:String,
      default:()=>{
        return ''
      }
    },
    data:{
      type:Array,
      default:()=>{
        return []
      }
    },
    title:{
      type:String,
      default:()=>{
        return ''
      }
    },
    footer:{
      type:Boolean,
      default:()=>{
        return true
      }
    },
    mode:{
      type:String,
      default:()=>{
        return 'ios'
      }
    }
  },
  computed:{

  },
  mounted(){

  },
  methods:{
    choose(item){
      this.$emit('onChange',item)
      this.$emit('popup-close')
    }
  }
}
</script>

<style lang="scss">
@import './actionSheet.scss';
</style>
