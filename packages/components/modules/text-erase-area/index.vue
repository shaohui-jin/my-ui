<template>
  <div class="l-text-erase-area" ref="textEraseArea">
    <p class="content">{{ props.content }}</p>
    <p class="erase">
      <span class="text">{{ props.content }}</span>
    </p>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'LTextEraseArea'
  }
</script>
<script setup lang="ts">
import  { computed, ref, onMounted } from 'vue'
import  { rgbaToHex } from 'sla-utils'

const props = defineProps({
  content: {
    type: String,
    required: true
  },
})

const textEraseArea = ref()
const bgColor = ref()

onMounted(() => {
  bgColor.value = rgbaToHex(window.getComputedStyle(textEraseArea.value).backgroundColor)
})
</script>

<style scoped lang="less">

.l-text-erase-area {
  width: 100%;
  padding: 1em;
  line-height: 2;
  text-indent: 2em;
  position: relative;
  p {
    text-align: start;
    word-break: break-all;
  }
  .erase {
    position: absolute;
    inset: 1em;
    
    /* 控制擦除的比例 */
    @property --percentage {
      syntax: '<percentage>';
      inherits: false;
      initial-value: 0%;
    }
    
    @keyframes erase {
      to {
        --percentage: 100%;
      }
    }
    
    .text {
      --percentage: 0%;
      background: linear-gradient(to right, transparent var(--percentage), v-bind(bgColor) calc(var(--percentage) + 10px));
      color: transparent;
      animation: erase 5s forwards linear;
    }
    
   
  }
}
</style>
