<template>
  <PageContent class="calendar-warp">
    <Navbar
      slot="header"
      :backHandle="backHandle"
    >
      日期选择
      <span
        slot="right"
        class="l-calendar-ok"
        @click="ok"
      >确定</span>
    </Navbar>
    <div class="l-calendar flex-box-column">
      <div class="select-date flex-box flex-align-center">
        <ul class="select-date-info flex-1">
          <li>开始</li>
          <li>{{startDate.timeStamp?startDate.string : '-'}}</li>
        </ul>
        <div class="select-date-step">
          {{days ? `${days}日`:''}}
        </div>
        <ul class="select-date-info flex-1">
          <li>结束</li>
          <li>{{endDate.timeStamp?endDate.string : '-'}}</li>
        </ul>
      </div>
      <ul class="calendar-week-header flex-box flex-justify-space-around">
        <li
          v-for="(w, index) in week"
          :key="index"
          v-text="w.text"
        ></li>
      </ul>
      <div
        class="calendar-contant flex-1"
        ref="scroll"
        @scroll="onScroll"
      >
        <CalendarItem
          v-for="(item, pageIndex) in monthList"
          :key="pageIndex"
          :year="item.year"
          :month="item.month"
          :startDate="startDate"
          :endDate="endDate"
          :days="days"
          @onSelected="onSelectedHandle"
        ></CalendarItem>
      </div>
      <div class="calendar-fooder"></div>
    </div>
  </PageContent>

</template>
<script>
import CalendarItem from './CalendarItem.vue'
import week from './week.json'
import {
  getMonthFullData,
  getDateInfo,
  getMonthList
} from './calendar.service.js'
let scrollHeight = 0,
  isLoadData = false
export default {
  name: 'calendarView',
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
      currentPageIndex: 0,
      currentValue: []
    }
  },
  computed: {
    days() {
      return this.startDate.timeStamp && this.endDate.timeStamp
        ? (this.endDate.timeStamp - this.startDate.timeStamp) / 86400000
        : undefined
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.setValue()
      let { fullYear, month } = getDateInfo(new Date())
      this.loadData(fullYear, month)
    },
    loadData(year, month) {
      ;[...getMonthList(year, month - 1, 1, 6)].map(([year, month]) => {
        this.monthList.push({
          year,
          month
        })
      })
      this.$nextTick(() => {
        scrollHeight =
          this.$refs.scroll.scrollHeight - this.$refs.scroll.clientHeight
        isLoadData = false
      })
    },
    setValue() {
      if (this.range) {
        let [start, end] = Array.isArray(this.value) ? this.value : []
        Object.prototype.toString.call(start) === '[object Date]' &&
          (this.startDate = getDateInfo(start))
        Object.prototype.toString.call(end) === '[object Date]' &&
          (this.endDate = getDateInfo(end))
      }
      this.currentValue = Array.isArray(this.value)
        ? [...this.value]
        : this.value || new Date()
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
    },
    ok() {
      if (this.range && this.startDate.timeStamp && this.endDate.timeStamp) {
        this.$emit('onOk', [this.startDate, this.endDate])
        this.$emit('popup-close')
      }
    },
    backHandle() {
      this.$emit('popup-close')
    },
    onScroll(e) {
      if (scrollHeight - e.target.scrollTop < 50 && !isLoadData) {
        isLoadData = true
        let { year, month } = this.monthList[this.monthList.length - 1]
        this.loadData(year, month)
      }
    }
  },
  watch: {}
}
</script>
<style lang="scss">
@import './calendar.scss';
</style>
