<template>
  <run-page-content>
    <run-navbar>switch</run-navbar>
    <template v-slot:content>
      <example-group contentClass="group-content">
        default
        <template v-slot:content>
          <div class="river">
            <run-switch v-model="valueDefault"></run-switch>
          </div>
        </template>
      </example-group>
      <example-group contentClass="group-content">
        select list
        <template v-slot:content>
          <div class="river">
            <run-switch v-model="selectList1"></run-switch>
          </div>
          <div class="river">
            <run-switch v-model="selectList2"></run-switch>
          </div>
        </template>
      </example-group>
      <example-group contentClass="group-content">
        disabled
        <template v-slot:content>
          <div class="river">
            <run-switch v-model="valueDisable" :disabled="disabled"></run-switch>
          </div>
        </template>
      </example-group>
      <example-group contentClass="group-content">
        preventDefault 延迟执行
        <template v-slot:content>
          <div class="river">
            <run-switch preventDefault v-model="valuePrevent" @preventClick="preventClick"></run-switch>
          </div>
        </template>
      </example-group>
    </template>
  </run-page-content>
</template>

<script>
export default {
  data() {
    return {
      valueDefault: true,
      selectList1: true,
      selectList2: false,
      valueDisable: false,
      valuePrevent: false,
      disabled: true
    };
  },
  methods: {
    preventClick(val) {
      console.log(val);
      setTimeout(() => {
        this.valuePrevent = !this.valuePrevent;
      }, 1000);
    }
  }
};
</script>

<style lang="scss">
p {
  background-color: #eee;
  color: #666;
  padding: 10px 20px;
}
.river {
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
