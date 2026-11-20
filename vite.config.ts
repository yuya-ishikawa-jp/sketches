import { defineConfig } from "vite";

export default defineConfig({
  // カスタムドメイン https://sketches.yuya.is/ のルートで配信される
  base: "/",
  build: {
    target: "es2022",
    rollupOptions: {
      input: {
        main: "index.html",
        sketch: "sketch.html",
      },
    },
  },
});
