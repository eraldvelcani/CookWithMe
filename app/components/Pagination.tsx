//FIRST STEP: Adding arg types for TS:
type PaginationProps = {
    totalPages: number;
    currentPage: number;
    onPaginationSelection: (page:number) => void; //"(page:number)" means "function that takes in a page that is a number, that does not return anything"
}

const Pagination:React.FC<PaginationProps> = ({ totalPages, currentPage, onPaginationSelection }) => { //SECOND STEP: Adding ":React.FC<PaginationProps>" to the declaration
    if (totalPages <= 1) return null;
    return ( 
        <div className="flex justify-center gap-2 mt-8">
            {Array.from({length: totalPages}, (_, idx) => (
                <button key={idx + 1} onClick={() => onPaginationSelection(idx + 1)} className={`px-3 py-1 cursor-pointer rounded ${currentPage === idx + 1 ? 'bg-orange-500 text-white font-bold' : 'bg-yellow-400 text-gray-700'}`}>
                    {idx + 1}
                </button>
            ))}
        </div>
     );
}
 
export default Pagination;