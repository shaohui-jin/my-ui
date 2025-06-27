<template>
  <div class="l-image-carousel">
    <div class="image-list">
      <img
        class="image-items"
        v-for="(url, i) in imageUrls"
        :key="i"
        :src="url"
        :class="{ active: index === i }"
        @click="() => itemFn(i)"
      />
    </div>
    <button class="prev" @click="prevFn">&lt;</button>
    <button class="next" @click="nextFn">&gt;</button>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'LImageCarousel'
  }
</script>
<script setup lang="ts">
import  { ref, onMounted } from 'vue'

const props = defineProps({
  imageUrls: {
    type: Array as () => string[],
    required: true,
  },
  defaultIndex: {
    type: Number,
    default: 0
  },
})

const index = ref<number>(0)

const layout = () => {
  const offestStep = 100; // 每个图片的偏移量
  const scaleStep = 0.6; // 每个图片的缩放比例
  const opacityStep = 0.6; // 每个图片的透明度
  for (let i = 0; i < props.imageUrls.length; i++) {
    const item = document.querySelector(`.image-items:nth-child(${i + 1})`) as HTMLImageElement;
    if (item) {
      const dis = i - index.value; // 下标距离
      let xOffset = dis * offestStep; // 偏移量
      const sign = Math.sign(dis); // 方向
      let rotate = 0; // 旋转角度
      if (i !== index.value) {
        xOffset = xOffset + sign * 100; // 非当前图片偏移量需要再偏移半个步长
        rotate = -sign * 45; // 非当前图片旋转角度
      }
      const scale = scaleStep ** Math.abs(dis); // 缩放比例
      item.style.transform = `translateX(${xOffset}px) scale(${scale}) rotateY(${rotate}deg)`;
      const zIndex = props.imageUrls.length - Math.abs(dis); // z-index
      item.style.zIndex = zIndex.toString();
      const opacity = opacityStep ** Math.abs(dis); // 透明度
      item.style.opacity = opacity.toString();
    }
  }
}

onMounted(() => {
  index.value = props.defaultIndex
  layout()
})

const prevFn = () => {
  index.value--
  if (index.value < 0) {
    index.value = 0
  }
  layout()
}

const nextFn = () => {
  index.value++
  if (index.value > props.imageUrls.length - 1) {
    index.value = props.imageUrls.length - 1
  }
  layout()
}

const itemFn = (i: number) => {
  index.value = i
  layout()
}
</script>

<style scoped lang="less">
.l-image-carousel {
  width: 100%;
  position: relative;
  height: 300px;
  overflow: hidden;
  margin: 2em;
  .image-list {
    width: 100%;
    height: 100%;
    position: relative;
    perspective: 1000px;
    .image-items {
      //width: 100%;
      //height: 100%;
      position: absolute;
      user-select: none;
      transition: 0.4s;
      left: 50%;
      top: 0;
      margin-left: -200px;
      //transform: translateX(-50%);
    }
  }
  .prev {
    position: absolute;
    z-index: 100;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .next {
    position: absolute;
    z-index: 100;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
