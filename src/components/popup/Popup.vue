<template>
  <div
    v-show="isPageRead || state === 0"
    class="l-popup"
    :class="this.position == 'center' ? 'center' : ''"
  >
    <transition name="l-mask">
      <div
        class="l-popup-mask"
        v-show="isPageRead && isMask"
        @click.self="maskClickHanlde"
      ></div>
    </transition>
    <transition
      :name="'l-popup-' + position"
      @after-leave="popupContainerAfterLeave"
      @after-enter="popupContainerAfterEnter"
    >
      <div
        :class="dynamicClass"
        class="l-popup-container"
        @click.self="maskClickHanlde"
        :style="dynamicStyle"
        v-show="isPageRead"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'l-popup',
  data() {
    return {
      state: -1,
      isClose: false
    }
  },
  props: {
    position: {
      type: String,
      default() {
        return 'center'
      }
    },
    isMaskClose: {
      type: Boolean,
      default() {
        return true
      }
    },
    isMask: {
      type: Boolean,
      default() {
        return true
      }
    },
    distance: {
      type: String,
      default() {
        return 'center'
      }
    },
    autoShow: {
      type: Boolean,
      default() {
        return true
      }
    },
    size: {
      type: String,
      default() {
        return undefined
      }
    }
  },
  computed: {
    isPageRead() {
      return this.state > 0
    },
    dynamicClass() {
      return ['l-popup-' + this.position]
    },
    dynamicStyle() {
      let styleObject = []
      switch (this.position) {
        case 'top':
        case 'bottom':
          styleObject.push({
            width: '100%',
            height: this.size || 'auto',
            left: 0,
            [this.position]: 0
          })
          break
        case 'left':
        case 'right':
          styleObject.push({
            height: '100%',
            width: this.size || 'auto',
            top: 0,
            [this.position]: 0
          })
          break
      }
      return styleObject
    }
  },
  mounted() {
    this.autoShow && (this.state = 1)
  },
  destroyed() {
    this.$el.remove()
  },
  methods: {
    popupContainerAfterLeave() {
      this.isClose && this.$destroy()
      this.state = -1
    },
    popupContainerAfterEnter() {},
    maskClickHanlde() {
      !!this.isMaskClose && this.close()
    },
    show() {
      this.state = 1
    },
    hide() {
      this.state = 0
    },
    close() {
      this.hide()
      this.isClose = true
      this.$emit('onClose')
    },
    positionStyle() {
      if (this.distance == '') {
        return ''
      } else {
        switch (this.distance) {
          case 'top':
            return 'top:50px'
          case 'center':
            return 'top:50%;transform: translate(-50%,-50%)'
          case 'bottom':
            return 'top:calc(100% - 50px)'
          default:
            return 'top:' + this.distance
        }
      }
    }
  }
}
</script>
<style lang="scss">
@import './popup.scss';
</style>
