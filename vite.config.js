import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import basicSsl from "@vitejs/";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    // hmr: true,
    //   https: true,
    //   hmr: {
    //     port: 433,
    //     protocol: "wss",
    //   },
    //   port: 3001,
  },
});
