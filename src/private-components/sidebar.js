import "../private-components/css/sidebar.css";
export default function sidebar() {
  return `
        <div class="flex lg:gap-8 lg:flex-col lg:min-h-screen w-full lg:w-1/5 text-white py-8 bg-gray-900">
            <h2 class="px-4 font-semibold lg:text-3xl">
                VIP Number
            </h2>
            <div class="flex lg:flex-col gap-3">
            
                <div class="active-sidebar-btn px-4 py-2 rounded-tr-lg rounded-br-lg font-semibold">
                Overview
                </div>

                <div class="px-4 py-2 rounded-tr-lg rounded-br-lg font-semibold sidebar-btn">
                Overview
                </div>
            
                <div class="px-4 py-2 rounded-tr-lg rounded-br-lg font-semibold sidebar-btn">
                Overview
                </div>
            </div>

            </div>
    `;
}
