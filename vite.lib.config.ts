import { resolve } from "node:path";

import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      fileName: "index",
      formats: ["es"],
      name: "CalendarCN",
    },
    outDir: "dist-library",
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) {
            return "styles.css";
          }

          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
  plugins: [
    tsconfigPaths(),
    react(),
    dts({
      include: ["src/index.ts", "src/components", "src/hooks", "src/lib"],
      outDir: "dist-library",
      tsconfigPath: "./tsconfig.json",
    }),
  ],
});
