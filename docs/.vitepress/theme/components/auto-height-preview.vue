<template>
  <div class="auto-height-preview">
    <iframe
      ref="previewFrame"
      class="preview-frame"
      :src="src"
      frameborder="0"
      sandbox="allow-scripts allow-same-origin"
      @load="adjustHeight"
    ></iframe>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  src: String,
  height: {
    type: String,
    default: 'auto'
  },
  minHeight: {
    type: String,
    default: '200px'
  },
  maxHeight: {
    type: String,
    default: '800px'
  }
})

const previewFrame = ref(null)
let resizeObserver = null

const adjustHeight = () => {
  if (!previewFrame.value) return
  
  try {
    const iframeDoc = previewFrame.value.contentDocument
    if (!iframeDoc) return
    
    // 获取 iframe 内容的实际高度
    const contentHeight = Math.max(
      iframeDoc.body.scrollHeight,
      iframeDoc.documentElement.scrollHeight
    )
    
    // 设置 iframe 高度
    previewFrame.value.style.height = `${contentHeight}px`
  } catch (e) {
    console.error('无法调整iframe高度:', e)
    // 备用方案：使用默认高度
    previewFrame.value.style.height = props.minHeight
  }
}

// 监听窗口大小变化
const handleResize = () => {
  if (previewFrame.value) {
    adjustHeight()
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  
  // 使用 ResizeObserver 监听内容变化（可选）
  if ('ResizeObserver' in window) {
    resizeObserver = new ResizeObserver(adjustHeight)
    if (previewFrame.value) {
      resizeObserver.observe(previewFrame.value)
    }
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  if (resizeObserver) {
    resizeObserver.disconnect()
  }
})
</script>

<style scoped>
.auto-height-preview {
  width: 100%;
  margin: 1rem 0;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  overflow: hidden;
}

.preview-frame {
  width: 100%;
  height: v-bind(height);
  min-height: v-bind(minHeight);
  max-height: v-bind(maxHeight);
  display: block;
  transition: height 0.3s ease;
}
</style>