import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  base: '/LotteryApp/',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
});
