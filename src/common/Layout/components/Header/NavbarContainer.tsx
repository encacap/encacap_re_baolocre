import { useRouter } from "next/router";
import { Children, cloneElement } from "react";

interface SidebarContainerProps {
    className?: string;
    children: React.ReactNode;
}

const NavbarContainer = ({ className, children: sidebarItems }: SidebarContainerProps) => {
    const params = useRouter();
    return (
        <nav className={className}>
            {Children.map(sidebarItems, (child: React.ReactElement) => {
                const { pathname } = params;
                const { href } = child.props;
                if (href === "/") {
                    return cloneElement(child, { isActive: pathname === href });
                }
                return cloneElement(child, { isActive: pathname.includes(href) });
            })}
        </nav>
    );
};

export default NavbarContainer;
