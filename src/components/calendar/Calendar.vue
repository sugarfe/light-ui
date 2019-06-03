<template>
  <div class="l-calendar">
    <div class="calendar-toolbar flex-box">
      <div class></div>
      <div class="flex-1"></div>
      <div class></div>
      <div class="calendar-title flex-box-center">{{`${currentDate.fullYear}-${currentDate.month}`}}</div>
    </div>
    <ul class="calendar-week-header flex-box flex-justify-space-around">
      <li
        v-for="(w, index) in week"
        :key="index"
        v-text="w.text"
      ></li>
    </ul>
    <div
      class="calendar-contant"
      ref="calendar"
    >
      <div
        class="calendar-contant-scroll-warp"
        ref="calendar-warp"
      >
        <CalendarItem
          :style="dynamicStyle"
          v-for="(item, pageIndex) in pages"
          :key="pageIndex"
          :year="item.year"
          :month="item.month"
          :currentDay="todayString"
          @onSelected="onSelectedHandle"
        ></CalendarItem>
      </div>
    </div>
    <div class="calendar-fooder"></div>
  </div>
</template>
<script>
import CalendarItem from "./CalendarItem.vue";
import week from "./week.json";
import {
  getMonthFullData,
  getDateInfo,
  getMonthList
} from "./calendar.service.js";
import BScroll from "better-scroll";
let scroll;
export default {
  name: "calendar",
  components: {
    CalendarItem
  },
  props: {
    mode: {
      type: String,
      default() {
        return "date";
      }
    },
    value: {
      type: [Date, Array],
      default() {
        return new Date();
      }
    },
    range: {
      type: Boolean,
      default() {
        return true;
      }
    }
  },
  data() {
    return {
      week,
      pages: [],
      currentDate: {
        fullYear: undefined,
        month: undefined,
        day: undefined,
        week: undefined,
        string: undefined
      },
      selectedDay: "",
      dynamicStyle: {
        width: "auto"
      },
      activeIndex: 1,
      currentPageIndex: 0
    };
  },
  computed: {
    todayString() {
      return `${this.currentDate.fullYear}${this.currentDate.month}${
        this.currentDate.day
        }`;
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.currentDate = getDateInfo(this.value);
      // this.generationCurrentMonthData(
      //   this.currentDate.fullYear,
      //   this.currentDate.month - 1
      // );
      // this.generationCurrentMonthData(
      //   this.currentDate.fullYear,
      //   this.currentDate.month
      // );
      // this.generationCurrentMonthData(
      //   this.currentDate.fullYear,
      //   this.currentDate.month + 1
      // );
      let initMonthList = [
        ...getMonthList(
          this.currentDate.fullYear,
          this.currentDate.month,
          0,
          3
        ),
        [this.currentDate.fullYear, this.currentDate.month],
        ...getMonthList(this.currentDate.fullYear, this.currentDate.month, 1, 3)
      ];
      console.log(initMonthList);
      initMonthList.map(item => {
        this.generationCurrentMonthData(item);
      });
      getMonthList(2019, 4, 0, 6);
      getMonthList(2019, 4, 1, 12);
      this.$nextTick(() => {
        let width = this.$refs["calendar"].offsetWidth;
        this.dynamicStyle.width = `${width}px`;
        this.setCalendarWarpWidth(width);
        this.initScroll();
      });
    },
    initScroll() {
      scroll = new BScroll(this.$refs["calendar"], {
        scrollX: true,
        scrollY: false,
        momentum: false,
        bounce: false,
        // eventPassthrough: this.allowVertical ? "vertical" : "",
        snap: {
          loop: false,
          threshold: 0.3,
          speed: 400
        },
        click: true,
        observeDOM: false
      });
    },
    setCalendarWarpWidth(width) {
      this.$refs["calendar-warp"].style.width = `${(
        this.pages.length * width
      ).toFixed(2)}px`;
    },
    generationCurrentMonthData(item) {
      this.pages.push({
        year: item[0],
        month: item[1]
      });
    },
    onSelectedHandle({ year, month, day }) {
      this.currentDate = getDateInfo(new Date(year, month - 1, day));
    }
  },
  watch: {
    // "currentDate.month"() {
    //   this.generationCurrentMonthData();
    // }
  }
};
</script>
<style lang='scss'>
@import "./calendar.scss";
</style>
