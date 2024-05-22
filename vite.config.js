import { defineConfig } from "vite";

export default defineConfig({
  entry: "./app.cjs",
  build: {
    outDir: "./dist",
    entry: "./app.cjs",
    emptyOutDir: true,
  },
});
