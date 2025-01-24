import blackLogo from "../resources/vipnumber_black_logo.png";

export default function header() {
  return `
        <div class="flex justify-between h-28 bg-black text-white px-8 w-full md:px-16 lg:px-20">
            <div class="logo-container flex items-center w-48 h-full overflow-hidden">
                <img class="w-full object-cover" src="${blackLogo}" />
            </div>
            <nav class="w-1/2">
                <ul class="hidden h-full justify-center items-center space-x-6 font-bold text-lg md:flex" >
                    <li class="">
                        <a href="/">
                            Home
                        </a>
                    </li>
                    <li class="">
                        <a href="/about/">
                            About
                        </a>
                    </li>
                    <li class="">
                        <a href="/">
                            Hot Deals
                        </a>
                    </li>
                    <li class="">
                        Login/SignUp
                    </li>
                    <li class="">
                    </li>
                </ul>
            </nav>
        </nav>
    `;
}
