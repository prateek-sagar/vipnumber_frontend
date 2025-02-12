import numberEntries from "../components/numberEntries";
import searchBar from "../components/searchBar";
import sortFilter from "../components/sortFilter";

document.getElementById("premium-num").innerHTML = numberEntries();
document.getElementById("search-bar").innerHTML = searchBar();

const sortFilterContainer = document.getElementById("sort-filter");

console.dir(sortFilterContainer);

const sortFilterTogglers = sortFilterContainer.querySelectorAll("toggler");

sortFilterContainer.innerHTML = sortFilter();

sortFilterTogglers.forEach((toggler, index) => {
  toggler.addEventListener("click", () => {
    console.log("Number");
  });
});
