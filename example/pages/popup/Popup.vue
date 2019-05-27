<template>
  <run-page-content class="example-popup-page" contentClass="run-flex-box-column">
    <run-navbar>Popup</run-navbar>
    <template v-slot:content>
      <div class="run-flex-1">
        <example-group contentClass="group-content">
          position
          <template v-slot:content>
            <run-radio-group v-model="option.position" right>
              <run-radio
                :value="item"
                v-for="(item,index) in optionData.position"
                :key="index"
              >{{item}}</run-radio>
            </run-radio-group>
          </template>
        </example-group>
        <example-group contentClass="group-content">
          size
          <template v-slot:content>
            <run-radio-group v-model="option.size" right>
              <run-radio :value="item" v-for="(item,index) in optionData.size" :key="index">{{item}}</run-radio>
            </run-radio-group>
          </template>
        </example-group>
      </div>
      <div class="action-panel">
        <run-button block theme="primary" @click="open">打开</run-button>
      </div>
    </template>
  </run-page-content>
</template>
<script>
import PopupModel from "./PopupModel";
export default {
  data() {
    return {
      positionIndex: 0,
      sizeIndex: 0,
      optionData: {
        size: ["100px", "300px", "500px"],
        position: ["top", "bottom", "left", "right", "center"]
      },
      option: {
        size: "100px",
        position: "top"
      }
    };
  },
  mounted() {},
  methods: {
    generateColor() {
      return (
        "#" +
        ("00000" + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6)
      );
    },
    open() {
      new this.$RunPopup(PopupModel, {
        ...this.option,
        onMaskClose: val => {
          console.log(val);
        }
      });
    }
  },
  beforeRouteLeave(to, from, next) {
    next();
  },
  // beforeRouteEnter(to, from, next) {
  //   console.log("beforeRouteEnter");
  //   next();
  // },
  beforeRouteUpdate() {}
};
</script>
<style lang="scss">
@import "./popup";
</style>

