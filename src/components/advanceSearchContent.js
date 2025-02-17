import close from "../resources/close.png";
export default function advanceSearchContent() {
  return `
    <div class="fixed h-full w-full top-0 left-0 bg-black bg-opacity-15 backdrop-blur-md z-[99]">
        <div class="fixed flex rounded-[1.25rem] flex-col shadow-[0_0_10px_-4px] bg-white p-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-3">
            <div class="absolute top-2 right-2 cursor-pointer" id="close-popup-button">
            <img class="w-8" src="${close}"/>
            </div>
            <div class="text-center text-4xl mb-5 font-semibold">Advance Search</div>
            <div class="flex flex-col gap-6">
                <div class="flex">
                    <div class="w-1/2 relative">
                        <label class="absolute -top-3 bg-white px-1 font-semibold text-[12px] left-4">Must Contain</label>
                        <input class=" outline outline-primary outline-[1px] px-4 py-2 rounded-md" type="text" placeholder="e.g. 14,18"/>
                    </div>
                    <div class="w-1/2 relative">
                        <label class="absolute -top-3 bg-white px-1 font-semibold text-[12px] left-4">Not Contain</label>
                        <input class=" outline outline-primary outline-[1px] px-4 py-2 rounded-md" type="text" placeholder="e.g. 14"/>
                    </div>
                </div>
                <div class="flex">
                    <div class="w-1/2 relative">
                        <label class="absolute -top-3 bg-white px-1 font-semibold text-[12px] left-4">Total</label>
                        <input class=" outline outline-primary outline-[1px] px-4 py-2 rounded-md" type="text" placeholder="e.g. 14,18"/>
                    </div>
                    <div class="w-1/2 relative">
                        <label class="absolute -top-3 bg-white px-1 font-semibold text-[12px] left-4">Sum</label>
                        <input class=" outline outline-primary outline-[1px] px-4 py-2 rounded-md" type="text" placeholder="e.g. 14"/>
                    </div>
                </div>
            </div>
            <div class="flex items-center gap-4 justify-center ">
                <div class="w-8 h-[1px] bg-gray-500"></div>
                OR
                <div class="w-8 h-[1px] bg-gray-500"></div>
            </div>
            <div class=" bg-white px-1 font-semibold text-[14px]">Place any number in the available places</div>
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
    <input type="text" maxlength="1" class="w-10 rounded-lg p-2 outline-[1px] outline-primary outline  aspect-square" >

    </input>
    `;
}

function numberPlacement() {
  const entries = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return entries.map(() => places()).join("");
}
