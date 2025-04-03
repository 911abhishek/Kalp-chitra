import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // Allows network access
    port: 5173, // Change port if needed
    strictPort: true, // Ensures the port doesn't change
    allowedHosts: [
      "localhost",
      "9d05-2401-4900-399e-f6b8-5138-2c39-c994-7edf.ngrok-free.app", // Add ngrok domain
    ],
  },
});
