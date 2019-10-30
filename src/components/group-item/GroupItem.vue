<template>
  <ul class="run-list-item-warp">
    <li class="run-list-item">
      <div class="run-list-group-bar">
        <slot name="title"></slot>
      </div>
      <ul
        class="run-list-group-item"
        ref="group-item"
        v-if="autoIteration"
        v-show="isExpand"
      >
        <slot
          v-for="item in data"
          :row="item"
        ></slot>
      </ul>
      <ul
        class="run-list-group-item"
        ref="group-item"
        v-show="isExpand"
        :style="{ height: gheight }"
        v-else
      >
        <slot
          name="group-item"
          :rows="data"
        ></slot>
      </ul>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'GroupItem',
  components: {},
  props: {
    //PS修改：添加type类型String, Object, Array
    data: {
      type: [String, Object, Array],
      default() {
        return ''
      }
    },
    nav: {
      type: String,
      default() {
        return ''
      }
    },
    autoIteration: {
      type: Boolean,
      default() {
        return true
      }
    },
    folding: {
      type: Boolean,
      default() {
        return false
      }
    },
    defaultExpand: {
      type: Boolean,
      default() {
        return true
      }
    }
  },
  data() {
    return {
      height: 0,
      isExpand: true
    }
  },
  computed: {},
  created: function() {
    this.isExpand = this.defaultExpand
  },
  beforeMount: function() {},
  mounted: function() {
    this.height = this.$refs['group-item'].offsetHeight
  },
  beforeDestroy: function() {},
  destroyed: function() {},
  methods: {
    //PS修改：toggleHideHanlde方法的折叠为控制display显示影藏
    toggleHideHanlde() {
      // let el = this.$refs['group-item'];
      // el.style.display = el.offsetHeight > 0 ? 'none' : 'block';
      // this.isExpand = !this.isExpand
      // this.$forceUpdate()
    }
  },
  watch: {},
  directives: {}
}
</script>
