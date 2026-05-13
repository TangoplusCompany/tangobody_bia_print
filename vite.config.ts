import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // 1. path 모듈 가져오기

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 2. '@'를 'src' 폴더 경로로 매핑
      '@': path.resolve(__dirname, './src'),
    },
  },
});