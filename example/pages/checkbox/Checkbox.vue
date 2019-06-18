<template>
  <l-page-content>
    <l-navbar slot="header">Checkbox</l-navbar>
    <example-group contentClass="group-content">
      basic
      <template v-slot:content>
        <l-checkbox-group v-model="value1">
          <l-checkbox
            :value="item.value"
            v-for="(item, index) in data"
            :key="index"
          >{{ item.text }}</l-checkbox>
        </l-checkbox-group>
      </template>
    </example-group>
    <example-group contentClass="group-content">
      right
      <template v-slot:content>
        <l-checkbox-group
          v-model="value2"
          right
        >
          <l-checkbox
            :value="item.value"
            v-for="(item, index) in data"
            :key="index"
          >{{ item.text }}</l-checkbox>
        </l-checkbox-group>
      </template>
    </example-group>
    <example-group contentClass="group-content">
      horizontal
      <template v-slot:content>
        <l-checkbox-group
          v-model="value3"
          horizontal
        >
          <l-checkbox
            :value="item.value"
            v-for="(item, index) in data"
            :key="index"
          >{{ item.text }}</l-checkbox>
        </l-checkbox-group>
      </template>
    </example-group>
    <example-group contentClass="group-content">
      horizontal + right
      <template v-slot:content>
        <l-checkbox-group
          v-model="value4"
          horizontal
          right
        >
          <l-checkbox
            :value="item.value"
            v-for="(item, index) in data"
            :key="index"
          >{{ item.text }}</l-checkbox>
        </l-checkbox-group>
      </template>
    </example-group>
    <example-group contentClass="group-content">
      horizontal + disabled
      <template v-slot:content>
        <l-checkbox-group
          v-model="value5"
          horizontal
          right
        >
          <l-checkbox
            :value="item.value"
            v-for="(item, index) in data"
            :key="index"
            :disabled="index === 0"
          >{{ item.text }}</l-checkbox>
        </l-checkbox-group>
      </template>
    </example-group>
  </l-page-content>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      value1: [1],
      value2: [1],
      value3: [1],
      value4: [1],
      value5: [1],
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
  }
}
</script>
