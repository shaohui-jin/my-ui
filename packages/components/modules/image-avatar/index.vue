<template>
  <div class="l-image-avatar">
    <div class="l-image-avatar__body">
      <div class="avatar__preview">
        <div class="img_container">
          <img class="img" :src="imgSrc" @load="setStyle" crossorigin="anonymous" />
          <div
            class="img_container__drop"
            :style="{ width: `${size}px`, height: `${size}px`}"
            draggable="true"
            @dragstart="dragstart"
            @dragover="dragover"
            @dragend="dragend"
          >
            <div class="lf"></div>
            <div class="lr"></div>
            <div class="bf"></div>
            <div class="br"></div>
            <div class="drop_container">
<!--              <img v-show="showPreview" class="drop__img" :src="imgSrc"  />-->
            </div>
          </div>
        </div>
        <div class="avatar__preview__text" @click="resetImage">
          重新选择
          <input type="file" accept="image/*" style="display: none;" @change="handleImg"/>
        </div>
      </div>
      <div class="avatar__mask"></div>
      <div class="avatar__canvas">
        <canvas width="180" height="180" />
        <div class="avatar__canvas__text">预览效果</div>
      </div>
    </div>
    <div class="l-image-avatar__footer">
      <span>请选择图片上传：大小 250 * 250 像素，支持JPG、PNG等格式</span>
      <button @click="upload">更新</button>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'LImageAvatar'
  }
</script>
<script setup lang="ts">
import { PropType, ref } from 'vue'
import img from './img.png'

const props = defineProps({
  src: {
    type: String,
    default: img,
    // default: 'https://picsum.photos/seed/picsum/300/300',
  },
  uploadFn: {
    type: Function as PropType<(file: File) => void>,
    default: () => {},
  }
})

const showPreview = ref(true);

const imgSrc = ref(props.src)
const cut = ref({
  x: 0,
  y: 0,
  minTop: 0,
  maxTop: 0,
  minLeft: 0,
  maxLeft: 0,
})
const offsetX = ref(0)
const offsetY = ref(0)
const size = ref(180)
const resetImage = () => {
  const input = document.querySelector('.avatar__preview__text input[type="file"]') as HTMLInputElement;
  input.click();
}
const handleImg = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const file = target.files?.[0]
  if (!file) {
    return
  }
  const url = URL.createObjectURL(file)
  imgSrc.value = url as string
}

const setStyle = () => {
  const img = document.querySelector('.img') as HTMLImageElement
  const imgContainer = document.querySelector('.img_container') as HTMLDivElement
  const { width: cWidth, height: cHeight } = getComputedStyle(imgContainer)
  const { width: iWidth, height: iHeight } = getComputedStyle(img)
  
  const minTop = (parseFloat(cHeight) - parseFloat(iHeight)) / 2
  const minLeft = (parseFloat(cWidth) - parseFloat(iWidth)) / 2
  size.value = Math.min(parseFloat(cWidth), parseFloat(cHeight), parseFloat(iWidth), parseFloat(iHeight), size.value)
  const maxTop = minTop + parseFloat(iHeight) - size.value
  const maxLeft = minLeft + parseFloat(iWidth) - size.value
  
  cut.value = {
    x: minLeft,
    y: minTop,
    minTop,
    maxTop,
    minLeft,
    maxLeft
  }
  
  imgToCanvas()
}

const imgToCanvas = () => {
  const canvas = document.querySelector('.avatar__canvas canvas') as HTMLCanvasElement
  const img = document.querySelector('.img') as HTMLImageElement
  
  const x = (img.naturalWidth / img.width) * cut.value.x
  const y = (img.naturalHeight / img.height) * cut.value.y
  const sw = (img.naturalWidth / img.width) * size.value
  const sh = (img.naturalHeight / img.height) * size.value
  
  const ctx = canvas.getContext('2d')
  if (ctx) {
    ctx.clearRect(0, 0, 180, 180)
    ctx.drawImage(
      img,
      x, y,
      sw, sh,
      0, 0,
      180, 180,
    )
  }
}

const upload = () => {
  const canvas = document.querySelector('.avatar__canvas canvas') as HTMLCanvasElement
  canvas.toBlob((blob => {
    if (blob) {
      const file = new File([blob], 'avatar.png', { type: 'image/png' })
      props.uploadFn(file)
      console.log('上传的文件:', file)
    } else {
      console.error('Canvas to Blob conversion failed')
    }
  }), 'image/png')
}
const dragstart = (e: DragEvent) => {
  showPreview.value = false
  // 记录初始偏移量
  offsetX.value = e.offsetX
  offsetY.value = e.offsetY
  // const drop = document.querySelector('.img_container__drop') as HTMLDivElement
  // drop.style.setProperty('--top', `-99999px`)
  // drop.style.setProperty('--left', `-99999px`)
  // e.preventDefault()
}

