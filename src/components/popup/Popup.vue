<template>
  <div
    v-show="isPageRead || state === 0"
    class="l-popup"
    :class="{ 'l-popup-warp-center': this.position === 'center' }"
  >
    <transition name="l-mask">
      <div
        class="l-popup-mask"
        v-show="isPageRead && isMask"
        @click.self="maskClickHanlde"
      ></div>
    </transition>
    <transition
      :name="transitionName"
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
    },
    offset: {
      type: String,
      default() {
        return undefined
      }
    },
    transition: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    transitionName() {
      return this.transition ? `l-popup-${this.position}` : undefined
    },
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
            [this.position]: this.offset || 0
          })
          break
        case 'left':
        case 'right':
          styleObject.push({
            height: '100%',
            width: this.size || 'auto',
            top: 0,
            [this.position]: this.offset || 0
          })
          break
      }
      return styleObject
    }
  },
  mounted() {
    console.log(this.transitionName, this.transition)
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
    }
  }
}
</script>
<style lang="scss">
@import './popup.scss';
</style>
