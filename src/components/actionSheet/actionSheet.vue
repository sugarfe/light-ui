<template>
  <div class="action-sheet">
    <header>{{title}}</header>
    <ul>
      <li v-for="(item, index) in items" :key="index" @click="select(index)">{{item[dataText]}}</li>
    </ul>
    <footer @click="$emit('popup-close')">{{cancelTxt}}</footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      },
    },
    title: {
      type: String,
      default: () => {
        return '';
      },
    },
    cancelTxt: String,
    dataText: String,
    dataValue: String,
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.items = this.data.map(item => {
        let obj = {};
        if (typeof item === 'string') {
          obj[this.dataText] = item;
          obj[this.dataValue] = item;
        } else {
          obj = { ...item };
        }
        return obj;
      });
    },
    cancel() {
      this.$emit('onCancel');
    },
    select(index) {
      this.$emit('onSelect', this.items[index]);
    },
  },
};
</script>

<style lang="scss">
@import './actionSheet.scss';
</style>
