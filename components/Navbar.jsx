

import Link from "next/link";
import SignInOut from "./auth/SignInOut";

const Navbar = () => {
    return (
        <nav className="bg-gray-900 ">
            <div className="container flex justify-between items-center py-4">
                <div className="nav-brand">
                    <Link href="/">

                        <h1 className="font-serif   font-black text-3xl bg-gradient-to-r from-purple-500 to-pink-500 inline-block text-transparent bg-clip-text ">Eventry</h1>
                    </Link>
                </div>

                <ul className="flex gap-4 text-[#9C9C9C]">
                    <li><SignInOut /></li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
