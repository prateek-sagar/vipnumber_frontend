export default function numberCardNavigation() {
  const cards = document.querySelectorAll(".number-entry-card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      window.location.href = "/number-details";
    });
  });
  return ``;
}
