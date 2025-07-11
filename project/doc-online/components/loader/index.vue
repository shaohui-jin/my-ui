<template>
  <div class="css-load-container">
    <article v-for="n in cssLength" :key="n">
      <div :id="`${props.type}-loader_${n}`" :class="`${props.type}-loader_${n}`"></div>
      <button @click="copy(n, $event)">Copy the CSS</button>
    </article>
  </div>
</template>
<script setup lang="ts">
  import { watch, reactive, ref } from 'vue'
  import type { PropType } from 'vue'
  import { handleClipboard } from 'sla-utils/clipboard'
  const cssMap = reactive<Record<string, string>>({})
  const cssLength = ref<number>(0)

  const props = defineProps({
    type: {
      type: String as PropType<'classic' | 'dots'>,
      default: 'classic'
    }
  })
  
  watch(
    () => props.type,
    () => {
      let modules: Record<string, any> = {}
      if (props.type === 'classic') {
        import.meta.glob('./classic/*.css', { eager: true })
        modules = import.meta.glob('./classic/*.css', { as: 'raw' })
      } else if (props.type === 'dots') {
        import.meta.glob('./dots/*.css', { eager: true })
        modules = import.meta.glob('./dots/*.css', { as: 'raw' })
      }
      
      Object.keys(modules).forEach(k => {
        cssMap[k] = ''
        modules[k]().then((css: string) => {
          cssMap[k] = css
        })
        cssLength.value = Object.keys(cssMap).length
      })
    },
    { immediate: true, deep: true }
  )
  
  const copy = (i: number, $event: Event) => {
    handleClipboard(cssMap[`./${props.type}/loading_${i}.css`], $event)
  }
</script>

<style lang="less" scoped>
.css-load-container {
  //--grid-auto-rows: unset;
  transition: all 0.8s;
  grid-area: 1/1;
  .article:hover > * {
    grid-area: unset;
  }
  button:before {
    position: unset;
  }
  --primary: #1095c1;
  --primary-hover: #08769b;
  --primary-focus: rgba(16, 149, 193, 0.125);
  --primary-inverse: #fff;
  --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --card-background-color: #ffffff;
  --border-radius: 0.25rem;
  --muted-border-color: #edf0f3;
  --font-weight: 400;
  --spacing: 1rem;
  --grid-auto-rows: 200px;
  
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 5px;
  //grid-auto-rows: var(--grid-auto-rows);
  grid-auto-rows: max-content;
  margin: 1rem 3rem;
  counter-reset: num;
  
  article {
    display: grid;
    place-items: center;
    margin: 0;
    padding: 1rem;
    box-shadow: none;
    border: 1px solid var(--muted-border-color);
    position: relative;
    overflow: hidden;
    background-color: #fff;
    counter-increment: num;
    border-radius: var(--border-radius);
    background: var(--card-background-color);
    
    button {
      display: block;
      overflow: visible;
      font-family: inherit;
      text-transform: none;
      opacity: 0;
      border-radius: 5px;
      box-shadow: 0 0.125rem 1rem rgb(27 40 50 / 4%),
      0 0.125rem 2rem rgb(27 40 50 / 8%),
      0 0 0 0.0625rem rgb(27 40 50 / 2%);
      z-index: 9;
      margin: 1em;
      border: none;
      font-size: 1rem;
      padding: 0.5rem;
      width: fit-content;
      cursor: pointer;
      transition: 0.3s;
      
      &:before {
        content: '';
        position: absolute;
        inset: 0;
        text-decoration: inherit;
        vertical-align: inherit;
        box-sizing: border-box;
      }
    }
    
    &:before {
      content: '#' counter(num);
      position: absolute;
      top: -1px;
      left: -1px;
      color: var(--primary);
      font-weight: bold;
      padding: 5px 10px;
      border-bottom-right-radius: inherit;
      border: inherit;
    }
    
    > * {
      grid-area: 1/1;
    }
    
    &:hover {
      button {
        opacity: 1;
        background-color: var(--primary);
        border-color: var(--primary);
        color: var(--primary-inverse);
        box-shadow: var(--button-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
      }
    }
  }
}

</style>
