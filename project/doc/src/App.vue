<script setup lang="ts">
import { concurRequest } from 'sla-utils'
import { LTextOverflowArea, LTextEraseArea, LImageCarousel, LImage } from 'sla-lemon'

// windowAlert('我是demo1')
const content = `this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.
`
const aaa = () => {
  const urls = new Array(20).fill("https://jsonplaceholder.typicode.com/posts")
  concurRequest(urls, 3).then(res => {
    console.log(res)
  })
}

const urls = [
  'https://picsum.photos/seed/picsum/400/300',
  'https://picsum.photos/seed/picsum2/400/300',
  'https://picsum.photos/seed/picsum3/400/300',
  'https://picsum.photos/seed/picsum4/400/300',
  'https://picsum.photos/seed/picsum5/400/300'
]
</script>

<template>
  <LTextOverflowArea :content="content" />
  <LTextEraseArea :content="content" />
  <LImageCarousel :imageUrls="urls" :defaultIndex="2" />
  <LImage :src="'https://picsum.photos/seed/picsum2/200/300'"></LImage>
  <button @click="aaa">测试并发请求</button>
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
