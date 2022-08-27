import { CategoryType, HTMLHeadType } from "./commonTypes";
import { ImageDataType } from "./dataTypes";

export interface CommonPageProps {
  head: HTMLHeadType;
}

export interface HomePageProps extends CommonPageProps {
  sliderImages: ImageDataType[];
}

export interface EstateListPageProps extends CommonPageProps {
  categories: CategoryType[];
}

export interface EstateDetailPageProps extends CommonPageProps {
  categories: CategoryType[];
}

export interface NewsListPageProps extends CommonPageProps {
  categories: CategoryType[];
}

export interface NewsDetailPageProps extends CommonPageProps {
  categories: CategoryType[];
}
