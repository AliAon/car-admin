/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { codeInspectorPlugin } from "code-inspector-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), 
     codeInspectorPlugin({
      bundler: "vite",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
  },
});
