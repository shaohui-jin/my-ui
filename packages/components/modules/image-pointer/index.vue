<template>
  <div class="l-image-pointer">
    <div class="pointer" v-show="showPointer"></div>
    <img
      class="image-item"
      v-for="(url, i) in imageUrls"
      :key="i"
      :src="url"
    />
  </div>
</template>

<script lang="ts">
  export default {
    name: 'LImagePointer'
  }
</script>
<script setup lang="ts">
import  { ref, onMounted } from 'vue'

defineProps({
  imageUrls: {
    type: Array as () => string[],
    required: true,
  }
})
const showPointer = ref<boolean>(false)
onMounted(() => {
  const pointer = document.querySelector('.pointer') as HTMLElement
  const imageItems = document.querySelectorAll('.image-item') as NodeListOf<HTMLElement>
  imageItems.forEach((item, index) => {
    item.addEventListener('mouseenter', (e) => {
      pointer.style.setProperty('--x', `${item.offsetLeft}px`)
      pointer.style.setProperty('--y', `${item.offsetTop}px`)
      pointer.style.setProperty('--w', `${item.offsetWidth}px`)
      pointer.style.setProperty('--h', `${item.offsetHeight}px`)
    })
    showPointer.value = true
  })
})

</script>

<style scoped lang="less">
.l-image-pointer {
  --gap: 20px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  
  .image-item {
    margin-right: var(--gap, 20px);
    margin-bottom: var(--gap, 20px);
    object-fit: cover;
    cursor: pointer;
    display: block;
  }
  
  .pointer {
    --l: 30px; /* 线框四角线长 */
    --t: 3px; /* 线框粗细 */
    --g: calc(var(--gap) / 2); /* 线框与图片间距 */
    --w: 0px; /* 图片大小 */
    --h: 0px; /* 图片大小 */
    --x: 0px; /* 图片左上角位置 */
    --y: 0px; /* 图片左上角位置 */
    position: absolute;
    cursor: pointer;
    width: calc(var(--w) + var(--g) * 2);
    height: calc(var(--h) + var(--g) * 2);
    border: 3px solid #000;
    left: calc(var(--x) - var(--g));
    top: calc(var(--y) - var(--g));
    box-sizing: border-box;
    transition: all 0.1s ease;
    
    mask: conic-gradient(
      at var(--l) var(--l),
      #0000 75%,
      red 75%)
    left top/calc(100% - var(--l))  calc(100% - var(--l)) repeat;
  }
}
</style>
