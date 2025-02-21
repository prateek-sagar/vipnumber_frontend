import numberCard from "../components/numberCard";
import purchaseNumberCard from "../components/purchaseNumberCard";

document.querySelectorAll(".buy-numbers").forEach((element) => {
  element.innerHTML = purchaseNumberCard();
});
document.querySelectorAll(".number-card").forEach((element) => {
element.innerHTML = numberCard();
});


