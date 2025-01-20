import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@kissena': path.resolve(__dirname, 'src/kissena'),
      '@admin': path.resolve(__dirname, 'src/admin'),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  },
  plugins: [react()],
})