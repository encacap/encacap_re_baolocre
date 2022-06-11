import { twMerge } from "tailwind-merge";
import SearchIcon from "../../../common/Icons/SearchIcon";

const NewsSearch = ({ className }: React.HTMLAttributes<HTMLElement>) => {
    return (
        <form
            className={twMerge("relative block", className)}
            name="estateSearch"
            action="/bat-dong-san-ban"
            method="GET"
        >
            <input
                type="text"
                name="estateSearchQuery"
                id="query"
                className="w-full px-5 py-4 border-2 border-gray-100 rounded-md outline-none focus:border-encacap-main"
                placeholder="Nhập từ khoá cần tìm..."
            />
            <button
                type="submit"
                className="absolute flex items-center px-4 py-1 text-white duration-200 rounded-md top-3.5 right-3 bg-encacap-main hover:bg-yellow-600"
            >
                <SearchIcon className="w-4 mr-2" />
                Tìm
            </button>
        </form>
    );
};

export default NewsSearch;
