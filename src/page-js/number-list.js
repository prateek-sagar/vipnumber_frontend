import filters from "../components/filters";
import numberEntries from "../components/numberEntries";
import searchBar from "../components/searchBar";
import sortFilter from "../components/sortFilter";

document.getElementById("premium-num").innerHTML = numberEntries();
document.getElementById("search-bar").innerHTML = searchBar();
document.getElementById("filters").innerHTML = filters();
const sortFilterContainer = document.getElementById("sort-filter");

sortFilterContainer.innerHTML = sortFilter();

const sortFilterTogglers = sortFilterContainer.querySelectorAll(".toggler");

sortFilterTogglers.forEach((toggler, index) => {
  toggler.addEventListener("click", () => {
    sortFilterTogglers.forEach((toggle) => {
      toggle.classList.remove("active-toggle");
    });

    toggler.classList.add("active-toggle");
  });
});


