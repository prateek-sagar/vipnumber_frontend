import heart from "../resources/heart.png";
import numberEntry from "../model/numberEntry";
import "../css/numberCard.css";

export default function numberCard() {
  return `
      <div 
      class="flex flex-col w-full h-44 shadow-[0_0px_12px_-02px_rgba(0,0,0,0.25)] bg-white rounded-lg text-2xl font-bold justify-center items-center text-green-500 hover:bg-green-500 hover:text-white cursor-pointer relative md:text-4xl lg:text-5xl lg:h-52 lg:px-4 number-entry-card"
      > 
        <div class="flex w-full justify-between items-center absolute top-4 left-0 px-2 text-xl">
          <h3 class="">&#8377; ${numberEntry.price}/-</h3>
          <div class="bg-gray-200 aspect-square rounded-full p-1">
            <img class="h-4" src="${heart}">
          </div>
        </div>
        <p class="font-elegant">${numberEntry.number}</p>
        <div class="flex flex-col gap-2 lg:flex-row justify-center items-center">
          <p class="text-[18px] text-gray-300 leading-5">Total 60=6=6</p>
          <a href="/number-details" class="text-[18px] leading-5  text-gray-400">View Details</a>
        </div>
        <div class="text-sm absolute bottom-4 flex gap-2">
            <a href="/booking-page"
                    class="bg-green-500 text-white px-4 py-1 gap-2 flex rounded-full md:px-6 buy-page-link"
                    >
                    Buy
                    </a> 
            <a href="/add-to-cart"
            class="bg-primary text-white px-4 py-1 gap-2 flex rounded-full md:px-6 add-to-cart-link"
            >
            Add to Cart
            </a>
        </div>
      </div>
      `;
}
