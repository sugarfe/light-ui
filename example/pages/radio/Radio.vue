<template>
  <l-page-content>
    <l-navbar>Radio</l-navbar>
    <template v-slot:content>
      <example-group contentClass="group-content">basic
        <template v-slot:content>
          <l-radio-group v-model="value1">
            <l-radio
              :value="item.value"
              v-for="(item, index) in data"
              :key="index"
            >{{ item.text }}</l-radio>
          </l-radio-group>
        </template>
      </example-group>
      <example-group contentClass="group-content">basic + right
        <template v-slot:content>
          <l-radio-group
            v-model="value2"
            right
          >
            <l-radio
              :value="item.value"
              v-for="(item, index) in data"
              :key="index"
            >{{ item.text }}</l-radio>
          </l-radio-group>
        </template>
      </example-group>
      <example-group contentClass="group-content">horizontal
        <template v-slot:content>
          <l-radio-group
            v-model="value3"
            horizontal
          >
            <l-radio
              :value="item.value"
              v-for="(item, index) in data"
              :key="index"
            >{{ item.text }}</l-radio>
          </l-radio-group>
        </template>
      </example-group>
      <example-group contentClass="group-content">horizontal + right
        <template v-slot:content>
          <l-radio-group
            v-model="value4"
            horizontal
            right
          >
            <l-radio
              :value="item.value"
              v-for="(item, index) in data"
              :key="index"
            >{{ item.text }}</l-radio>
          </l-radio-group>
        </template>
      </example-group>
      <example-group contentClass="group-content">horizontal + disabled
        <template v-slot:content>
          <l-radio-group
            v-model="value5"
            horizontal
          >
            <l-radio
              :value="item.value"
              v-for="(item, index) in data"
              :key="index"
              :disabled="index === 0"
            >{{ item.text }}</l-radio>
          </l-radio-group>
        </template>
      </example-group>
    </template>
  </l-page-content>
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
          text: 'JavaScript',
          value: 1
        },
        {
          text: 'CSS',
          value: 2
        },
        {
          text: 'Html',
          value: 3
        }
      ]
    }
  },
  computed: {},
  created: function () { },
  beforeMount: function () { },
  mounted: function () { },
  beforeDestroy: function () { },
  destroyed: function () { },
  methods: {},
  watch: {},
  directives: {}
}
</script>
