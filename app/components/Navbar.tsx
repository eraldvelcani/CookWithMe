import { NavLink } from "react-router";
import { PiCookingPot } from "react-icons/pi";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from "react";

const Navbar = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    const base = 'hover:text-green-200 transition';
    const active = 'text-orange-50 font-bold';

    return ( 
    <nav className="bg-orange-400 border-b border-green-700 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <NavLink to='/' className="flex items-center gap-2 text-lg font-bold text-green-800">
                <PiCookingPot className="text-green-800 text-xl"/>
                <span>
                    CookWithMe
                </span>
            </NavLink>

            {/*For desktop screens*/}
            <div className="hidden md:flex items-center gap-6">
                <div className="space-x-4 font-semibold text-base text-green-800">
                    <NavLink to="/" className={({ isActive }) => isActive ? active : base}>Home</NavLink>
                    <NavLink to="/recipes" className={({ isActive }) => isActive ? active : base}>Recipes</NavLink>
                    <NavLink to="/subscription" className={({ isActive }) => isActive ? active : base}>Newsletter</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? active : base}>About Us</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? active : base}>Contact</NavLink>
                </div>
            </div>

            {/*For mobile screens*/}
            <div className="md:hidden flex-items-center gap-4">
                <button onClick={() => setMenuOpened(!menuOpened)} className="text-green-800 text-xl title='burger-menu' cursor-pointer">
                    {menuOpened ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </div>

        {
            menuOpened && (
                <div className="md:hidden bg-green-700 text-orange-300 font-semibold px-6 py-4 space-y-2 space-x-4 text-center">
                    <NavLink to="/" className={({ isActive }) => isActive ? active : base}>Home</NavLink>
                    <NavLink to="/recipes" className={({ isActive }) => isActive ? active : base}>Recipes</NavLink>
                    <NavLink to="/subscription" className={({ isActive }) => isActive ? active : base}>Newsletter</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? active : base}>About Us</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? active : base}>Contact</NavLink>
                </div>
            )
        }
    </nav> );
}
 
export default Navbar;