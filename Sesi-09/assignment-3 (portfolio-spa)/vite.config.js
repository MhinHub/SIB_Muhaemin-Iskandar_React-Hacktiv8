import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  load: {
    include: ['src/**/*'],
    exclude: ['node_modules/**/*']
  }
})
