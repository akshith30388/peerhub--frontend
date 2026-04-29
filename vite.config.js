import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
  preview: {
    host: true,
    port: Number(process.env.PORT) || 4173,
    allowedHosts: ['.onrender.com', 'localhost', '127.0.0.1'],
  },
})
