import { ICategory } from "@encacap-group/types/dist/re";
import { HTMLAttributes } from "react";
import { BreadcrumbType } from "./commonTypes";

export interface CategoryListProps extends HTMLAttributes<HTMLElement> {
  categories: ICategory[];
}

export interface CategoryItemProps extends HTMLAttributes<HTMLElement> {
  category: ICategory;
}

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  items: BreadcrumbType[];
}
