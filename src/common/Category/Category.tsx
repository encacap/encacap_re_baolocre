import { twMerge } from "tailwind-merge";
import { CategoryListProps } from "../Types/commonProps";
import CategoryItem from "./CategoryItem";

const Category = ({ categories, className, ...otherProps }: CategoryListProps) => {
    return (
        <div className={twMerge("flex mb-5 border-b-2 border-gray-100 md:border-0", className)} {...otherProps}>
            {categories.map(({ categoryId, ...otherCategoryProps }) => (
                <CategoryItem key={categoryId} {...otherCategoryProps} />
            ))}
        </div>
    );
};

export default Category;
