import { ICategory } from "@encacap-group/types/dist/re";
import Category from "../../../common/Category/Category";
import EstateSearch from "../EstateList/Components/EstateSearch";

interface ContentHeaderProps {
  categories: ICategory[];
}

const EstateContentHeader = ({ categories }: ContentHeaderProps) => {
  return (
    <div>
      <Category categories={categories} />
      <EstateSearch className="block mb-6 -mt-4 md:-mt-2 md:mb-5 lg:hidden" />
    </div>
  );
};

export default EstateContentHeader;
