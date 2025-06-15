<script setup lang="ts">
import { windowAlert } from 'jsh-utils'
import { Button, Switch } from 'jsh-components'

windowAlert('我是demo1')
</script>

<template>
  <h1>我是demo1</h1>
  <Button></Button>
  <Switch />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
