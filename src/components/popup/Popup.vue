<template>
  <div
    class="run-popup"
    :class="this.position=='center'?'center':''"
  >
    <transition name="run-mask">
      <div
        class="run-popup-mask"
        v-if="isPageRead && displayMask"
        @click.self="maskClickHanlde"
      ></div>
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
import { debuglog } from 'util';
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
      let styleObject = [], size;
      if (this.size && this.size !== "full") {
        size = this.size;
      } else if (this.size === "full") {
        size = "100%";
      }
      switch (this.position) {
        case "top":
        case "bottom":
          styleObject.push({
            "width": "100%",
            "height": size,
            "left": 0,
            [this.position]: 0
          });
          break;
        case "left":
        case "right":
          styleObject.push({
            "height": "100%",
            "width": size,
            "top": 0,
            [this.position]: 0
          });
          break;
      }
      return styleObject;
    }
  },
  mounted() {
    this.state = 1;
  },
  destroyed() {
    this.$el.remove();
  },
  methods: {
    popupContainerAfterLeave() {
      this.$emit("onAfterLeave", "afterLeave");
      this.$destroy();
    },
    popupContainerAfterEnter() {
      this.$emit("onAfterEnter", "afterEnter");
    },
    maskClickHanlde() {
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