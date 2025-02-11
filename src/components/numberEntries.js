import numberCard from "./numberCard";
export default function numberEntries() {
  return `
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    ${numbers()}
  </div>
  `;
}

function numbers() {
  const phoneNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return phoneNumber.map(() => numberCard()).join("");
}
