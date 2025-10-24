import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: { port: 5173 },
  test: {
    environment: 'jsdom',
    testTimeout: 10000,
  }
})