const getOffest = (e: DragEvent) => {
  const drop = document.querySelector('.img_container__drop') as HTMLDivElement
  const { top, left } = getComputedStyle(drop)
  let _offsetX = e.offsetX - offsetX.value + parseFloat(left)
  let _offsetY = e.offsetY - offsetY.value + parseFloat(top)
  
  if (_offsetX < cut.value.minLeft) {
    _offsetX = cut.value.minLeft
  } else if (_offsetX > cut.value.maxLeft) {
    _offsetX = cut.value.maxLeft
  }
  if (_offsetY < cut.value.minTop) {
    _offsetY = cut.value.minTop
  } else if (_offsetY > cut.value.maxTop) {
    _offsetY = cut.value.maxTop
  }
  return { _offsetX, _offsetY }
}
const dragover = (e: DragEvent) => {
  requestAnimationFrame(() => {
    const { _offsetX, _offsetY } = getOffest(e)
    cut.value.x = _offsetX
    cut.value.y = _offsetY
  })
}

const dragend = (e: DragEvent) => {
  const { _offsetX, _offsetY } = getOffest(e)
  const drop = document.querySelector('.img_container__drop') as HTMLDivElement

  drop.style.setProperty('--top', `${_offsetY}px`)
  drop.style.setProperty('--left', `${_offsetX}px`)
  showPreview.value = true
  imgToCanvas()
}
</script>

<style scoped lang="less">
.l-image-avatar {
  //height: 300px;
  width: 666px;
  
  .l-image-avatar__body {
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  
    .avatar__preview,
    .avatar__canvas {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    
    .avatar__preview {
      flex: 1 1 0;
      .img_container {
        width: 250px;
        height: 250px;
        background-color: rgba(0, 0, 0, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        .img {
          position: absolute;
          z-index: 1;
          max-width: 250px;
          max-height: 250px;
          object-fit: cover;
          opacity: 0.8;
        }
        .img_container__drop {
          position: absolute;
          z-index: 1000;
          --top: 0px;
          --left: 0px;
          box-sizing: border-box;
          border: 1px solid #fff;
          top: var(--top);
          left: var(--left);
          cursor: crosshair;
          
          .lf {
            position: absolute;
            top: -10px;
            left: -10px;
            width: 10px;
            height: 10px;
            border: 1px solid #fff;
            box-sizing: border-box;
          }
          .lr {
            content: '';
            position: absolute;
            top: -10px;
            right: -10px;
            width: 10px;
            height: 10px;
            border: 1px solid #fff;
            box-sizing: border-box;
          }
          .bf {
            position: absolute;
            bottom: -10px;
            left: -10px;
            width: 10px;
            height: 10px;
            border: 1px solid #fff;
            box-sizing: border-box;
          }
          .br {
            content: '';
            position: absolute;
            bottom: -10px;
            right: -10px;
            width: 10px;
            height: 10px;
            border: 1px solid #fff;
            box-sizing: border-box;
          }
          .drop_container {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
            .drop__img {
              position: absolute;
              top: calc(0px - var(--top));
              left: calc(0px - var(--left));
              max-width: 250px;
              max-height: 250px;
              object-fit: cover;
              pointer-events: none;
            }
          }
          
        }
      }
      .avatar__preview__text {
        text-align: center;
        color: #999;
        font-size: 16px;
        font-weight: 500;
        margin-top: 10px;
        cursor: pointer;
      }
    }
    .avatar__mask {
      width: 2px;
      height: 80%;
      background-color: rgba(0, 0, 0, 0.5);
      margin: auto 0
    }
    .avatar__canvas {
      flex: 1 1 0;
      background-color: #fff;
      canvas {
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      .avatar__canvas__text {
        user-select: none;
        text-align: center;
        color: #999;
        font-size: 16px;
        font-weight: 500;
        margin-top: 10px;
      }
    }
  }
  .l-image-avatar__footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
    color: #666;
    font-size: 14px;
    font-weight: 500;
    margin-top: 10px;
    button {
      margin-top: 10px;
    }
  }
  
}
</style>
