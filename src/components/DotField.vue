<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const canvasRef = ref(null)
let observer

function paint() {
  const canvas = canvasRef.value
  if (!canvas) return
  const parent = canvas.parentElement
  const width = parent.clientWidth
  const height = parent.clientHeight
  if (!width || !height) return
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  canvas.width = Math.round(width * dpr)
  canvas.height = Math.round(height * dpr)
  const ctx = canvas.getContext('2d')
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.clearRect(0, 0, width, height)

  const gap = 16
  const cx = width / 2
  const cy = height * 0.46
  const max = Math.max(width, height) * 0.62
  for (let y = gap / 2; y < height; y += gap) {
    for (let x = gap / 2; x < width; x += gap) {
      const noise = Math.abs(Math.sin(x * 0.073 + y * 0.041) * Math.cos(x * 0.017 - y * 0.029))
      if (noise < 0.22) continue
      const dist = Math.hypot(x - cx, y - cy) / max
      const alpha = (0.12 + noise * 0.28) * Math.max(0, 1 - dist * dist)
      if (alpha < 0.04) continue
      ctx.fillStyle = `rgba(156, 163, 175, ${alpha})`
      ctx.beginPath()
      ctx.arc(x, y, 1.05, 0, Math.PI * 2)
      ctx.fill()
    }
  }
}

onMounted(() => {
  paint()
  observer = new ResizeObserver(paint)
  if (canvasRef.value?.parentElement) observer.observe(canvasRef.value.parentElement)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <canvas ref="canvasRef" class="h-full w-full" aria-hidden="true"></canvas>
</template>
