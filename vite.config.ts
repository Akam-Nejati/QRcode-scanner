import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      manifest: {
        name: "ribbo",
        short_name: "ribbo",
        theme_color: "#242424",
        background_color: "#242424",
        display: "standalone",
        scope: "/",
        start_url: "/",
        description: "this is an programming blog",
      }
    })
  ],
})
