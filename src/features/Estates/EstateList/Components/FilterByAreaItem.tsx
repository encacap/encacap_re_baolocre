import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface AsideFilterItemProps {
    href: string;
    className?: string;
    children: React.ReactNode;
}

const AsideFilterItem = ({ href, children, className }: AsideFilterItemProps) => {
    return (
        <Link href={href}>
            <a className={twMerge("block py-1 duration-200 hover:text-encacap-main", className)}>{children}</a>
        </Link>
    );
};

export default AsideFilterItem;
