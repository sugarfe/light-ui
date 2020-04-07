<template>
  <PageContent class="example-button-page">
    <Navbar slot="header">Input</Navbar>
    <Cell>
      textarea
      <template slot="value">
        <l-switch v-model="textarea"></l-switch>
      </template>
    </Cell>
    <Cell>
      disabled
      <template slot="value">
        <l-switch v-model="disabled"></l-switch>
      </template>
    </Cell>
    <Cell>
      readonly
      <template slot="value">
        <l-switch v-model="readonly"></l-switch>
      </template>
    </Cell>
    <Cell>
      noBorder
      <template slot="value">
        <l-switch v-model="noBorder"></l-switch>
      </template>
    </Cell>
    <example-group contentClass="group-content">
      {{ option || 'basic' }}
      <template v-slot:content>
        <Input
          v-model="value"
          :textarea="textarea"
          :disabled="disabled"
          :noBorder="noBorder"
          :readonly="readonly"
        />
      </template>
    </example-group>
  </PageContent>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      value: '',
      textarea: false,
      disabled: false,
      noBorder: false,
      readonly: false
    }
  },
  computed: {
    option() {
      return ['textarea', 'disabled', 'noBorder', 'readonly']
        .filter(item => {
          return this[item] === true
        })
        .map(item => {
          return `【${item}】`
        })
        .join('')
    }
  }
}
</script>
<style lang="scss"></style>
