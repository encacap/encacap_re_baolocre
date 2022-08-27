import { twMerge } from "tailwind-merge";

interface ContentWrapperAsideProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode | React.ReactNode[];
}

const ContentWrapperAside = ({ children, className, ...otherProps }: ContentWrapperAsideProps) => {
  return (
    <aside className={twMerge("hidden lg:block space-y-8", className)} {...otherProps}>
      {children}
    </aside>
  );
};

export default ContentWrapperAside;
