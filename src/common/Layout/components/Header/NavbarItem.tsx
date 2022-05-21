import Link from "next/link";

interface SidebarItemProps {
    href: string;
    isActive?: boolean;
    children?: React.ReactNode;
}

const NavbarItem = ({ href, isActive = false, children }: SidebarItemProps) => (
    <Link href={href}>
        <a className={`relative group inline-block py-2 mr-6 ${isActive && " text-encacap-main"}`}>
            {children}
            <span
                className={`block h-0.5 bg-encacap-main rounded-t-xl absolute bottom-0 duration-150 group-hover:w-full ${
                    isActive ? "w-full" : "w-0"
                }`}
            />
        </a>
    </Link>
);

export default NavbarItem;
