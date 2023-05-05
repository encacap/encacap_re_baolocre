import { IResponseMeta } from "@encacap-group/types/dist/base";
import { ICategory, IEstate } from "@encacap-group/types/dist/re";
import { CategoryType, HTMLHeadType } from "./commonTypes";
import { HomepageSliderType } from "./dataTypes";

export interface HomePageProps {
  head: HTMLHeadType;
  sliderImages: HomepageSliderType[];
  estates: IEstate[];
  estateMeta: IResponseMeta;
}

export interface EstateListPageProps {
  head: HTMLHeadType;
  categories: ICategory[];
  estates: IEstate[];
  estateMeta: IResponseMeta;
}

export interface EstateDetailPageProps {
  head: HTMLHeadType;
  categories: ICategory[];
  estate: IEstate;
  randomEstates: IEstate[];
  relativeEstates: IEstate[];
}

export interface NewsListPageProps {
  head: HTMLHeadType;
  categories: CategoryType[];
}

export interface NewsDetailPageProps {
  head: HTMLHeadType;
  categories: CategoryType[];
}
