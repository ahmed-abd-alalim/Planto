import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
    resolve: {
    alias: {
      '@':"src",
      "@storage": "storage",
      '@components': "src/components",
      '@layouts': "src/layouts",
      '@types': "src/types",
      '@pages': "src/pages",
      '@config': "src/config",
    },
  },
})
