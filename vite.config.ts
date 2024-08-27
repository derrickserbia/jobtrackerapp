import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000, //client port
    host: true,
    proxy: {
      "/api": {
        target: "https://localhost:7020",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
