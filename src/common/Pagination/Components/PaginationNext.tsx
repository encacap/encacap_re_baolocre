import Link from "next/link";
import ChevronRightIcon from "../../Icons/ChevronRightIcon";

interface PaginationNextProps {
  current: number;
}

function PaginationNext({ current }: PaginationNextProps) {
  return (
    <Link href={`/estates?page=${current + 1}`}>
      <a className="flex items-center justify-center h-8 px-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg md:h-10 hover:bg-gray-100 hover:text-gray-700">
        <span className="sr-only">Next</span>
        <ChevronRightIcon className="w-5" />
      </a>
    </Link>
  );
}

export default PaginationNext;
