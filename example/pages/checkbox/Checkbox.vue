<template>
  <run-page-content>
    <run-navbar>Checkbox</run-navbar>
    <template v-slot:content>
      <example-group contentClass="group-content">
        basic
        <template v-slot:content>
          <run-checkbox-group v-model="value1">
            <run-checkbox
              :value="item.value"
              v-for="(item,index) in data"
              :key="index"
            >{{item.text}}</run-checkbox>
          </run-checkbox-group>
        </template>
      </example-group>
      <example-group contentClass="group-content">
        right
        <template v-slot:content>
          <run-checkbox-group
            v-model="value2"
            right
          >
            <run-checkbox
              :value="item.value"
              v-for="(item,index) in data"
              :key="index"
            >{{item.text}}</run-checkbox>
          </run-checkbox-group>
        </template>
      </example-group>
      <example-group contentClass="group-content">
        horizontal
        <template v-slot:content>
          <run-checkbox-group
            v-model="value3"
            horizontal
          >
            <run-checkbox
              :value="item.value"
              v-for="(item,index) in data"
              :key="index"
            >{{item.text}}</run-checkbox>
          </run-checkbox-group>
        </template>
      </example-group>
      <example-group contentClass="group-content">
        horizontal + right
        <template v-slot:content>
          <run-checkbox-group
            v-model="value4"
            horizontal
            right
          >
            <run-checkbox
              :value="item.value"
              v-for="(item,index) in data"
              :key="index"
            >{{item.text}}</run-checkbox>
          </run-checkbox-group>
        </template>
      </example-group>
      <example-group contentClass="group-content">
        horizontal + disabled
        <template v-slot:content>
          <run-checkbox-group
            v-model="value5"
            horizontal
            right
          >
            <run-checkbox
              :value="item.value"
              v-for="(item,index) in data"
              :key="index"
              :disabled="index === 0"
            >{{item.text}}</run-checkbox>
          </run-checkbox-group>
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
      value1: [1],
      value2: [1],
      value3: [1],
      value4: [1],
      value5: [1],
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
  }
};
</script>
