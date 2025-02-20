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
        login: resolve(__dirname, "src/authentication/login.html"),
        registration: resolve(
          __dirname,
          "src/authentication/registration.html"
        ),
        otp_request: resolve(__dirname, "src/authentication/otp.html"),
        forgot_password: resolve(
          __dirname,
          "src/authentication/forgetpassword.html"
        ),

        refund_policy: resolve(__dirname, "src/refund-policy/index.html"),
        privacy_policy: resolve(__dirname, "src/privacy-policy/index.html"),
        terms_and_condition: resolve(
          __dirname,
          "src/terms-and-condition/index.html"
        ),
      },
    },
  },
  plugins: [customOutputPlugin()],
});
