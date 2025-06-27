<template>
  <img class="l-image" :src="src"/>
</template>

<script lang="ts">
  export default {
    name: 'LImage'
  }
</script>
<script setup lang="ts">
import { onMounted } from 'vue'
defineProps({
  src: {
    type: String,
    required: true,
    // default: 'https://picsum.photos/seed/picsum/200/300',
  },
})

const range: [number, number] = [-10, 10] // Range for rotation in degrees
const getRotation = (range: [number, number], mousePos: number, length: number) => {
  // (r - range[0]) / (range[1] - range[0]) = mousePos / length
  return  range[0] + (range[1] - range[0]) * (mousePos / length)
}

onMounted(() => {
  const image = document.querySelector('.l-image') as HTMLImageElement
  image.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY } = e
    const { width, height } = image.getBoundingClientRect()
    const rx = getRotation(range, offsetY, height)
    const ry = -getRotation(range, offsetX, width)
    image.style.setProperty('--rx', `${rx}deg`)
    image.style.setProperty('--ry', `${ry}deg`)
  })
  
  image.addEventListener('mouseleave', () => {
    image.style.setProperty('--rx', '0deg')
    image.style.setProperty('--ry', '0deg')
  })
})
</script>

<style scoped lang="less">
.l-image {
  border-radius: 10px;
  transition: all 0.1s ease;
  
  &:hover {
    transform: perspective(500px) rotateX(var(--rx, 0deg))  rotateY(var(--ry, 0deg));
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
}
</style>
