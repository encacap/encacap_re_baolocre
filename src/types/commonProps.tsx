import { BreadcrumbType, CategoryType } from "./commonTypes";

export interface CategoryListProps extends React.HTMLAttributes<HTMLElement> {
    categories: CategoryType[];
}

export type CategoryItemProps = Omit<CategoryType, "categoryId"> & React.HTMLAttributes<HTMLElement>;

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
    items: BreadcrumbType[];
}
