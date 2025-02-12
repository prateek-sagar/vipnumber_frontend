const mapping_numbers = (number) =>
  ` <div class="bg-white flex justify-center shadow-[0_0_10px_-4px] shadow-gray-700 items-center cursor-pointer hover:bg-primary hover:text-white rounded-full font-semibold py-2 px-2 text-[14px]">
        ${number}
    </div> 
`;

export default function number_categories() {
  return `
    <div class="flex flex-wrap gap-x-4 gap-y-2 ">
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
