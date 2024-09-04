const Pagination = () => {
    return (
        <div className="flex justify-between">
            <button 
                type="button"
                className="px-4 py-2 bg-red-600 hover:bg-red-500 transition-colors text-white rounded w-[100px]"
            >
                Previous
            </button>
            <button 
                type="button"
                className="px-4 py-2 bg-red-600 hover:bg-red-500 transition-colors text-white rounded w-[100px]"
            >
                Next
            </button>
        </div>
    )
}

export default Pagination