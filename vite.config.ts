import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/food-chat-ui/',
  server: {
    host: true,
    port: 5173
  }
})
