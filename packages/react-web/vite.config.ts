import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { manualChunksPlugin } from "vite-plugin-webpackchunkname";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), manualChunksPlugin()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve("src") }],
  },
});
