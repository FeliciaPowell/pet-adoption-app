import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/pet-adoption-app/',
  build: {
    rollupOptions: {
      // Ensures proper chunk handling
      output: {
        manualChunks: undefined,
      },
    },
  },
});
