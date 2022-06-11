import Link from "next/link";
import ChevronLeftIcon from "../../Icons/ChevronLeftIcon";

interface PaginationPrevProps {
    current: number;
}

const PaginationPrev = ({ current }: PaginationPrevProps) => {
    return (
        <Link href={`/estates?page=${current - 1}`}>
            <a className="flex items-center justify-center h-8 px-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg md:h-10 hover:bg-gray-100 hover:text-gray-700">
                <span className="sr-only">Trang trước</span>
                <ChevronLeftIcon className="w-5" />
            </a>
        </Link>
    );
};

export default PaginationPrev;
