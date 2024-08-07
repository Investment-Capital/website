import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    viteSingleFile({
      useRecommendedBuildConfig: false,
    }),
  ],
  build: {
    assetsInlineLimit: 15_000,
    minify: "terser",
  },
});
