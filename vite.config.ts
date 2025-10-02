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
    // Strict CSP compliance - no eval allowed
    minify: 'esbuild',
    sourcemap: false, // Disable sourcemaps to avoid eval
    rollupOptions: {
      output: {
        // Ensure clean output without eval
        manualChunks: undefined,
        format: 'es',
      },
    },
  },
  // Strict esbuild configuration
  esbuild: {
    // Completely disable eval and related features
    legalComments: 'none',
    target: 'es2020',
    format: 'esm',
  },
  // Define globals without eval
  define: {
    __DEV__: JSON.stringify(mode === 'development'),
    'process.env.NODE_ENV': JSON.stringify(mode),
  },
}));
