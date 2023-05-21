import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        game: resolve(__dirname, "src/game/index.html"),
        solution: resolve(__dirname, "src/solution/index.html"),
        instructions: resolve(__dirname, "src/instructions/index.html"),
        current_games: resolve(__dirname, "src/current_games/index.html")
      },
    },
  },
});