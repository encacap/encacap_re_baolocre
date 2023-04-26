import Category from "../../../common/Category/Category";
import { CategoryType } from "../../../types/commonTypes";
import HouseModalSearch from "./HouseModalSearch";

interface ContentHeaderProps {
  categories: CategoryType[];
}

function HouseModalContentHeader({ categories }: ContentHeaderProps) {
  return (
    <div>
      <Category categories={categories} />
      <HouseModalSearch className="block mb-6 -mt-4 md:-mt-2 md:mb-5 lg:hidden" />
    </div>
  );
}

export default HouseModalContentHeader;
