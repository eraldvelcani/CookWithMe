type SearchbarProps = {
    searchQuery: string;
    onSearchChange: (value:string) => void;
};   

const Searchbar = ({ searchQuery, onSearchChange }:SearchbarProps) => {
    return ( 
        <div className="mb-6">
            <input type="text" placeholder="Seach Recipes..." value={searchQuery} onChange={(e) => onSearchChange(e.target.value)} className="w-full px-4 py-2 rounded-lg bg-orange-400 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:placeholder-transparent placeholder-white transition duration-200" />
        </div>
     );
}
 
export default Searchbar;