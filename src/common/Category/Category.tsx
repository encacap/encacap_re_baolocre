import { twMerge } from "tailwind-merge";
import { CategoryListProps } from "../../types/commonProps";
import CategoryItem from "./CategoryItem";

function Category({ categories, className, ...otherProps }: CategoryListProps) {
  return (
    <div className={twMerge("flex mb-5", className)} {...otherProps}>
      {categories.map(({ categoryId, ...otherCategoryProps }) => (
        <CategoryItem key={categoryId} {...otherCategoryProps} />
      ))}
    </div>
  );
}

export default Category;
