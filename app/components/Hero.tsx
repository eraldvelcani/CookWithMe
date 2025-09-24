import { Link } from "react-router";

const Hero = () => {
    return ( 
        <header className="text-center py-20 px-4 bg-orange-100 text-green-700 transition-colors duration-300">
            <h2 className="text-4xl font-bold mb-4">CookWithMe</h2>
            <p className="text-xl text-orange-700 max-w-2xl mx-auto mb-6">💕 Recipes Prepared With Love 💝</p>
            <div className="flex justify-center gap-4">
                <Link to="/recipes" className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition">View Recipes</Link>
                <Link to="/contact" className="border border-orange-600 text-orange-600 px-6 py-2 rounded hover:bg-orange-600 hover:text-white transition">Contact Us</Link>
            </div>
        </header>
     );
}
 
export default Hero;