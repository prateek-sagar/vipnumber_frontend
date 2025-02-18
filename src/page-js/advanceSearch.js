import advanceSearchContent from "../components/advanceSearchContent";

const _advanceSearchTrigger = document.getElementById("advance-search-trigger");

_advanceSearchTrigger.addEventListener("click", () => {
  document.getElementById("pop-up").innerHTML = advanceSearchContent();
  closePopUp();
});

function closePopUp() {
  document
    .getElementById("close-popup-button")
    .addEventListener("click", () => {
      document.getElementById("pop-up").innerHTML = "";
    });
}
