import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';
import { resolve } from 'path';

const config = defineConfig(() => {
  return {
    plugins: [
      ViteImageOptimizer({
        test: /\.(jpe?g|png|gif|tiff|webp|avif)$/i,
      }),
    ],
    base: '/web-studio/',
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          portfolio: resolve(__dirname, 'portfolio/index.html')
        }
      }
    }
  };
});

console.log(resolve(__dirname, 'index.html'));

export default config;
