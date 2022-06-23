import { CategoryType, HTMLHeadType } from "./commonTypes";
import { HomepageSliderType } from "./dataTypes";

export interface HomePageProps {
    head: HTMLHeadType;
    sliderImages: HomepageSliderType[];
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
