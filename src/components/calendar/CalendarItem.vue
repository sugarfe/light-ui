<template>
  <div class="calendar-month-warp">
    <div class="calendar-month-title">{{`${year} 年 ${month} 月`}}</div>
    <ul
      class="calendar-row flex-box"
      v-for="(item, i) in items"
      :key="i"
    >
      <li
        class="calendar-day flex-1"
        v-for="(d, j) in item"
        :class="dynamicClass(d)"
        :key="j"
        @click="selected(d)"
      >
        {{ d.day }}
      </li>
    </ul>
  </div>
</template>
<script>
import { getMonthFullData } from './calendar.service.js'
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
    startDate: {
      type: Object,
      default() {
        return {}
      }
    },
    endDate: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      items: []
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.items = getMonthFullData(this.year, this.month).filter((item) => {
        return item.filter(({ month }) => {
          return this.isCurrentMonth(month)
        }).length > 0
      })
    },
    dynamicClass({ year, month, day, timeStamp }) {
      return {
        // 'calendar-day-selected': this.isCurrentDay(year, month, day),
        'calendar-day-start': timeStamp === this.startDate.timeStamp,
        'calendar-day-end': timeStamp === this.endDate.timeStamp,
        'calendar-day-in': timeStamp > this.startDate.timeStamp && timeStamp < this.endDate.timeStamp,
        'calendar-day-current-month': this.isCurrentMonth(month)
      }
    },
    isCurrentDay(y, m, d) {
      return `${y}${m}${d}` === this.currentDay
    },
    isCurrentMonth(m) {
      return m === this.month
    },
    selected(d) {
      this.$emit('onSelected', d)
    }
  }
}
</script>
<style lang="scss"></style>
