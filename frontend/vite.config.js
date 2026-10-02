import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Enables @/ imports: e.g. @/components/ui/dimensional-field
      '@': path.resolve(__dirname, './src'),
    },
  },
})
