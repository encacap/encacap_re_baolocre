import Link from "next/link";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface AsideFilterItemProps {
  href: string;
  className?: string;
  children: ReactNode;
}

function AsideFilterItem({ href, children, className }: AsideFilterItemProps) {
  return (
    <Link href={href}>
      <a href={href} className={twMerge("block py-1 duration-200 hover:text-encacap-main", className)}>
        {children}
      </a>
    </Link>
  );
}

export default AsideFilterItem;
