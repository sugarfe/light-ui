<template>
  <run-page-content class="example-button-page">
    <run-navbar>Button</run-navbar>
    <template v-slot:content>
      <example-group contentClass="group-content">
        block + size
        <template v-slot:content>
          <run-button block size="small">block small</run-button>
          <run-button block>block default</run-button>
          <run-button block size="large">block large</run-button>
        </template>
      </example-group>
      <example-group contentClass="group-content">
        block + theme
        <template v-slot:content>
          <run-button block theme="primary">primary</run-button>
          <run-button block theme="success">success</run-button>
          <run-button block theme="warning">warning</run-button>
          <run-button block theme="alert">alert</run-button>
        </template>
      </example-group>
      <example-group contentClass="group-content">
        block + theme + light
        <template v-slot:content>
          <run-button block light>light default</run-button>
          <run-button block light theme="primary">light primary</run-button>
          <run-button block light theme="success">light success</run-button>
          <run-button block light theme="warning">light warning</run-button>
          <run-button block light theme="alert">light alert</run-button>
        </template>
      </example-group>

      <example-group contentClass="group-content">
        size
        <template v-slot:content>
          <run-button size="small">small</run-button>
          <run-button>dufault</run-button>
          <run-button size="large">large</run-button>
        </template>
      </example-group>
      <example-group contentClass="group-content">
        theme
        <template v-slot:content>
          <run-button>dufault</run-button>
          <run-button theme="primary">primary</run-button>
          <run-button theme="success">success</run-button>
          <run-button theme="warning">warning</run-button>
          <run-button theme="alert">alert</run-button>
        </template>
      </example-group>
      <example-group contentClass="group-content">
        theme + light
        <template v-slot:content>
          <run-button light>dufault</run-button>
          <run-button theme="primary" light>primary</run-button>
          <run-button theme="success" light>success</run-button>
          <run-button theme="warning" light>warning</run-button>
          <run-button theme="alert" light>alert</run-button>
        </template>
      </example-group>
    </template>
  </run-page-content>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "./button.scss";
</style>
