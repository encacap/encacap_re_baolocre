import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ContentWrapperBodyProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode | ReactNode[];
}

const ContentWrapperBody = ({ children, className, ...otherProps }: ContentWrapperBodyProps) => {
  return (
    <div className={twMerge("col-span-4 lg:col-span-3", className)} {...otherProps}>
      {children}
    </div>
  );
};

export default ContentWrapperBody;
