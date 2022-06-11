import { twMerge } from "tailwind-merge";

interface ContentWrapperBodyProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode | React.ReactNode[];
}

const ContentWrapperBody = ({ children, className, ...otherProps }: ContentWrapperBodyProps) => {
    return (
        <div className={twMerge("col-span-4 lg:col-span-3", className)} {...otherProps}>
            {children}
        </div>
    );
};

export default ContentWrapperBody;
