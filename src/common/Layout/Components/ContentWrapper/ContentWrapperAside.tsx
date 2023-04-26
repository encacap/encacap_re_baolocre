import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ContentWrapperAsideProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode | ReactNode[];
}

function ContentWrapperAside({ children, className, ...otherProps }: ContentWrapperAsideProps) {
  return (
    <aside className={twMerge("hidden lg:block space-y-8", className)} {...otherProps}>
      {children}
    </aside>
  );
}

export default ContentWrapperAside;
