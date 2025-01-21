import header from "./src/components/header";
import fetching_premium_numbers from "./src/components/fetching_premium_numbers.js";
import footer from "./src/components/footer.js";
document.getElementById("header").innerHTML = header();

document.getElementById("highlighting-premium-grid").innerHTML =
  fetching_premium_numbers();
document.getElementById("footer").innerHTML = footer();