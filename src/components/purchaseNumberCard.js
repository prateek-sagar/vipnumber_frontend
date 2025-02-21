import numberEntry from "../model/numberEntry";
import "../css/numberCard.css";

export default function purchaseNumberCard() {
  return `
      <div 
      class="flex w-full rounded-lg font-bold justify-between items-center cursor-pointer relative lg:px-4"
      >
        <div class="flex flex-col">
            <p class="font-elegant text-xl">
            ${numberEntry.number}</p>
        </div>
        <div class="flex justify-between items-center top-4 left-0 px-2 ">
            <h3 class="">${numberEntry.price}</h3>
        </div>
      </div>`;
}
