import fetching_premium_numbers from "../components/fetching_premium_numbers";
import number_categories from "../components/number_categories";
import trending_numbers from "../components/trending_numbers";
document.getElementById("highlighting-premium-grid").innerHTML =
  fetching_premium_numbers();
document.getElementById("trending-grid").innerHTML = trending_numbers();
document.getElementById("explore-categories").innerHTML = number_categories();

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("content-to-add");
  const images = container.innerHTML; // Get initial content

  // Duplicate content for seamless scrolling
  container.innerHTML += images; // Clone for smooth looping
});

// const scrollers = document.querySelectorAll(".scroller");
// if(!window.matchMedia("(prefers-reduce-motion: reduce)").matches) {
//   addanimation();
// }

// function addanimation() {
//   scrollers.forEach((scroller) => {
//     scroller.setAttribute('data-animated', true);
//     const scrollerInner = scroller.querySelector('#content-to-add');
//     const scrollerContent = scrollerInner.children;
//     console.log(scrollerContent);
    

//   })
// }