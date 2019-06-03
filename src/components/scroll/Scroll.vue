<template>
  <div
    class="l-scroll"
    ref="runScroll"
  >
    <div class="l-scroll-content">
      <div class="list-content">
        <slot></slot>
      </div>
      <slot
        name="pullup"
        :pullUpLoad="pullUpLoad"
        :isPullUpLoad="isPullUpLoad"
      >
        <div
          class="pullup-wrapper"
          v-if="pullUpLoad"
        >
          <div
            class="before-trigger"
            v-if="!isPullUpLoad"
          >
            <span>{{pullUpTxt}}</span>
          </div>
          <div
            class="after-trigger"
            v-else
          >
            <loading></loading>
          </div>
        </div>
      </slot>
    </div>
    <slot
      name="pulldown"
      :pullDownRefresh="pullDownRefresh"
      :pullDownStyle="pullDownStyle"
      :beforePullDown="beforePullDown"
      :isPullingDown="isPullingDown"
      :bubbleY="bubbleY"
    >
      <div
        ref="pulldown"
        class="pulldown-wrapper"
        :style="pullDownStyle"
        v-if="pullDownRefresh"
      >
        <div
          class="before-trigger"
          v-if="beforePullDown"
        >
          下拉更新
        </div>
        <div
          class="after-trigger"
          v-else
        >
          <div
            v-if="isPullingDown"
            class="loading"
          >
            <loading></loading>
          </div>
          <div v-else><span>{{refreshTxt}}</span></div>
        </div>
      </div>
    </slot>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import loading from './loading'
export default {
  name: 'scroll',
  components: {
    loading
  },
  data() {
    return {
      scroll: null,
      beforePullDown: true,
      isRebounding: false,
      isPullingDown: false,
      isPullUpLoad: false,
      pullUpDirty: true,
      pullDownStyle: '',
      bubbleY: 0,
      pullDownInitTop: ''
    }
  },
  props: {
    data: {
      type: Array,
      default: function () {
        return []
      }
    },
    startY: {
      type: Number,
      default: () => {
        return 0
      }
    },
    pullDownRefresh: {
      type: null,
      default: false
    },
    pullUpLoad: {
      type: null,
      default: false
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    listenBeforeScroll: {
      type: Boolean,
      default: false
    },
    listenScrollEnd: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    pullUpTxt() {
      const moreTxt = (this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.more) || '数据已加载~'

      const noMoreTxt = (this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.noMore) || '没有更多数据啦~'

      return this.pullUpDirty ? moreTxt : noMoreTxt
    },
    refreshTxt() {
      return (this.pullDownRefresh && this.pullDownRefresh.txt) || '更新成功'
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.pullDownInitTop = -50
      this.pullDownStyle = `top:${this.pullDownInitTop}px`
      this.initScroll()
    })
  },
  methods: {
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    initScroll() {
      let option = {
        scrollX: false,
        scrollY: true,
        momentum: true,
        bounce: true,
        click: true,
        observeDOM: false,
        pullDownRefresh: this.pullDownRefresh,
        pullUpLoad: this.pullUpLoad
      }
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.runScroll, option)
      } else {
        this.scroll.refresh()
      }
      if (this.listenScroll) {
        this.scroll.on('scroll', (pos) => {
          this.$emit('scroll', pos)
        })
      }

      if (this.listenScrollEnd) {
        this.scroll.on('scrollEnd', (pos) => {
          this.$emit('scroll-end', pos)
        })
      }

      if (this.listenBeforeScroll) {
        this.scroll.on('beforeScrollStart', () => {
          this.$emit('beforeScrollStart')
        })

        this.scroll.on('scrollStart', () => {
          this.$emit('scroll-start')
        })
      }
      if (this.pullDownRefresh) {
        this._initPullDownRefresh()
      }
      if (this.pullUpLoad) {
        this._initPullUpLoad()
      }
    },
    _initPullDownRefresh() {
      this.scroll.on('pullingDown', () => {
        this.beforePullDown = false
        this.isPullingDown = true
        this.$emit('pullingDown')
      })

      this.scroll.on('scroll', (pos) => {
        if (!this.pullDownRefresh) {
          return
        }
        if (this.beforePullDown) {
          this.bubbleY = Math.max(0, pos.y + this.pullDownInitTop)
          this.pullDownStyle = `top:${Math.min(pos.y + this.pullDownInitTop, 10)}px`
        } else {
          this.bubbleY = 0
        }

        if (this.isRebounding) {
          this.pullDownStyle = `top:${10 - (this.pullDownRefresh.stop - pos.y)}px`
        }
      })
    },
    _initPullUpLoad() {
      this.scroll.on('pullingUp', () => {
        this.isPullUpLoad = true
        this.$emit('pullingUp')
      })
    },
    forceUpdate(dirty) {
      if (this.pullDownRefresh && this.isPullingDown) {
        this.isPullingDown = false
        this._reboundPullDown().then(() => {
          this._afterPullDown()
        })
      } else if (this.pullUpLoad && this.isPullUpLoad) {
        this.isPullUpLoad = false
        this.scroll.finishPullUp()
        this.pullUpDirty = dirty
        this.refresh()
      } else {
        this.refresh()
      }
    },
    _reboundPullDown() {
      const { stopTime = 600 } = this.pullDownRefresh
      return new Promise((resolve) => {
        setTimeout(() => {
          this.isRebounding = true
          this.scroll.finishPullDown()
          resolve()
        }, stopTime)
      })
    },
    _afterPullDown() {
      setTimeout(() => {
        this.pullDownStyle = `top:${this.pullDownInitTop}px`
        this.beforePullDown = true
        this.isRebounding = false
        this.refresh()
      }, this.scroll.options.bounceTime)
    }
  },
  watch: {
    data() {
      setTimeout(() => {
        this.forceUpdate(true)
      }, 20)
    }
  }
}
</script>
<style lang="scss">
@import "./scroll.scss";
</style>
