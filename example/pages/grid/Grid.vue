<template>
  <l-page-content>
    <l-navbar slot="header">Grid</l-navbar>
    <example-group contentClass="group-content">
      col
      <template v-slot:content>
        <l-radio-group
          v-model="option.col"
          horizontal
        >
          <l-radio :value="1">1</l-radio>
          <l-radio :value="2">2</l-radio>
          <l-radio :value="3">3</l-radio>
          <l-radio :value="4">4</l-radio>
          <l-radio :value="6">6</l-radio>
          <l-radio :value="10">10</l-radio>
        </l-radio-group>
      </template>
    </example-group>
    <example-group contentClass="group-content">
      square
      <template v-slot:content>
        <l-checkbox-group
          v-model="option.square"
          right
        >
          <l-checkbox :value="1">square</l-checkbox>
        </l-checkbox-group>
      </template>
    </example-group>
    <example-group contentClass="group-content">
      col 4 square
      <template v-slot:content>
        <l-grid
          ref="grid"
          :col="option.col"
          :square="!!option.square[0]"
          spacing="1px"
          vertical="1px"
        >
          <l-grid-item
            v-for="item in data"
            :key="item"
            class="grid-item flex-box-center"
          >{{item}}</l-grid-item>
        </l-grid>
      </template>
    </example-group>
  </l-page-content>
</template>
<script>
import { debuglog } from 'util'
export default {
  data() {
    return {
      data: 10,
      option: {
        col: 2,
        square: [1]
      }
    }
  }
}
</script>
<style lang="scss" >
.grid-item {
  background-color: #ffb403;
  color: #fff;
}
</style>
