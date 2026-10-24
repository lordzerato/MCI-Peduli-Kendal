import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/MCI-Peduli-Kendal/' : '/',
  plugins: [
    vue(),
    tailwindcss(),
    {
      name: 'github-pages-spa-fallback',
      closeBundle() {
        const dist = resolve('dist')
        copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'))
      },
    },
  ],
}))
