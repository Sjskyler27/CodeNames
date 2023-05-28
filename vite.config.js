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
        currentgames: resolve(__dirname, "src/currentGames/index.html"),
        instructions: resolve(__dirname, "src/instructions/index.html"),
        duet_main: resolve(__dirname, "src/duet/html/home/index.html"),
        duet_game: resolve(__dirname, "src/duet/html/game/index.html"),
        duet_solution: resolve(__dirname, "src/duet/html/solution/index.html"),
        duet_currentgames: resolve(__dirname, "src/duet/html/currentGames/index.html"),
        duet_instructions: resolve(__dirname, "src/duet/html/instructions/index.html")
      },
    },
  },
});