import Clipboard from 'clipboard'
import { ElMessage } from 'element-plus'
const clipboardSuccess = () => {
  ElMessage.success('复制成功')
}

const clipboardError = () => {
  ElMessage.error('复制失败')
}

/**
 * @description 处理剪贴板复制
 * @param text 复制文案
 * @param event 来源元素
 */
export const handleClipboard = (text: string, event: Event) => {
  const target = event.target as Element | null
  if (!target) return
  const clipboard = new Clipboard(target, {
    text: () => text
  }) as any
  clipboard.on('success', () => {
    clipboardSuccess()
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    clipboardError()
    clipboard.destroy()
  })
  clipboard.onClick(event)
}
