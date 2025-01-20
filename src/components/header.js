import blackLogo from "../resources/vipnumber_black_logo.png";

export default function header() {
  return `
        <div class="flex space-x-40 outline">
            <div class="logo-container h-20 ">
                <img class="h-full object-contain" src="${blackLogo}" />
            </div>
            <nav>
                <ul class="flex h-full justify-center items-center space-x-6" >
                    <li class="">
                        <a href="/">
                            Home
                        </a>
                    </li>
                    <li class="">
                        <a href="/">
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
