import heart from "../resources/heart.png";

const numberEntryCard = () => `
        <div
            class="flex flex-col w-full h-40 bg-white rounded-lg text-3xl font-bold justify-center items-center text-green-500 hover:bg-green-500 hover:text-white cursor-pointer relative md:text-4xl lg:text-5xl"
            >
            <div class="flex w-full justify-between items-center absolute top-4 left-0 px-2 text-xl">
              <h3 class="">2000</h3>
              <div class="bg-gray-200 aspect-square rounded-full p-1">
              <img class="h-4" src="${heart}"></div>
            </div>
            9985757413
            <div class="text-sm absolute bottom-4 flex gap-2">
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
    <div class="grid grid-flow-row grid-cols-2 w-full h-dvh min-h-fit py-4 gap-2 lg:grid-cols-3">
        ${numbers()} 
    </div>
    `;
}

function numbers() {
  const phoneNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return phoneNumber.map(() => numberEntryCard()).join("");
}
