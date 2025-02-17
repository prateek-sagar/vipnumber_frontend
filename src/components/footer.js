export default function footer() {
  return `
    
    <div class="w-full h-1/2 flex bg-white px-8 py-10 lg:px-20">
        <div class = "flex justify-between flex-col w-full lg:flex-row">
            <div class="">
                <img src="" />
            </div>
            <div class="footer-content-box">
                <h3 class = "text-2xl my-2 text-[#474b67] font-bold ">SUPPORT</h3>
                <ul class = "list-none space-y-1">
                    <li class = "relative w-fit hover:before:w-1/2 before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-blue-500 before:transition-all before:duration-300"><a href="">Contact Us</a></li>
                    <li class = "relative w-fit hover:before:w-1/2 before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-blue-500 before:transition-all before:duration-300"><a href="">FAQ'S</a></li>
                    <li class = "relative w-fit hover:before:w-1/2 before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-blue-500 before:transition-all before:duration-300">Why us?</li>
                </ul>
            </div>
            <div class="footer-content-box">
                <h3 class = "text-2xl my-2 text-[#474b67] font-bold ">WE ACCEPT</h3>
                <ul class = "list-none space-y-1">
                    <li class = "relative w-fit hover:before:w-1/2 before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-blue-500 before:transition-all before:duration-300"><a href="">Terms & conditions</a></li>
                    <li class = "relative w-fit hover:before:w-1/2 before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-blue-500 before:transition-all before:duration-300">Privcy policy</li>
                    <li class = "relative w-fit hover:before:w-1/2 before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-blue-500 before:transition-all before:duration-300">Refund policy</li>
                </ul>
            </div>
            <div class="footer-content-box">
                <h3 class = "text-2xl my-2 text-[#474b67] font-bold ">SOCIAL MEDIA</h3>
                <ul class = "list-none flex flex-row space-x-2">
                    <li><svg class="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg></li>
                    <li><svg class="h-8 w-8 text-blue-600"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></li>
                    <li><svg class="h-8 w-8 text-blue-600"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></li>
                    <li><svg class="h-8 w-8 text-red-600"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></li>
                    <li><svg class="h-8 w-8 text-blue-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg></li>
                </ul>
        
            </div>
            <form class="max-w-sm my-3">
                <div class="flex">
                    <input type="text" id="website-admin" class="rounded-none rounded-s-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your email here">
                    <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-e-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <svg class="h-4 w-4 text-slate-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="10" y1="14" x2="21" y2="3" />  <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" /></svg>
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                    </span>
                </div>
            </form>

        </div>
    </div>
    `;
}
