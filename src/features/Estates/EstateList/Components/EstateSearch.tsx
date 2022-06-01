const EstateSearch = () => {
    return (
        <form className="relative block" name="estateSearch" action="/bat-dong-san-ban" method="GET">
            <input
                type="text"
                name="estateSearchQuery"
                id="query"
                className="w-full px-5 py-4 border-2 border-gray-100 rounded-md outline-none focus:border-encacap-main"
                placeholder="Nhập mã bất động sản hoặc tiêu đề để tìm kiếm..."
            />
            <button
                type="submit"
                className="absolute flex items-center px-4 py-1 text-white duration-200 rounded-md top-3.5 right-3 bg-encacap-main hover:bg-yellow-600"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-4 mr-2">
                    <path
                        d="M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2"
                        stroke="currentColor"
                        strokeWidth="2.0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                Tìm
            </button>
        </form>
    );
};

export default EstateSearch;
