import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react({
      fastRefresh: true,
    }),
    tailwindcss()
  ],
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
    hmr: {
      overlay: true,
    },
    watch: {
      usePolling: true,
    },
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.[tj]sx?$/,
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx'
      }
    }
  },
  clearScreen: false,
}); 