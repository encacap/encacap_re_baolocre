import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
    href: string;
    isActive?: boolean;
    children?: React.ReactNode;
}

const NavbarItem = ({ href, isActive = false, children }: SidebarItemProps) => (
    <Link href={href}>
        <a
            className={twMerge(
                "relative group inline-block pt-2 pb-3 md:pb-2 mr-6 whitespace-nowrap last:mr-0",
                isActive && "text-encacap-main"
            )}
        >
            {children}
            <span
                className={twMerge(
                    "hidden md:block h-0.5 bg-encacap-main rounded-t-xl absolute bottom-0 duration-150 group-hover:w-full",
                    isActive ? "w-full" : "w-0"
                )}
            />
        </a>
    </Link>
);

export default NavbarItem;
