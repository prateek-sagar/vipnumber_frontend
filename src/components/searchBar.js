import advanceSearchTrigger from "./advanceSearchTrigger";

export default function searchBar() {
  return `
    <div>
        <div class="flex flex-wrap w-full gap-2">
            <select
              class="relative flex w-[300px] bg-white border rounded-full border-green-600 hover:border-green-600 px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="anywhere">Anywhere</option>
              <option value="starts-with">Starts with</option>
              <option value="ends-with">Ends with</option>
            </select>
            <input
              type="text"
              class="rounded-full border px-4 py-1 border-green-600 w-[300px]"
              placeholder="e.g. 9898"
            />
            <div class="flex flex-wrap">
                <a
                    href="/numbers-list"
                    class="flex py-1 px-4 justify-center items-center rounded-full w-fit text-base text-white border border-green-500 bg-green-500 cursor-pointer"
                    >Search</a
                >
                ${advanceSearchTrigger()}
            </div>
          </div>
    </div>  
  `;
}
