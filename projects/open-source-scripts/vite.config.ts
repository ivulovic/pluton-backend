import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    ...VitePluginNode({
      adapter: "express",
      appPath: "./index.js",
      exportName: "plutonOpenSourceScripts",
      tsCompiler: "esbuild",
      swcOptions: {},
    }),
  ],
});
