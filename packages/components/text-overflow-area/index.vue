<script setup lang="ts">
import  { ref, computed } from 'vue'

const props = defineProps({
  height: {
    type: [Number, String],
    default: 100
  },
  content: {
    type: String,
    default: 'ashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznl' +
      'rqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrq' +
      'rqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrq' +
      'rqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrq'
  },
  padding: {
    type: [Number, String],
    default: 10
  }
})

const computedHeight = computed(() => {
  return typeof props.height === 'number'
    ? props.height + 'px'
    : /\d+(\.\d+)?px/.exec(props.height)
      ? props.height
      : '100px'
})

const computedPadding = computed(() => {
  return typeof props.padding === 'number'
    ? props.padding + 'px'
    : /\d+(\.\d+)?px/.exec(props.padding)
      ? props.padding
      : '10px'
})


</script>

<template>
  <div class="l-text-overflow-area">
    <div class="text-container">
      <div class="more">...</div>
      <div class="content">
        {{ props.content }}
      </div>
    </div>
  </div>
</template>

<style  lang="less">
@import url('../assets/common.css');

.l-text-overflow-area {
  border: 1px solid #000;
  width: 100px;
  padding: v-bind(computedPadding);
  background: var(--blue-light-bg);
  
  .text-container {
    height: v-bind(computedHeight);
    overflow: hidden;
    &:before {
      content: '';
      height: 80px;
      display: block;
    }
    .content {
      line-height: 25px;
      margin-top: -80px;
      word-wrap: break-word;
    }
    
    .more {
      line-height: 25px;
      float: right;
    }
  }
}
</style>
