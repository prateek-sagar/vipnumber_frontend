const mapping_numbers = (number) =>
  ` <div class="bg-white flex justify-center shadow-md shadow-gray-300 items-center rounded-sm py-2 text-[0.875rem]">
        ${number}
    </div> 
`;

export default function number_categories() {
  return `
    <div class="grid py-4 grid-cols-2 gap-x-8 cursor-pointer gap-y-4 md:grid-cols-3 lg:grid-cols-4">
        ${categories()}
    </div>
    `;
}

function categories() {
  const _categories = [
    "Mirror Numbers",
    "Semi Mirror Numbers",
    "Two digit Number",
    "Three digit Number",
    "Counting VIP Number",
    "786 Number",
    "108 Number",
    "Doubling Number",
    "AB AB AB Number",
    "Start AB AB Number",
    "Middle AB AB Number",
    "Ending AB AB Number",
    "ABC ABC ABC Number",
    "ABC ABC Number",
    "AAA BBB Number",
    "Triple Number",
    "Tetra Number",
    "Penta Number",
    "Hexa Number",
    "Septa Number",
    "Octa Number",
    "Unique Number",
    "Without 248 Number",
  ];

  return _categories.map((num) => mapping_numbers(num)).join("");
}
