import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      $layout: path.resolve(__dirname, "./src/layout"),
      $assets: path.resolve(__dirname, "./src/assets"),
      $pages: path.resolve(__dirname, "./src/pages"),
      $store: path.resolve(__dirname, "./src/store"),
      $components: path.resolve(__dirname, "./src/components"),
    },
  },
  plugins: [svelte()],
});
