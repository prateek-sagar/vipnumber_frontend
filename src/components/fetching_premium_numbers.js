const numberEntryCard = () => `
        <div
            class="flex flex-col w-full h-full bg-white rounded-lg text-5xl font-bold justify-center items-center text-green-500 hover:bg-green-500 hover:text-white cursor-pointer relative"
          >
          
            9985757413
            <div class="text-sm absolute bottom-4 flex gap-4">
              <button
                class="bg-green-500 text-white px-6 py-1 gap-2 flex rounded-full hover:bg-white hover:text-green-500"
              >
                Buy
              </button>
              <button
                class="bg-green-500 text-white px-6 py-1 gap-2 flex rounded-full hover:bg-white hover:text-green-500"
              >
                Wishlist
              </button>
            </div>
          </div>
`;

export default function fetching_premium_numbers() {
  return `
    <div class="grid grid-flow-row grid-cols-3 w-full h-dvh p-4 gap-2">
        ${numbers()} 
    </div>
    `;
}

function numbers() {
  const phoneNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return phoneNumber.map(() => numberEntryCard()).join("");
}
