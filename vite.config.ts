import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dynamicImport from 'vite-plugin-dynamic-import'; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dynamicImport()],
  build: {
    target: 'esnext'
  }
  // base: "/studio-design-landing-page-react/",
  // base: "/",
});
