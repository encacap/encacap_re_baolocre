import Category from "../../../common/Category/Category";
import { CategoryType } from "../../../types/commonTypes";
import NewsSearch from "./NewsSearch";

interface ContentHeaderProps {
  categories: CategoryType[];
}

function NewsContentHeader({ categories }: ContentHeaderProps) {
  return (
    <div>
      <Category categories={categories} />
      <NewsSearch className="block mb-6 -mt-4 md:-mt-2 md:mb-5 lg:hidden" />
    </div>
  );
}

export default NewsContentHeader;
