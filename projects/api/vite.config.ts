import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { VitePluginNode } from "vite-plugin-node";

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    ...VitePluginNode({
      adapter: 'express',
      appPath: './app.js',
      exportName: 'plutonApi',
      tsCompiler: 'esbuild',
      swcOptions: {}
    })
  ],
});
