import Link from "next/link";

export interface IconProps {
    children?: React.ReactNode;
    href: string;
    className?: string;
}

const IconWrapper = ({ children, href, className }: IconProps) => (
    <Link href={href}>
        <a
            className={`flex items-center justify-center w-11 h-11 mr-2 rounded-full border-2 duration-150 bg-gray-100 text-xl text-zinc-500 ${className}`}
        >
            {children}
        </a>
    </Link>
);

export default IconWrapper;
