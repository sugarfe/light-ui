<template>
  <div ref="runTabWrap">
    <div
      class="l-tab"
      :style="{ width: wrapWitch }"
    >
      <slot class="item"></slot>
      <div
        class="l-scroll-bar"
        :class="dynamicClass"
        :style="{ left: leftNums, right: rightNums }"
      >
        <span class="l-scroll-bar-chilren"></span>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'Tab',
  inheritAttrs: true,
  data() {
    return {
      index: -1,
      dataLength: this.$children.length, // 子模块的长度
      track: 'general',
      oldActiveIndex: this.value, // 旧的选中下标
      leftNums: '', // 计算左边位移距离
      rightNums: '', // 计算右边位移距离
      wrapWitch: '100%', // 宽度
      scrollInstance: '' // new scroll 实例
    }
  },
  props: {
    value: {
      // 绑定的下标值
      type: [String, Number],
      default: 0
    },
    /*
			isDelay: 可选值 true/false 
			是否要延迟加载，加入延迟加载的话，用户要自己监听selectIndex事件，然后手动去改变绑定的model值
			*/
    isDelay: {
      type: [Boolean],
      default: false
    },
    /*
			scroll: 可选值 true/false 
					是否要开启滚动
			*/
    scroll: {
      type: [Boolean],
      default: false
    },
    /*
				animation：可选值 general |  none | earthworm
				general：常见动效，
				none:无动画，
				earthworm：蚯蚓爬
			*/

    animation: {
      // 动画选则
      type: [String],
      default: 'general'
    },
    /*
				currentNavCalss 选中导航栏下标的样式
			*/

    currentNavCalss: {
      type: [String],
      default: 'active-item-calss'
    },
    /*
				currentBarClass 选中条父级的样式，主要用来控制定位
				currentBarClass span   选中条的样式，控制宽高，颜色，大小等
			*/

    currentBarClass: {
      type: [String],
      default: 'active'
    }
  },
  watch: {
    value(val) {
      this.currentAnimation() // 增加动画
      this.dataLength = this.$children.length //获取子节点长度
      this.getPercentage(this.value, this.dataLength) // 计算位移距离
      this.setChilrenId() // 设置子节点id
      this.addScroll(val)
    }
  },
  computed: {
    dynamicClass() {
      return [
        this.track ? `l-scroll-bar-${this.track}` : '',
        this.currentBarClass
      ]
    }
  },
  mounted() {
    this.dataLength = this.$children.length //获取子节点长度
    this.setChilrenId() // 设置子节点id
    this.getPercentage(this.value, this.dataLength)
    this.scroll && this.bscroll()
  },
  methods: {
    getPercentage(index, dataLength) {
      // 计算宽度
      let leftNum = (100 / dataLength).toFixed(4)
      this.leftNums = leftNum * index + '%'
      this.rightNums = 100 - leftNum * (index - 0 + 1) + '%'
    },
    currentAnimation() {
      // 选择动画
      switch (this.animation) {
        case 'earthworm':
          this.track =
            this.value > this.oldActiveIndex
              ? 'earthworm-forward'
              : 'earthworm-back'
          this.oldActiveIndex = this.value
          break
        case 'none':
          this.track = ''
          break
        case 'general':
          this.track = 'general'
          break
        default:
          this.track = 'general'
      }
    },
    setChilrenId() {
      // 设置子节点id
      let clientWidth = 0
      this.$children.map((item, index) => {
        // 设置 子节点的id
        clientWidth += item.$el.clientWidth
        if (this.value == index) {
          item.setItem(index, this.value)
        } else {
          item.setItem(index)
        }
      })
      this.wrapWitch = clientWidth + 'px'
    },
    selectIndex(val) {
      // 选择下标  供子组件调用
      if (this.isDelay) {
        this.$emit('selectIndex', val)
      } else {
        this.$children[val].setInput()
      }
    },
    bscroll() {
      // 使用横向滚动
      this.$nextTick(() => {
        this.scrollInstance = new BScroll(this.$refs['runTabWrap'], {
          scrollX: true,
          click: true
        })
        this.addScroll(this.value)
      })
    },
    addScroll(index) {
      // 增加滚动 自动展示在中间
      if (this.scroll) {
        this.scrollInstance.scrollToElement(
          this.$children[index].$el,
          300,
          true
        )
      }
    }
  }
}
</script>

<style lang="scss">
@import './tab.scss';
</style>
