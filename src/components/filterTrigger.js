import filterIcon from "../resources/filterIcon.png";
const based = {
  1: {
    id: 1,
    based: "pricing",
  },
  2: {
    id: 2,
    based: "category",
  },
  3: {
    id: 3,
    based: "sum_total",
  },
};

export default function filterTrigger() {
  return `
        <div id="filter-trigger" class="mx-3 px-4 bg-gray-300 flex justify-center items-center gap-1 rounded-full cursor-pointer ">
            <img src="${filterIcon}" class="w-4" />
            Advance Search
        </div>
    `;
}
