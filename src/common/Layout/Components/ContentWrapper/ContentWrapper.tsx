import { ReactNode } from "react";

interface ContentWrapperProps {
  children: ReactNode | ReactNode[];
}

const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return (
    <main className="pt-4 mx-4 lg:mx-10 xl:mx-48 lg:pt-10 md:pb-10">
      <div className="grid grid-cols-4 gap-10">{children}</div>
    </main>
  );
};

export default ContentWrapper;
