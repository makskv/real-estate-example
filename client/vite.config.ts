import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8000
  },
  resolve: {
    alias: {
      assets: path.resolve('src/assets/')
    }
  },
  plugins: [react(), svgr()]
})
