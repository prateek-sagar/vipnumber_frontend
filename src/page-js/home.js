import fetching_premium_numbers from "../components/fetching_premium_numbers";
import number_categories from "../components/number_categories";
import trending_numbers from "../components/trending_numbers";
document.getElementById("highlighting-premium-grid").innerHTML =
  fetching_premium_numbers();
document.getElementById("trending-grid").innerHTML = trending_numbers();
document.getElementById("explore-categories").innerHTML = number_categories();
