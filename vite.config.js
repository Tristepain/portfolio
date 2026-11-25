import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [
    vue(),
    vueDevTools(),
  ],
  server: {
    open: true // 👈 Ajoute cette ligne pour ouvrir automatiquement le navigateur
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

