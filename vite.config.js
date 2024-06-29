// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/folio/', // Repository name with leading and trailing slashes
  plugins: [react()],
});
