import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@public': path.resolve(__dirname, '/public'),
      '@app': path.resolve(__dirname, './src/app')
    }
  },
  plugins: [react()],
})
