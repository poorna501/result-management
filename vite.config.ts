import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@interface": path.resolve(__dirname, "./src/interface"),   
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@common": path.resolve(__dirname, "./src/common"),
    },
  },
});

