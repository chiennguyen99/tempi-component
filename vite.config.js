import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    federation({
      name: "index.js",
      filename: "index.js",
      exposes: {
        "./selector": "./selector",
        "./ui": "./ui",
      },
      shared: {
        react: { generate: false, import: false },
        "react-dom": { generate: false, import: false },
        "@tempi/core-editor": { generate: false, import: false },
        "@tempi/core-renderer": { generate: false, import: false },
        "@emotion/styled": { generate: false, import: false }
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        main: './index.ts'
      },
      output: {
        assetFileNames() {
          const currTimestamp = new Date().getTime();
          return `assets/[name]-[hash]-${currTimestamp}[extname]`;
        },
        chunkFileNames(chunkInfo) {
          const currTimestamp = new Date().getTime();
          const notGenWithTimestamp = [
            'preload-helper',
            'theme-github',
            'mode-java',
            '_fn_import',
            '_shared_react',
            '_shared_react-dom',
            '_shared_@tempi',
          ].some(
            (el) => chunkInfo.name.includes(el),
          );
          return notGenWithTimestamp ? 'assets/[name]-[hash].js' : `assets/[name]-[hash]-${currTimestamp}.js`;
        },
        entryFileNames() {
          const currTimestamp = new Date().getTime();
          return `assets/[name]-${currTimestamp}.js`;
        },
      }
    }
  },
});