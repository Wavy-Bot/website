import Link from "next/link";
import {useState} from "react";
import { NavLink } from "./navlink";

export default function Navbar() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active)
    };

    return (
        <>
            <nav className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row">
                <div className="flex gap-2">
                    <Link href="/">
                        <a className="flex font-medium items-center mb-4 md:mb-0">
                            <span className="text-2xl font-bold duration-200">Wavy</span>
                        </a>
                    </Link>
                    <button
                        className="ml-auto inline-block md:hidden w-8 h-8 text-gray-400 focus:text-white p-1"
                        onClick={handleClick}
                        aria-label="Navigation menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`${
                        active ? "flex" : "hidden"
                    }   md:ml-auto md:flex flex-wrap flex-col md:flex-row md:space-x-4 items-center w-full pt-2 md:pt-0 md:w-auto text-lg justify-center font-semibold`}
                >
                    <NavLink href="/">
                        <a className="w-full sm:w-auto flex-none hover:text-white duration-200 text-md py-2 rounded mr-auto mr-0@m">
                            Home
                        </a>
                    </NavLink>
                    <a href="https://invite.wavybot.com" className='flex items-center w-full sm:w-auto flex-none md:bg-gray-800 text-gray-400 hover:text-white md:hover:bg-gray-700 duration-200 text-md py-2 rounded mr-auto mr-0@m md:px-2' rel="noopener noreferrer">
                        <svg fill="currentColor" className="w-6 h-6 lg:inline-block mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title>Discord</title>
                            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                        </svg>
                        Invite
                    </a>
                </div>
            </nav>
        </>
    )
}
