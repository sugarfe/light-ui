<template>
  <div class="run-dialog" :class="mode=='ios'?'run-dialog-theme-ios':'run-dialog-theme-default'">
    <header class="run-dialog-header" v-if="title">
      {{title}}
    </header>
    <section class="run-dialog-section center">
      <template v-if="message">
        {{message}}
      </template>
      <dialog-content v-else></dialog-content>
    </section>
    <footer v-if="footer" class="run-dialog-footer run-flex-box">
      <div class="button-cancel" @click="cancel" v-if="cancelText">
        {{cancelText}}
      </div>
      <div class="button-submit" @click="submit" v-if="submitText">
        {{submitText}}
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  // name:'dialog',
  data(){
    return {}
  },
  props:{
    mode:{
      type:String,
      default:()=>{
        return 'ios'
      }
    },
    title:{
      type:String | Boolean,
      default:()=>{
        return '温馨提示'
      },
    },
    footer:{
      type:Boolean,
      default:()=>{
        return true
      },
    },
    cancelText:{
      type:String,
      default:()=>{
        return '取消'
      }
    },
    submitText:{
      type:String,
      default:()=>{
        return '确认'
      }
    },
    message:{
      type:String,
      default:()=>{
        return ''
      }
    },
  },
  methods:{
    submit(){
      this.$emit('onOk','ok')
      this.handle()
    },
    cancel(){
      this.$emit('onCancel','cancel')
      this.handle()
    },
    handle(){
      this.$emit('onHandle','handle')
      this.$emit('popup-close')
    }
  },
  
}
</script>
<style lang="scss">
@import './dialog.scss';
</style>

