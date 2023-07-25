import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true
  },
  plugins: [
    vue(),
    VitePWA({
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      manifest: {
        name: "vitePwa",
        short_name: "vitePwa",
        theme_color: "#242424",
        background_color: "#242424",
        icons: [
          {
            src: '/qr-code-192*192.png', // <== don't add slash, for testing
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/qr-code-512*512.png', // <== don't remove slash, for testing
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'qr-code-512*512.png', // <== don't add slash, for testing
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      devOptions: {
        enabled: true,
        suppressWarnings: true,
        navigateFallbackAllowlist: [/^\/$/],
        type: "module",
      },
    })
  ],
})