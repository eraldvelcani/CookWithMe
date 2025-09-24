import { Link } from "react-router";

const PageNotFound = () => {
    return ( 
        <div className="flex flex-col items-center justify-center text-center px-6 min-h-[70vh]">
            <h1 className="text-6xl font-extrabold text-black mb-2">404</h1>
            <h2 className="text-3xl font-semibold text-gray-900 mb-7">Page Not Found</h2>
            <Link to="/" className="inline-block border border-orange-600 bg-orange-600 text-white px-6 py-2 rounded hover:bg-white hover:text-orange-600 transition">Return</Link>
        </div>
     );
}
 
export default PageNotFound;