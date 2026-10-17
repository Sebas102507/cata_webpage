import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Deployed to GitHub Pages at https://sebas102507.github.io/cata_webpage/, so assets live under that path.
// Switch base back to '/' once a custom domain (CNAME) is attached.
export default defineConfig({
  base: '/cata_webpage/',
  plugins: [react()],
})
