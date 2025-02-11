import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import customOutputPlugin from "./customOutputPlugin";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "src/about/index.html"),
        contact: resolve(__dirname, "src/contact-us/index.html"),
        phone_words: resolve(__dirname, "src/phone-words/index.html"),
        premium_numbers: resolve(__dirname, "src/premium-number/index.html"),
      },
    },
  },
  plugins: [customOutputPlugin()],
});
