import { useRouter } from "next/router";
import { Children, cloneElement } from "react";

interface SidebarContainerProps {
    className?: string;
    children: React.ReactNode;
}

const SidebarContainer = ({ className, children: sidebarItems }: SidebarContainerProps) => {
    const params = useRouter();
    return (
        <nav className={className}>
            {Children.map(sidebarItems, (child: React.ReactElement) => {
                const { href } = child.props;
                const isActive = href === params.pathname;
                return cloneElement(child, { isActive });
            })}
        </nav>
    );
};

export default SidebarContainer;
