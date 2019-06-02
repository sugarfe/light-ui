<template>
  <div class="calendar-page">
    <ul
      class="calendar-item flex-box"
      v-for="(item, i) in items"
      :key="i"
    >
      <li
        class="calendar-day flex-1"
        v-for="(d, j) in item"
        :class="dynamicClass(d)"
        :key="j"
        @click="selected(d)"
      >{{d.day}}</li>
    </ul>
  </div>
</template>
<script>
import { getMonthFullData } from "./calendar.service.js";
export default {
  props: {
    year: {
      type: Number,
      default: 0
    },
    month: {
      type: Number,
      default: 0
    },
    currentDay: {
      type: String,
      default: 0
    }
  },
  data() {
    return {
      items: []
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.items = getMonthFullData(this.year, this.month);
    },
    dynamicClass({ year, month, day }) {
      return {
        "calendar-day-selected": this.isCurrentDay(year, month, day),
        "calendar-day-current-month": this.isCurrentMonth(month)
      };
    },
    isCurrentDay(y, m, d) {
      return `${y}${m}${d}` === this.currentDay;
    },
    isCurrentMonth(m) {
      return m === this.month;
    },
    selected(d) {
      this.$emit("onSelected", d);
    }
  }
};
</script>
<style lang='scss'>
</style>
