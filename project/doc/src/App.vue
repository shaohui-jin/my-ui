<script setup lang="ts">
import { concurRequest } from 'sla-utils'
import { LTextOverflowArea, LTextEraseArea, LImageCarousel, LImagePointer, LImage, LCanvasTime } from 'sla-lemon'

const content = `this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.
`
const aaa = () => {
  const urls = new Array(20).fill("https://jsonplaceholder.typicode.com/posts")
  concurRequest(urls, 3).then(res => {
    console.log(res)
  })
}

const commonUrls = [
  'https://picsum.photos/seed/picsum/400/400',
  'https://picsum.photos/seed/picsum2/400/400',
  'https://picsum.photos/seed/picsum3/400/400',
  'https://picsum.photos/seed/picsum4/400/400',
  'https://picsum.photos/seed/picsum5/400/400',
  'https://picsum.photos/seed/picsum6/400/400',
  'https://picsum.photos/seed/picsum7/400/400',
  'https://picsum.photos/seed/picsum8/400/400',
  'https://picsum.photos/seed/picsum9/400/400',
]

const radomUrls = [
  'https://picsum.photos/seed/picsum1/250/200',
  'https://picsum.photos/seed/picsum2/150/200',
  'https://picsum.photos/seed/picsum3/200/200',
  'https://picsum.photos/seed/picsum4/200/200',
  'https://picsum.photos/seed/picsum5/150/200',
  'https://picsum.photos/seed/picsum6/250/200',
  'https://picsum.photos/seed/picsum7/200/200',
  'https://picsum.photos/seed/picsum8/200/200',
  'https://picsum.photos/seed/picsum9/200/200',
]
</script>

<template>
  <LTextOverflowArea :content="content" />
  <br>
  <LTextEraseArea :content="content" />
  <br>
  <LImageCarousel :imageUrls="commonUrls" :defaultIndex="2" />
  <br>
  <LImagePointer :imageUrls="radomUrls" />
  <br>
  <LImage :src="'https://picsum.photos/seed/picsum2/200/300'"></LImage>
  <br>
  <button @click="aaa">测试并发请求</button>
  <br>
  <LCanvasTime color="#e00909" bgColor="#ffffff" />
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
