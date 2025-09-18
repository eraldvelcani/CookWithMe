import { NavLink } from "react-router";
import { PiCookingPot } from "react-icons/pi";

const Navbar = () => {
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
            <div className="hidden md:flex items-center gap-6">
                <div className="space-x-4 font-semibold text-base text-green-800">
                    <NavLink to="/" className={({ isActive }) => isActive ? active : base}>Home</NavLink>
                    <NavLink to="/recipes" className={({ isActive }) => isActive ? active : base}>Recipes</NavLink>
                    <NavLink to="/subscription" className={({ isActive }) => isActive ? active : base}>Newsletter</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? active : base}>About Us</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? active : base}>Contact</NavLink>
                </div>
            </div>
        </div>
    </nav> );
}
 
export default Navbar;