import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 723,
    open: true,
    allowedHosts: ["m.fuyuukou.com", "localhost", "127.0.0.1"],
    host: "0.0.0.0",
  },
});
