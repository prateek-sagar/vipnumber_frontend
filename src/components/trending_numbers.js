import numberCard from "./numberCard";

export default function trending_numbers() {
  return `
    <div class="grid grid-flow-row grid-cols-2 w-full h-dvh min-h-fit gap-2 lg:grid-cols-3">
        ${numbers()} 
    </div>
    `;
}

function numbers() {
  const phoneNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return phoneNumber.map(() => numberCard()).join("");
}
