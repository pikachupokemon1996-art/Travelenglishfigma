import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ⚠️ ВАЖНО: Укажите base как имя вашего репозитория
  base: '/Travelenglishfigma/', // <- Замените на имя вашего репозитория
})
