<template>
  <div class="run-picker run-flex-box-column">
    <div class="run-picker-top run-display-flex run-align-center">
      <span @click="cancel">取消</span>
      <span class="run-picker-title run-flex-1"></span>
      <span @click="ok">确定</span>
    </div>
    <div
      class="run-picker-contant run-flex-1 run-display-flex"
      ref="run-picker-scroll-wrapper"
      v-show="data.length > 0"
    >
      <div v-for="(item, index) in data" :key="index">
        <ul class="run-picker-wheel-scroll">
          <li v-for="(o,i) in item" class="wheel-item" :key="i" v-text="o[dataText]"></li>
        </ul>
      </div>
      <span class="run-picker-mask run-picker-mask-top"></span>
      <span class="run-picker-mask run-picker-mask-bottom"></span>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
let option;
export default {
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    dataText: {
      type: String,
      default() {
        return "text";
      }
    },
    dataValue: {
      type: [String],
      default() {
        return "value";
      }
    },
    value: {
      type: [String, Array],
      default() {
        return undefined;
      }
    }
  },
  data() {
    return {};
  },
  created() {
    option = {
      wheels: [],
      values: undefined,
      selectedIndex: []
    };
    console.warn(this.value);
  },
  mounted() {
    this.data.length && this.init();
  },
  destroyed() {
    option.wheels.forEach(scrollInstance => {
      scrollInstance.destroy();
    });
  },
  methods: {
    init() {
      this.initSelectedIndex();
      console.log(option.selectedIndex);
      this.data.forEach((item, index) => {
        option.wheels[index] = new BScroll(
          this.$refs["run-picker-scroll-wrapper"].children[index],
          {
            wheel: {
              selectedIndex: option.selectedIndex[index]
            },
            probeType: 3
          }
        );
      });
    },
    initSelectedIndex() {
      let values = [];
      if (typeof this.value === "string") {
        values = [this.value];
      } else if (typeof this.value === "object") {
        values = [...this.value];
      }
      this.data.forEach((item, index) => {
        let i = item.findIndex(o => {
          return o[this.dataValue] === values[index];
        });
        option.selectedIndex[index] = ~i ? i : 0;
      });
    },
    ok() {
      option.wheels.forEach((scrollInstance, i) => {
        option.selectedIndex[i] = scrollInstance.getSelectedIndex();
      });
      let values = option.selectedIndex.map((selectedIndex, i) => {
        return this.data[i][selectedIndex][this.dataValue];
      });
      let text = option.selectedIndex.map((selectedIndex, i) => {
        return this.data[i][selectedIndex][this.dataText];
      });
      this.$emit("onOk", {
        values,
        text,
        selectedIndex: option.selectedIndex
      });
    },
    cancel() {
      this.$emit("popup-close");
    }
  }
};
</script>
<style lang='scss'>
@import "./picker.scss";
</style>
