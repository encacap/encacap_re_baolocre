import { twMerge } from "tailwind-merge";
import { CategoryListProps } from "../../types/commonProps";
import CategoryItem from "./CategoryItem";

const Category = ({ categories, className, ...otherProps }: CategoryListProps) => {
  return (
    <div className={twMerge("flex mb-5", className)} {...otherProps}>
      {categories.map((item) => (
        <CategoryItem key={item.id} category={item} />
      ))}
    </div>
  );
};

export default Category;
