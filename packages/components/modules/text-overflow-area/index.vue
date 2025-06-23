<script lang="ts">
  export default {
    name: 'LTextOverflowArea'
  }
</script>
<script setup lang="ts">
import  { computed } from 'vue'

const props = defineProps({
  height: {
    type: Number,
    default: 100
  },
  content: {
    type: String,
    required: true
  },
  padding: {
    type: Number,
    default: 10
  },
  width: {
    type: Number,
    default: 100
  }
})

const computedHeight = computed(() => props.height + 'px')
const computedPadding = computed(() => props.padding + 'px')
const computedWidth = computed(() => props.width + 'px')

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
@import url('../../common/assets/common.css');

.l-text-overflow-area {
  border: 1px solid #000;
  width: v-bind(computedWidth);
  padding: v-bind(computedPadding);
  background: var(--blue-light-bg);
  
  .text-container {
    height: v-bind(computedHeight);
    --margin-height: calc(v-bind(computedHeight) - 2 * v-bind(computedPadding));
    overflow: hidden;
    &:before {
      content: '';
      height: var(--margin-height);
      display: block;
    }
    .content {
      line-height: 25px;
      margin-top: calc(0px - var(--margin-height));
      word-wrap: break-word;
    }
    
    .more {
      line-height: 25px;
      float: right;
    }
  }
}
</style>
