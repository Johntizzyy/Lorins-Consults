import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Lorins-Consults/", // 👈 IMPORTANT for GitHub Pages
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
