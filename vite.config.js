import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log(`vite command: ${command}, mode: ${mode} ...`)

  return {
    plugins: [react()]
  }
})