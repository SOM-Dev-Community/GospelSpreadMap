import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cesium from 'vite-plugin-cesium';

export default defineConfig({
  plugins: [react(), cesium()],
  define: {
    CESIUM_BASE_URL: JSON.stringify('/Cesium'),
  },
  assetsInclude: ['**/*.geojson'],
  build:{
    outDir: 'dist',
  }
});
