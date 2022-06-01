import Link from "next/link";

interface AsideFilterItemProps {
    href: string;
    children: React.ReactNode;
}

const AsideFilterItem = ({ href, children }: AsideFilterItemProps) => {
    return (
        <Link href={href}>
            <a className="block py-1 duration-200 hover:text-encacap-main">{children}</a>
        </Link>
    );
};

export default AsideFilterItem;
