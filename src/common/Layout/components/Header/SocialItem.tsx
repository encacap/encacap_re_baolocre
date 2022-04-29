import Link from "next/link";

interface SocialItemProps {
    children?: React.ReactNode;
    href: string;
    className: string;
}

const SocialItem = ({ children, href, className }: SocialItemProps) => (
    <Link href={href}>
        <a
            className={`flex items-center justify-center w-11 h-11 mr-2 rounded-full border-2 duration-150 bg-gray-100 text-xl text-zinc-500 ${className}`}
        >
            {children}
        </a>
    </Link>
);

export default SocialItem;
