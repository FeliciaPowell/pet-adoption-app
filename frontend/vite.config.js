import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/pet-adoption-app/', // Matches the GitHub Pages repo name
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
