// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: './', // Set root to the current directory (the `client` folder)
  build: {
    outDir: './dist', // This ensures the build output goes to `client/dist`
  },
});
