import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

// import dotenv from "dotenv"

// const Host1 = HOST1
// https://vite.dev/config/

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    svgr(),
    tailwindcss(),
  ],
  server: {
    allowedHosts: [
      "localhost",
      "decomposed-unshepherding-vilma.ngrok-free.dev",
    ],
  },
  assetsInclude: ["**/*.lottie"],
  base: "/study-group-manager/",
});
