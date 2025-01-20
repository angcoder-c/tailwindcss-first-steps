import { RiGlobalFill } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";
import { IoLogoGameControllerA } from "react-icons/io";
import { FaNewspaper } from "react-icons/fa6";
import ssf2logo from '../assets/ssf2_logo_flames-crop.png'

const NavBar = () => {
    return (
        <section>
            <div className="py-2">
                <nav>
                    <ul className="grid grid-cols-5 text-center">
                        <li className="py-5 border-b-4 border-b-red relative overflow-hidden group flex justify-center items-center gap-1">
                            <FaNewspaper className="relative z-10 text-white font-bold" />
                            <span className="relative z-10 text-white font-bold">NEWS</span>
                            <div className="absolute inset-0 bg-red top-full transition-all duration-500 ease-in-out group-hover:top-0"></div>
                        </li>

                        <li className="py-5 border-b-4 border-b-yellow relative overflow-hidden group flex justify-center items-center gap-1">
                            <IoLogoGameControllerA className="relative z-10 text-white font-bold" />
                            <span className="relative z-10 text-white font-bold">PLAY</span>
                            <div className="absolute inset-0 bg-yellow top-full transition-all duration-500 ease-in-out group-hover:top-0"></div>
                        </li>

                        <li className="relative border-b-4 border-b-gray border-dashed overflow-visible">
                            <img
                                src={ssf2logo}
                                alt="logo"
                                className="relative z-10 translate-y-3 max-h-20 mx-auto"
                            />
                        </li>

                        <li className="py-5 border-b-4 border-b-blue relative overflow-hidden group flex justify-center items-center gap-1">
                            <TiMessages className="relative z-10 text-white font-bold" />
                            <span className="relative z-10 text-white font-bold">COMUNITY</span>
                            <div className="absolute inset-0 bg-blue top-full transition-all duration-500 ease-in-out group-hover:top-0"></div>
                        </li>

                        <li className="py-5 border-b-4 border-b-purple relative overflow-hidden group flex justify-center items-center gap-1">
                            <RiGlobalFill className="relative z-10 text-white font-bold" />
                            <span className="relative z-10 text-white font-bold">MGN</span>
                            <div className="absolute inset-0 bg-purple top-full transition-all duration-500 ease-in-out group-hover:top-0"></div>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default NavBar