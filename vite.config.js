// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 8080, // or the port Render expects
  },
  preview: {
    host: '0.0.0.0',
    port: 8080,
  }
})
