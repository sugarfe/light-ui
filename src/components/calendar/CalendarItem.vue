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
        <span> {{ d.day }}</span>
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
      default() {
        return 0
      }
    },
    month: {
      type: Number,
      default() {
        return 0
      }
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
    },
    days: {
      type: Number,
      default() {
        return undefined
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
      this.items = getMonthFullData(this.year, this.month).filter(item => {
        return (
          item.filter(({ month }) => {
            return this.isCurrentMonth(month)
          }).length > 0
        )
      })
    },
    dynamicClass({ year, month, day, timeStamp }) {
      let isStartDay = false,
        isEndDay = false,
        isEndDayPrevious = false
      if (this.startDate.timeStamp) {
        isStartDay = timeStamp === this.startDate.timeStamp
      }
      if (this.endDate.timeStamp) {
        isEndDay = timeStamp === this.endDate.timeStamp
        isEndDayPrevious = this.endDate.timeStamp - 86400000 === timeStamp
      }
      return {
        // 'calendar-day-selected': this.isCurrentDay(year, month, day),
        'calendar-day-start': isStartDay,
        'calendar-day-end': isEndDay && this.days !== 1,
        'calendar-day-end-one-day': isEndDay && this.days === 1,
        'calendar-day-in-start':
          isStartDay && this.endDate.timeStamp && this.days > 2,
        'calendar-day-in-two-day':
          timeStamp > this.startDate.timeStamp &&
          timeStamp < this.endDate.timeStamp &&
          this.days === 2,
        //选中的日期时间段
        'calendar-day-in':
          timeStamp > this.startDate.timeStamp &&
          timeStamp < this.endDate.timeStamp,
        'calendar-day-end-previous': isEndDayPrevious && this.days > 2,
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
