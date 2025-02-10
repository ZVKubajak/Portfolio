import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  server: {
    open: false,
    port: 3000,
    proxy: {
      "/api": {
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
