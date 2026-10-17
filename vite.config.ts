import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Served from the custom domain https://cataespitia.com, so assets live at the root.
// If the custom domain is ever removed, set base to '/cata_webpage/' for the github.io URL.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
