import blackLogo from "../resources/vipnumber_black_logo.png";
import "../components/css/header.css";
export default function header() {
  return `
        <div class="flex justify-between h-28 bg-black text-white px-8 w-full md:px-16 lg:px-20">
            <div class="logo-container flex items-center w-48 h-full overflow-hidden">
                <img class="w-full object-cover" src="${blackLogo}" />
            </div>
            <nav class="w-fit">
                <ul class="hidden h-full justify-center items-center space-x-6 font-medium text-lg md:flex" >
                    <li class="border-b-2 border-transparent hover:border-white active-header-link">
                        <a href="/">
                            Home
                        </a>
                    </li>
                    <li class="border-b-2 border-transparent hover:border-white">
                        <a href="/about/">
                            About
                        </a>
                    </li>
                    <li class="border-b-2 border-transparent hover:border-white">
                        <a href="/">
                            Hot Deals
                        </a>
                    </li>
                    <li class="border-b-2 border-transparent hover:border-white">
                        <a href="/contact-us">Contact Us</a>
                    </li>
                    <li class="header-login-btn">
                         <a href="/authentication/login.html">Login</a>
                    </li>
                    <li class="header-singup-btn">
                         <a href="/authentication/registration.html">Signup
                    </li>
                </ul>
            </nav>
        </nav>
    `;
}
