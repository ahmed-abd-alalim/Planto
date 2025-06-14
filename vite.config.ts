import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
    resolve: {
    alias: {
      '@': path.resolve(__dirname,"src"),
      "@storage": path.resolve(__dirname, "storage"),
      '@components': path.resolve(__dirname,"src/components"),
      '@layouts': path.resolve(__dirname,"src/layouts"),
      '@types': path.resolve(__dirname,"src/types"),
      '@pages': path.resolve(__dirname,"src/pages"),
      '@config': path.resolve(__dirname,"src/config"),
    },
  },
})
