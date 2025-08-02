import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize build for deployment
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    // Ensure compatibility with different platforms
    target: 'esnext',
    minify: 'esbuild',
  },
  optimizeDeps: {
    // Include dependencies that might cause issues
    include: ['react', 'react-dom'],
  },
}));
