<template>
  <run-page-content class="example-dialog-page">
    <run-navbar>Dialog</run-navbar>
    <template v-slot:content>
      <example-group contentClass="group-content">
        title
        <template v-slot:content>
          <run-button size="small" @click="click(1)" >default-title</run-button>
          <run-button size="small" @click="click(2)" >no-title</run-button>
          <run-button size="small" @click="click(3)" >自定义-title</run-button>
        </template>
      </example-group>
      <example-group contentClass="group-content">
        message
        <template v-slot:content>
          <run-button size="small" @click="click(4)" >自定义-message</run-button>
        </template>
      </example-group>
      <example-group contentClass="group-content">
        footer
        <template v-slot:content>
          <run-button size="small" @click="click(5)" >default-footer</run-button>
          <run-button size="small" @click="click(6)" >no-footer</run-button>
        </template>
      </example-group>
      <example-group contentClass="group-content">
        mask
        <template v-slot:content>
          <run-button size="small" @click="click(7)" >default-mask</run-button>
          <run-button size="small" @click="click(8)" >no-mask</run-button>
        </template>
      </example-group>
      <example-group contentClass="group-content">
        点击dialog区域外是否关闭
        <template v-slot:content>
          <run-button size="small" @click="click(9)" >default-close</run-button>
          <run-button size="small" @click="click(10)" >no-close</run-button>
        </template>
      </example-group>
      <example-group contentClass="group-content">
        footer按钮显示
        <template v-slot:content>
          <run-button size="small" @click="click(1)" >default-button</run-button>
          <run-button size="small" @click="click(11)" >only-cancel</run-button>
          <run-button size="small" @click="click(12)" >only-submit</run-button>
        </template>
      </example-group>
      <example-group contentClass="group-content">
        footer按钮文字展示
        <template v-slot:content>
          <run-button size="small" @click="click(13)" >自定义-cancelText</run-button>
          <run-button size="small" @click="click(14)" >自定义-submitText</run-button>
        </template>
      </example-group>
      <example-group contentClass="group-content">
        自动关闭
        <template v-slot:content>
          <run-button size="small" @click="click(15)" >duration</run-button>
        </template>
      </example-group>
      <example-group contentClass="group-content">
        支持传入render
        <template v-slot:content>
          <run-button size="small" @click="click(16)" >render</run-button>
        </template>
      </example-group>
      <example-group contentClass="group-content">
        支持回调
        <template v-slot:content>
          <run-button size="small" @click="click(17)" >ok</run-button>
          <run-button size="small" @click="click(18)" >cancel</run-button>
          <run-button size="small" @click="click(19)" >handle</run-button>
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
    click(flag){
      switch (flag){
        case 1:
          new this.$RunDialog({
            message:'dialog'
          })
          break;
        case 2:
          new this.$RunDialog({
            title:false,
            message:'dialog'
          })
          break;
        case 3:
          new this.$RunDialog({
            title:'自定义标题',
            message:'dialog'
          })
          break;
        case 4:
          new this.$RunDialog({
            message:'自定义message'
          })
          break;
        case 5:
          new this.$RunDialog({
            message:'default-footer'
          })
          break;
        case 6:
          new this.$RunDialog({
            message:'no-footer',
            footer:false
          })
          break;
        case 8:
          new this.$RunDialog({
            message:'dialog',
            isMask:false,
          })
          break;
        case 10:
          new this.$RunDialog({
            message:'dialog',
            isMaskClose:false,
          })
          break;
        case 11:
          new this.$RunDialog({
            message:'dialog',
            submitText:''
          })
          break;
        case 12:
          new this.$RunDialog({
            message:'dialog',
            cancelText:''
          })
          break;
        case 13:
          new this.$RunDialog({
            message:'dialog',
            isMask:false,
            cancelText:'自定义cancelText'
          })
          break;
        case 14:
          new this.$RunDialog({
            message:'dialog',
            submitText:'自定义submitText'
          })
          break;
        case 15:
          new this.$RunDialog({
            message:'dialog',
            duration:1000
          })
          break;
        case 16:
          new this.$RunDialog({
            render:(h)=>{
              return h('div',{},'renderDialog')
            },
          })
          break;
        case 17:
          new this.$RunDialog({
            message:'dialog',
            ok(){
              alert('ok')
            }
          })
          break;
        case 18:
          new this.$RunDialog({
            message:'dialog',
            cancel(){
              alert('cancel')
            }
          })
          break;
        case 19:
          new this.$RunDialog({
            message:'dialog',
            footer:false,
            handle(){
              alert('handle')
            }
          })
          break;
        default:
          new this.$RunDialog({
            message:'dialog',
          })
          break;
      }
      
    },
  }
}
</script>
