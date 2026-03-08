// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 4321,
    host: true,
    open: false
  },
  // Configuración para transiciones entre páginas
  experimental: {
    clientPrerender: true
  },
  vite: {
    css: {
      preprocessorOptions: {
        stylus: {
          paths: ['src/styles']
        }
      }
    }
  }
});
