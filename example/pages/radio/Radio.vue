<template>
  <run-page-content>
    <run-navbar>Radio</run-navbar>
    <template v-slot:content>
      <example-group contentClass="group-content">basic
        <template v-slot:content>
          <run-radio-group v-model="value1">
            <run-radio :value="item.value" v-for="(item,index) in data" :key="index">{{item.text}}</run-radio>
          </run-radio-group>
        </template>
      </example-group>
      <example-group contentClass="group-content">basic + right
        <template v-slot:content>
          <run-radio-group v-model="value2" right>
            <run-radio :value="item.value" v-for="(item,index) in data" :key="index">{{item.text}}</run-radio>
          </run-radio-group>
        </template>
      </example-group>
      <example-group contentClass="group-content">horizontal
        <template v-slot:content>
          <run-radio-group v-model="value3" horizontal>
            <run-radio :value="item.value" v-for="(item,index) in data" :key="index">{{item.text}}</run-radio>
          </run-radio-group>
        </template>
      </example-group>
      <example-group contentClass="group-content">horizontal + right
        <template v-slot:content>
          <run-radio-group v-model="value4" horizontal right>
            <run-radio :value="item.value" v-for="(item,index) in data" :key="index">{{item.text}}</run-radio>
          </run-radio-group>
        </template>
      </example-group>
      <example-group contentClass="group-content">horizontal + disabled
        <template v-slot:content>
          <run-radio-group v-model="value5" horizontal>
            <run-radio
              :value="item.value"
              v-for="(item,index) in data"
              :key="index"
              :disabled="index === 0"
            >{{item.text}}</run-radio>
          </run-radio-group>
        </template>
      </example-group>
    </template>
  </run-page-content>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      value1: 1,
      value2: 1,
      value3: 1,
      value4: 1,
      value5: 1,
      data: [
        {
          text: "JavaScript",
          value: 1
        },
        {
          text: "CSS",
          value: 2
        },
        {
          text: "Html",
          value: 3
        }
      ]
    };
  },
  computed: {},
  created: function() {},
  beforeMount: function() {},
  mounted: function() {},
  beforeDestroy: function() {},
  destroyed: function() {},
  methods: {},
  watch: {},
  directives: {}
};
</script>
