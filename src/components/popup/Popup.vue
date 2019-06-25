<template>
  <div
    class="l-popup"
    :class="this.position == 'center' ? 'center' : ''"
  >
    <transition name="l-mask">
      <div
        class="l-popup-mask"
        v-if="isPageRead && displayMask"
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
        v-if="isPageRead"
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
      state: -1
    }
  },
  props: {
    position: {
      type: String,
      default() {
        return 'center'
      }
    },
    size: {
      type: String,
      default() {
        return 'full'
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
    }
  },
  computed: {
    displayMask() {
      return this.isMask
    },
    isPageRead() {
      return this.state > -1
    },
    dynamicClass() {
      return ['l-popup-' + this.position]
    },
    dynamicStyle() {
      let styleObject = [],
        size
      if (this.size && this.size !== 'full') {
        size = this.size
      } else if (this.size === 'full') {
        size = '100%'
      }
      switch (this.position) {
        case 'top':
        case 'bottom':
          styleObject.push({
            width: '100%',
            height: 'auto',
            left: 0,
            [this.position]: 0
          })
          break
        case 'left':
        case 'right':
          styleObject.push({
            height: '100%',
            width: 'auto',
            top: 0,
            [this.position]: 0
          })
          break
      }
      return styleObject
    }
  },
  mounted() {
    this.state = 1
  },
  destroyed() {
    this.$el.remove()
  },
  methods: {
    popupContainerAfterLeave() {
      this.$destroy()
    },
    popupContainerAfterEnter() {},
    maskClickHanlde() {
      !!this.isMaskClose && this.close()
    },
    close() {
      this.state = -1
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
