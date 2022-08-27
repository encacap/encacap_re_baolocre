import { CategoryType, HTMLHeadType } from "./commonTypes";
import { ImageDataType } from "./dataTypes";

export interface HomePageProps {
  head: HTMLHeadType;
  sliderImages: ImageDataType[];
}

export interface EstateListPageProps {
  head: HTMLHeadType;
  categories: CategoryType[];
}

export interface EstateDetailPageProps {
  head: HTMLHeadType;
  categories: CategoryType[];
}

export interface NewsListPageProps {
  head: HTMLHeadType;
  categories: CategoryType[];
}

export interface NewsDetailPageProps {
  head: HTMLHeadType;
  categories: CategoryType[];
}
