<template>
  <PageContent>
    <Navbar slot="header">Checkbox</Navbar>
    <example-group contentClass="group-content">
      basic
      <template v-slot:content>
        <CheckboxGroup v-model="value1">
          <Checkbox
            :value="item.value"
            v-for="(item, index) in data"
            :key="index"
          >{{ item.text }}</Checkbox>
        </CheckboxGroup>
      </template>
    </example-group>
    <example-group contentClass="group-content">
      right
      <template v-slot:content>
        <CheckboxGroup
          v-model="value2"
          right
        >
          <Checkbox
            :value="item.value"
            v-for="(item, index) in data"
            :key="index"
          >{{ item.text }}</Checkbox>
        </CheckboxGroup>
      </template>
    </example-group>
    <example-group contentClass="group-content">
      horizontal
      <template v-slot:content>
        <CheckboxGroup
          v-model="value3"
          horizontal
        >
          <Checkbox
            :value="item.value"
            v-for="(item, index) in data"
            :key="index"
          >{{ item.text }}</Checkbox>
        </CheckboxGroup>
      </template>
    </example-group>
    <example-group contentClass="group-content">
      horizontal + right
      <template v-slot:content>
        <CheckboxGroup
          v-model="value4"
          horizontal
          right
        >
          <Checkbox
            :value="item.value"
            v-for="(item, index) in data"
            :key="index"
          >{{ item.text }}</Checkbox>
        </CheckboxGroup>
      </template>
    </example-group>
    <example-group contentClass="group-content">
      horizontal + disabled
      <template v-slot:content>
        <CheckboxGroup
          v-model="value5"
          horizontal
          right
        >
          <Checkbox
            :value="item.value"
            v-for="(item, index) in data"
            :key="index"
            :disabled="index === 0"
          >{{ item.text }}</Checkbox>
        </CheckboxGroup>
      </template>
    </example-group>
    <example-group contentClass="group-content">
      single
      <template v-slot:content>
        <Checkbox v-model="value6">single</Checkbox>
      </template>
    </example-group>
  </PageContent>
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
      value6: '001',
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
