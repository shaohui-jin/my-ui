<template>
  <canvas class="l-canvas-time" />
</template>

<script lang="ts">
  export default {
    name: 'LCanvasTime'
  }
</script>
<script setup lang="ts">
import { onMounted } from 'vue'
import { colorToRGBA } from 'sla-utils/color'
import { getRandom } from 'sla-utils/number'

const props = defineProps({
  color: {
    type: String,
    default: '#000000',
    remark: '粒子颜色, 默认 #000000'
  },
  bgColor: {
    type: String,
    default: '#ffffff',
    remark: '画布背景色, 默认 #ffffff'
  }
})
onMounted(() => {
  const canvas = document.querySelector('.l-canvas-time') as HTMLCanvasElement
  
  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  
  canvas.width = window.innerWidth * devicePixelRatio
  canvas.height = window.innerHeight * devicePixelRatio
  
  class Particle {
    // 粒子半径
    size: number
    // 粒子位置x
    x: number
    // 粒子位置y
    y: number
    constructor() {
      const r = Math.min(canvas.width, canvas.height) / 2
      const rad = (getRandom(0, 360) * Math.PI) / 180
      const cx = canvas.width / 2
      const cy = canvas.height / 2
      this.x = cx + r * Math.cos(rad)
      this.y = cy + r * Math.sin(rad)
      this.size = getRandom(2 * devicePixelRatio, 5 * devicePixelRatio)
    }
    draw() {
      if (!ctx) {
        return
      }
      ctx.beginPath()
      ctx.fillStyle = props.color
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fill()
    }
    moveTo(tx: number, ty: number) {
      const duration = 500
      const sx = this.x, sy = this.y
      const xSpeed = (tx - sx) / duration
      const ySpeed = (ty - sy) / duration
      const startTime = Date.now()
      const _move = () => {
        const t = Date.now() - startTime
        const x = sx + xSpeed * t
        const y = sy + ySpeed * t
        this.x = x
        this.y = y
        if (t >= duration) {
          this.x = tx
          this.y = ty
          return
        }
        requestAnimationFrame(_move)
      }
      _move()
    }
  }
  
  const particles: Particle[]  = []
  
  const getText = (): string => {
    return new Date().toTimeString().substring(0, 8)
  }
  let text = getText()
  
  const clear = () => {
    if (!ctx) {
      return
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
  const update = () => {
    if (!ctx) {
      return
    }
    // 画文字
    const curText = getText()
    if (text === curText) {
      return
    }
    clear()
    text = curText
    const { width, height } = canvas
    ctx.fillStyle = props.color
    ctx.textBaseline = 'middle'
    ctx.font = `${140 * devicePixelRatio}px 'Microsoft YaHei', sans-serif`
    ctx.textAlign = 'center'
    ctx.fillText(text, width  / 2, height / 2)
    
    // 拿到像素信息
    const points = getPoints()
    clear()
    for (let i = 0; i < points.length; i++) {
      let p = particles[i]
      if (!p) {
        p = new Particle()
        particles.push(p)
      }
      const [x, y] = points[i]
      p.moveTo(x, y)
    }
    if (points.length < particles.length) {
      particles.splice(points.length)
    }
  }
  const getPoints = (): Array<[number, number]> => {
    if (!ctx) {
      return []
    }
    const { width, height, data } = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const points = [] as Array<[number, number]>
    const gap = 4
    for (let i = 0; i < width; i += gap) {
      for (let j = 0; j < height; j += gap) {
        const index = (i + j * width) * 4
        const r = data[index]
        const g = data[index + 1]
        const b = data[index + 2]
        const a = data[index + 3]
        const color = colorToRGBA(props.color)
        if (r === color.r && b === color.b && g === color.g && a === 255) {
          points.push([i, j])
        }
      }
    }
    return points
  }
  
  const draw = () => {
    clear()
    update()
    particles.forEach(p => p.draw())
    requestAnimationFrame(draw)
  }
  
  draw()
})

</script>

<style scoped lang="less">
.l-canvas-time {
  background: v-bind(bgColor);
 
  width: 100%;
  height:  100%;
}
</style>
