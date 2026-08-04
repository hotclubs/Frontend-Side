// Node.js 기본 모듈
// 파일 경로를 다룰 때 사용합니다.
import path from 'node:path'
// Vite 설정 함수
import { defineConfig } from 'vite'
// React 플러그인
import react from '@vitejs/plugin-react'
// Tailwind CSS v4 플러그인
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    // React 활성화
    react(),
    // Tailwind CSS 활성화
    tailwindcss(),
  ],


  // import 경로 별칭 설정
  resolve: {
    alias: {
      // @ 를 src 폴더로 연결
      // @/shared/utils/cn
      // ↓
      // src/shared/utils/cn
      '@': path.resolve(__dirname, './src'),
      
    },
  },
})
