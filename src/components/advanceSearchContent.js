export default function advanceSearchContent() {
  return `
    <div class="fixed h-full w-full top-0 left-0 bg-black bg-opacity-15 backdrop-blur-md z-[99]">
        <div class="fixed flex rounded-lg flex-col shadow-[0_0_10px_-4px] bg-white p-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-5">
            <div class="absolute top-2 right-5 cursor-pointer" id="close-popup-button">x</div>
            <div class="text-center text-2xl font-semibold">Advance Search</div>
            <div class="">
                <div class="">
                    
                </div>
            </div>
            <div class="flex  items-center gap-4">
                <div class="w-8 h-[1px] bg-gray-500"></div>
                OR
                <div class="w-8 h-[1px] bg-gray-500"></div>
            </div>
            <div class=" flex gap-5">
                ${numberPlacement()}
            </div>
            <div class="">
                <div class="rounded-full w-fit px-4 py-1 text-white bg-primary">Search</div>
            </div>
        <div>
    <div>
    `;
}

function places() {
  return `
    <input type="text" maxlength="1" class="w-10 rounded-lg outline-[1px] outline-primary outline  aspect-square" >

    </input>
    `;
}

function numberPlacement() {
  const entries = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return entries.map(() => places()).join("");
}
