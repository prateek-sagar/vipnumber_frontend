import heart from "../resources/heart.png";
import numberEntry from "../model/numberEntry";
export default function numberCard() {
  return `
      <a href="/number-details"
      class="flex flex-col w-full h-40 shadow-[0_0px_35px_rgba(0,0,0,0.25)] bg-white rounded-lg text-2xl font-bold justify-center items-center text-green-500 hover:bg-green-500 hover:text-white cursor-pointer relative md:text-4xl lg:text-5xl lg:h-52 lg:px-4"
      >
        <div class="flex w-full justify-between items-center absolute top-4 left-0 px-2 text-xl">
        <h3 class="">${numberEntry.price}</h3>
        <div class="bg-gray-200 aspect-square rounded-full p-1">
        <img class="h-4" src="${heart}"></div>
        </div>
            ${numberEntry.number}
            <p class="text-[18px] text-gray-300">Total 60=6=6</p>
            <div class="text-sm absolute bottom-4 flex gap-2">
            <button
                    class="bg-green-500 text-white px-4 py-1 gap-2 flex rounded-full hover:bg-white hover:text-green-500 md:px-6"
                    >
                    Buy
                    </button> 
            <button
            class="bg-green-500 text-white px-4 py-1 gap-2 flex rounded-full hover:bg-white hover:text-green-500 md:px-6"
            >
            Add to Cart
            </button>
                    
        </div>
      </a>`;
}
