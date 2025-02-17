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
        number_list: resolve(__dirname, "src/numbers-list/index.html"),
        booking_numbers: resolve(__dirname, "src/booking-page/index.html"),
        vendor_dashboard: resolve(__dirname, "src/vendor-dashboard/index.html"),
        login: resolve(__dirname, "src/login-page/index.html"),
        
      },
    },
  },
  plugins: [customOutputPlugin()],
});
