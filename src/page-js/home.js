import fetching_premium_numbers from "../components/fetching_premium_numbers";
import number_categories from "../components/number_categories";
import searchBar from "../components/searchBar";
import trending_numbers from "../components/trending_numbers";
document.getElementById("highlighting-premium-grid").innerHTML =
  fetching_premium_numbers();
document.getElementById("trending-grid").innerHTML = trending_numbers();
document.getElementById("explore-categories").innerHTML = number_categories();
document.getElementById("search-bar").innerHTML = searchBar();
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("content-to-add");
  const images = container.innerHTML;

  container.innerHTML += images;
});

document.getElementById("filter-trigger").addEventListener("click", () => {});
