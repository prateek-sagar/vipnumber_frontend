import number_categories from "./number_categories";

export default function filters() {
  return `
        <div class="overflow-hidden rounded-lg shadow-[0_0_10px_-4px]">
           <div class="font-bold text-xl mb-2 bg-primary px-2 py-1 text-white"  >Search By SUM total</div>
           <div class="p-2">
            <input type="text" class="outline-[1px] outline outline-gray-400 text-sm px-4 py-1 rounded-full"/>
           </div> 
        </div>   
        <div class="overflow-hidden rounded-lg shadow-[0_0_10px_-4px]">
           <div class="font-bold text-xl mb-2 bg-primary px-2 py-1 text-white">Browse By Category</div>
           <div class="p-2">
            ${number_categories()}
           </div> 
        </div>   
        <div class="overflow-hidden rounded-lg shadow-[0_0_10px_-4px]">
           <div class="font-bold text-xl mb-2 bg-primary px-2 py-1 text-white">Browse By Pricing</div>
           <div class="flex flex-wrap gap-x-4 gap-y-2 p-2">
            <div class="px-4 py-1 rounded-full shadow-[0_0_10px_-4px]  ">0-500</div>
            <div class="px-4 py-1 rounded-full shadow-[0_0_10px_-4px]  ">500-1000</div>
            <div class="px-4 py-1 rounded-full shadow-[0_0_10px_-4px]  ">1000-2000</div>
            <div class="px-4 py-1 rounded-full shadow-[0_0_10px_-4px]  ">2000-4000</div>
            <div class="px-4 py-1 rounded-full shadow-[0_0_10px_-4px]  ">4000-8000</div>
            <div class="px-4 py-1 rounded-full shadow-[0_0_10px_-4px]  ">8000-16000</div>
            <div class="px-4 py-1 rounded-full shadow-[0_0_10px_-4px]  ">16000 - above</div>
           </div> 
        </div>   
    `;
}
