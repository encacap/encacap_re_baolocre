import { HTMLAttributes } from "react";
import { BreadcrumbType, CategoryType } from "./commonTypes";

export interface CategoryListProps extends HTMLAttributes<HTMLElement> {
  categories: CategoryType[];
}

export type CategoryItemProps = Omit<CategoryType, "categoryId"> & HTMLAttributes<HTMLElement>;

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  items: BreadcrumbType[];
}
