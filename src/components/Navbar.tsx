import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineCode } from 'react-icons/ai';
import { FiSun, FiMoon } from 'react-icons/fi';
import { GlobalContext } from '../providers/GlobalProvider'

const activeButtonClasses = "text-gray-100 shadow-xl bg-blue-600 px-3 py-2 rounded-md text-md font-medium";
const mobileActiveButtonClasses = "text-gray-100 shadow-xl bg-blue-600 block px-3 py-2 rounded-md text-base font-medium";

const standardButtonClasses = "text-blue-900 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-md font-medium"
const mobileButtonClasses = "text-blue-900 hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const { state, dispatch } = useContext(GlobalContext);

    return (
        <nav className="mb-4 bg-blue-400 shadow-md dark:bg-gray-900">
            {/* Adapted from the TailwindUI example nav */}
            {/* https://tailwindui.com/components/application-ui/navigation/navbars */}
            <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* <!-- Mobile menu button--> */}
                        <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => setOpenMenu(!openMenu)} type="button" className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            {/* Icon when menu is closed. Heroicon name: outline/menu. Menu open: "hidden", Menu closed: "block" */}
                            <svg className="block w-6 h-6 text-2xl text-blue-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                        <div className="flex items-center flex-shrink-0">
                            <a href="/" className="flex w-auto h-8 text-3xl text-blue-900 lg:hidden"><AiOutlineCode /><span className='pl-1 text-2xl'>@atlc</span></a>
                            <a href="/" className="items-center hidden w-auto h-8 text-4xl text-blue-900 lg:flex"><AiOutlineCode /><span className='pl-1 text-2xl'>@atlc</span></a>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                <NavLink exact to="/" activeClassName={activeButtonClasses} className={standardButtonClasses} aria-current="page">Home</NavLink>
                                <NavLink exact to="/board" activeClassName={activeButtonClasses} className={standardButtonClasses}>Board</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="flex text-2xl dark:text-blue-700">
                        <button onClick={() => dispatch({ type: "toggle_dm" })}>{state?.isDark ? <FiMoon /> : <FiSun />}</button>
                    </div>
                </div>
            </div>
            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            {openMenu && <div className="sm:hidden" id="mobile-menu" >
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                    <NavLink onClick={() => setOpenMenu(false)} exact to="/" activeClassName={mobileActiveButtonClasses} className={mobileButtonClasses} aria-current="page">Home</NavLink>
                    <NavLink onClick={() => setOpenMenu(false)} exact to="/board" activeClassName={mobileActiveButtonClasses} className={mobileButtonClasses}>Board</NavLink>
                </div>
            </div>}
        </nav>
    )
}

export default Navbar;