<template>
  <div class="l-calendar flex-box-column">
    <ul class="calendar-week-header flex-box flex-justify-space-around">
      <li
        v-for="(w, index) in week"
        :key="index"
        v-text="w.text"
      ></li>
    </ul>
    <div class="calendar-contant flex-1">
      <div class="calendar-contant-scroll-warp">
        <CalendarItem
          v-for="(item, pageIndex) in monthList"
          :key="pageIndex"
          :year="item.year"
          :month="item.month"
          :startDate="startDate"
          :endDate="endDate"
          @onSelected="onSelectedHandle"
        ></CalendarItem>
      </div>
    </div>
    <div class="calendar-fooder"></div>
  </div>
</template>
<script>
import CalendarItem from './CalendarItem.vue'
import week from './week.json'
import {
  getMonthFullData,
  getDateInfo,
  getMonthList
} from './calendar.service.js'
export default {
  name: 'calendar',
  components: {
    CalendarItem
  },
  props: {
    mode: {
      type: String,
      default() {
        return 'date'
      }
    },
    value: {
      type: [Date, Array],
      default() {
        return new Date()
      }
    },
    range: {
      type: Boolean,
      default() {
        return true
      }
    }
  },
  data() {
    return {
      week,
      monthList: [],
      currentDate: {
        fullYear: undefined,
        month: undefined,
        day: undefined,
        week: undefined,
        string: undefined,
        timeStamp: undefined
      },
      startDate: {
        fullYear: undefined,
        month: undefined,
        day: undefined,
        week: undefined,
        string: undefined,
        timeStamp: undefined
      },
      endDate: {
        fullYear: undefined,
        month: undefined,
        day: undefined,
        week: undefined,
        string: undefined,
        timeStamp: undefined
      },
      selectedDay: '',
      activeIndex: 1,
      currentPageIndex: 0
    }
  },
  computed: {
    todayString() {
      return `${this.currentDate.fullYear}${this.currentDate.month}${this.currentDate.day}`
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.currentDate = getDateInfo(this.value)
      let initMonthList = [
        ...getMonthList(
          this.currentDate.fullYear,
          this.currentDate.month,
          1,
          12
        )
      ]
      initMonthList.map(item => {
        this.generationCurrentMonthData(item)
      })
    },
    generationCurrentMonthData(item) {
      this.monthList.push({
        year: item[0],
        month: item[1]
      })
    },
    onSelectedHandle({ year, month, day }) {
      let dateInfo = getDateInfo(new Date(year, month - 1, day))
      if (
        !this.startDate.timeStamp ||
        (this.startDate.timeStamp && this.endDate.timeStamp)
      ) {
        this.startDate = { ...dateInfo }
        this.endDate.timeStamp = undefined
      } else if (this.startDate.timeStamp < dateInfo.timeStamp) {
        this.endDate = { ...dateInfo }
      } else if (this.startDate.timeStamp > dateInfo.timeStamp) {
        this.endDate = { ...this.startDate }
        this.startDate = { ...dateInfo }
      }
    }
  },
  watch: {
    // "currentDate.month"() {
    //   this.generationCurrentMonthData();
    // }
  }
}
</script>
<style lang="scss">
@import './calendar.scss';
</style>
