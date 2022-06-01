import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface PaginationItemProps {
    href: string;
    pageNumber: number;
    isActive?: boolean;
}

const PaginationItem = ({ href, pageNumber, isActive = false }: PaginationItemProps) => {
    return (
        <Link href={href}>
            <a
                className={twMerge(
                    "relative z-0 flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 md:h-10 hover:bg-gray-100 duration-100",
                    isActive &&
                        "border-encacap-main z-10 bg-encacap-main bg-opacity-10 text-encacap-main hover:bg-opacity-20 hover:bg-encacap-main"
                )}
            >
                {pageNumber}
            </a>
        </Link>
    );
};

export default PaginationItem;
