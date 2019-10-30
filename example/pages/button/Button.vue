<template>
  <PageContent class="example-button-page">
    <Navbar slot="header">Button</Navbar>
    <example-group contentClass="group-content">
      block + size
      <template v-slot:content>
        <Button
          block
          size="small"
        >block small</Button>
        <Button block>block default</Button>
        <Button
          block
          size="large"
        >block large</Button>
      </template>
    </example-group>
    <example-group contentClass="group-content">
      block + theme
      <template v-slot:content>
        <Button
          block
          theme="primary"
        >primary</Button>
        <Button
          block
          theme="success"
        >success</Button>
        <Button
          block
          theme="warning"
        >warning</Button>
        <Button
          block
          theme="alert"
        >alert</Button>
      </template>
    </example-group>
    <example-group contentClass="group-content">
      block + theme + light
      <template v-slot:content>
        <Button
          block
          light
        >light default</Button>
        <Button
          block
          light
          theme="primary"
        >light primary</Button>
        <Button
          block
          light
          theme="success"
        >light success</Button>
        <Button
          block
          light
          theme="warning"
        >light warning</Button>
        <Button
          block
          light
          theme="alert"
        >light alert</Button>
      </template>
    </example-group>
    <example-group contentClass="group-content">
      disabled
      <template v-slot:content>
        <Button
          block
          disabled
          theme="primary"
        >disabled</Button>
        <Button
          block
          disabled
          light
          theme="primary"
        >disabled</Button>
      </template>
    </example-group>

    <example-group contentClass="group-content">
      size
      <template v-slot:content>
        <Button size="small">small</Button>
        <Button>dufault</Button>
        <Button size="large">large</Button>
      </template>
    </example-group>
    <example-group contentClass="group-content">
      theme
      <template v-slot:content>
        <Button>dufault</Button>
        <Button theme="primary">primary</Button>
        <Button theme="success">success</Button>
        <Button theme="warning">warning</Button>
        <Button theme="alert">alert</Button>
      </template>
    </example-group>
    <example-group contentClass="group-content">
      theme + light
      <template v-slot:content>
        <Button light>dufault</Button>
        <Button
          theme="primary"
          light
        >primary</Button>
        <Button
          theme="success"
          light
        >success</Button>
        <Button
          theme="warning"
          light
        >warning</Button>
        <Button
          theme="alert"
          light
        >alert</Button>
      </template>
    </example-group>
    <!-- <example-group contentClass="group-content">
      async
      <template v-slot:content>
        <Button
          block
          async
          @click="clickHandle"
        >async</Button>
      </template>
    </example-group> -->
  </PageContent>
</template>
<script>
export default {
  methods: {
    clickHandle(done) {
      setTimeout(() => {
        done()
      }, 3 * 1000)
    }
  }
}
</script>
<style lang="scss">
@import './button.scss';
</style>
