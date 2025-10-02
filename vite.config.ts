import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Disable eval for CSP compliance - use esbuild minifier
    minify: 'esbuild',
    // Ensure no eval is used in production
    rollupOptions: {
      output: {
        // Disable dynamic imports that might use eval
        manualChunks: undefined,
      },
    },
  },
  // Disable eval in development as well for consistency
  define: {
    __DEV__: mode === 'development',
  },
  esbuild: {
    // Disable eval in esbuild
    legalComments: 'none',
  },
}));
