<template>
  <div class="run-popup" :class="this.position=='center'?'center':''">
    <transition name="run-mask">
      <div class="run-popup-mask" v-if="isPageRead && displayMask" @click.self="maskClickHanlde"></div>
    </transition>
    <transition
      :name="'run-popup-' + position"
      @after-leave="popupContainerAfterLeave"
      @after-enter="popupContainerAfterEnter"
    >
      <div
        :class="dynamicClass"
        class="run-popup-container"
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
  name: "run-popup",
  data() {
    return {
      state: -1
    };
  },
  props: {
    position: {
      type: String,
      default() {
        return "center";
      }
    },
    size: {
      type: String,
      default() {
        return "full";
      }
    },
    isMaskClose: {
      type: Boolean,
      default() {
        return true;
      }
    },
    isMask: {
      type: Boolean,
      default() {
        return true;
      }
    },
    distance: {
      type: String,
      default() {
        return "center";
      }
    }
  },

  computed: {
    displayMask() {
      return this.isMask;
    },
    isPageRead() {
      return this.state > -1;
    },
    dynamicClass() {
      return ["run-popup-" + this.position];
    },
    dynamicStyle() {
      let style;
      if (this.size == "full") {
        style = `height:100%;width:100%;top:0;left:0`;
      } else {
        switch (this.position) {
          case "left":
            style = `height:${this.size == "auto" ? this.size : "100%"};width:${
              this.size
            };top:0;left:0`;
            break;
          case "right":
            style = `height:${this.size == "auto" ? this.size : "100%"};width:${
              this.size
            };top:0;right:0`;
            break;
          case "top":
            style = `height:${this.size};width:${
              this.size == "auto" ? this.size : "100%"
            };top:0;left:0`;
            break;
          case "bottom":
            style = `height:${this.size};width:${
              this.size == "auto" ? this.size : "100%"
            };bottom:0;left:0`;
            break;
          case "center":
            style = `height:auto;width:${this.size};`;
            break;
          case "opacity":
            style = `height:auto;width:${
              this.size
            };left:50%;transform: translateX(-50%);${this.positionStyle()}`;
            break;
        }
      }
      return style;
    }
  },
  mounted() {
    this.state = 1;
    console.log("mounted->", this.$store);
  },
  destroyed() {
    this.$el.remove();
  },
  methods: {
    popupContainerAfterLeave() {
      this.$destroy();
      this.$emit("onAfterLeave", "afterLeave");
    },
    popupContainerAfterEnter() {
      this.$emit("onAfterEnter", "afterEnter");
    },
    maskClickHanlde() {
      console.log(this.isMaskClose);
      !!this.isMaskClose && this.close();
    },
    close() {
      this.state = -1;
      this.$emit("onMaskClose", "handle");
    },
    positionStyle() {
      if (this.distance == "") {
        return "";
      } else {
        switch (this.distance) {
          case "top":
            return "top:50px";
          case "center":
            return "top:50%;transform: translate(-50%,-50%)";
          case "bottom":
            return "top:calc(100% - 50px)";
          default:
            return "top:" + this.distance;
        }
      }
    }
  }
};
</script>
<style lang="scss">
@import "./popup.scss";
</style>