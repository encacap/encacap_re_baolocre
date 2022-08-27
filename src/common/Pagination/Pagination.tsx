import { twMerge } from "tailwind-merge";
import PaginationItem from "./Components/PaginationItem";
import PaginationNext from "./Components/PaginationNext";
import PaginationPrev from "./Components/PaginationPrev";

interface PaginationProps {
  className?: string;
  children?: React.ReactNode;
}

const Pagination = ({ className, children }: PaginationProps) => {
  return (
    <div className={twMerge("flex items-center justify-center", className)}>
      {children}
      <div className="inline-flex items-center justify-center -space-x-px">
        <PaginationPrev current={1} />
        <PaginationItem href="/" pageNumber={1} isActive />
        <PaginationItem href="/" pageNumber={2} />
        <PaginationNext current={1} />
      </div>
    </div>
  );
};

export default Pagination;
