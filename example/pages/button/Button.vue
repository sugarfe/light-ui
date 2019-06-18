<template>
  <l-page-content class="example-button-page">
    <l-navbar slot="header">Button</l-navbar>
    <example-group contentClass="group-content">
      block + size
      <template v-slot:content>
        <l-button
          block
          size="small"
        >block small</l-button>
        <l-button block>block default</l-button>
        <l-button
          block
          size="large"
        >block large</l-button>
      </template>
    </example-group>
    <example-group contentClass="group-content">
      block + theme
      <template v-slot:content>
        <l-button
          block
          theme="primary"
        >primary</l-button>
        <l-button
          block
          theme="success"
        >success</l-button>
        <l-button
          block
          theme="warning"
        >warning</l-button>
        <l-button
          block
          theme="alert"
        >alert</l-button>
      </template>
    </example-group>
    <example-group contentClass="group-content">
      block + theme + light
      <template v-slot:content>
        <l-button
          block
          light
        >light default</l-button>
        <l-button
          block
          light
          theme="primary"
        >light primary</l-button>
        <l-button
          block
          light
          theme="success"
        >light success</l-button>
        <l-button
          block
          light
          theme="warning"
        >light warning</l-button>
        <l-button
          block
          light
          theme="alert"
        >light alert</l-button>
      </template>
    </example-group>
    <example-group contentClass="group-content">
      disabled
      <template v-slot:content>
        <l-button
          block
          disabled
        >disabled</l-button>
      </template>
    </example-group>

    <example-group contentClass="group-content">
      size
      <template v-slot:content>
        <l-button size="small">small</l-button>
        <l-button>dufault</l-button>
        <l-button size="large">large</l-button>
      </template>
    </example-group>
    <example-group contentClass="group-content">
      theme
      <template v-slot:content>
        <l-button>dufault</l-button>
        <l-button theme="primary">primary</l-button>
        <l-button theme="success">success</l-button>
        <l-button theme="warning">warning</l-button>
        <l-button theme="alert">alert</l-button>
      </template>
    </example-group>
    <example-group contentClass="group-content">
      theme + light
      <template v-slot:content>
        <l-button light>dufault</l-button>
        <l-button
          theme="primary"
          light
        >primary</l-button>
        <l-button
          theme="success"
          light
        >success</l-button>
        <l-button
          theme="warning"
          light
        >warning</l-button>
        <l-button
          theme="alert"
          light
        >alert</l-button>
      </template>
    </example-group>
  </l-page-content>
</template>
<script>
export default {}
</script>
<style lang="scss">
@import './button.scss';
</style>
