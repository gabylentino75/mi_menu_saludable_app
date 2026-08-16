import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  // GitHub Pages sirve el proyecto en /mi_menu_saludable_app/, no en la raíz del dominio.
  // Sin esto, el build busca los archivos JS/CSS en la raíz y la página queda en blanco.
  base: '/mi_menu_saludable_app/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Mi Menú Saludable - Planificador y Recetas',
        short_name: 'MiMenuSaludable',
        description: 'Planifica tus comidas saludables, genera viandas escolares y listas de compras de forma inteligente.',
        theme_color: '#F2E6D6',
        background_color: '#F2E6D6',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
});
