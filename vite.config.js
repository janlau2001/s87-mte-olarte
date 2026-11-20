import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// The API doesn't send CORS headers, so in dev we proxy /api to it
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'https://fitness-api-olarte-1.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
