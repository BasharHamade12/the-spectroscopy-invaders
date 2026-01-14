import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  // Base path for GitHub Pages deployment
  base: '/the-spectroscopy-invaders/',
  
  build: {
    // Output directory for built files
    outDir: 'dist',
    
    // Directory for static assets
    assetsDir: 'assets',
    
    // Build targets
    target: 'esnext',
    
    // Minify
    minify: 'terser',
    
    // Terser options for better compression
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    
    // Rollup options
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
      output: {
        // Ensure proper naming for assets
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || '';
          if (/\.png$/.test(name)) {
            return 'assets/[name]-[hash][extname]';
          }
          if (/\.jpg$/.test(name)) {
            return 'assets/[name]-[hash][extname]';
          }
          if (/\.mp4$/.test(name)) {
            return 'assets/videos/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        chunkFileNames: 'assets/index-[hash].js',
        entryFileNames: 'assets/index-[hash].js',
      },
    },
  },
  
  // Development server settings
  server: {
    port: 3000,
    open: true,
  },
  
  // Preview server settings
  preview: {
    port: 4173,
  },
});

