import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite"; // Make sure to import defineConfig

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   resolve: {
      alias: {
         "@": path.resolve(__dirname, "./src"), // Use __dirname to resolve the path correctly
      },
   },
});
