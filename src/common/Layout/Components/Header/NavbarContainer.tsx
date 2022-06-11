import { useRouter } from "next/router";
import { Children, cloneElement, useEffect, useRef } from "react";

interface SidebarContainerProps {
    className?: string;
    children: React.ReactNode;
}

const NavbarContainer = ({ className, children: sidebarItems }: SidebarContainerProps) => {
    const { pathname } = useRouter();
    const navbarContainerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const navbarContainerNode = navbarContainerRef.current;
        const activatedItem = navbarContainerNode?.querySelector<HTMLElement>(`a[href="${pathname}"]`);

        if (!activatedItem) {
            return;
        }

        const containerWidth = navbarContainerNode?.getBoundingClientRect().width;
        const activatedItemWidth = activatedItem?.getBoundingClientRect().width;

        navbarContainerNode.scrollTo({
            left: activatedItemWidth / 2 - containerWidth / 2,
        });
    }, [pathname]);

    return (
        <nav ref={navbarContainerRef} className={className}>
            {Children.map(sidebarItems, (child: React.ReactElement) => {
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
