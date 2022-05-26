export interface EstateType {
    id: string;
    title: string;
    price: number | string;
    area: number;
    thumbnail: string;
    pictures: object[];
    videos: string[];
    avatar: {
        type: "image" | "video";
    };
    location: {
        city: string;
        district: string;
        ward: string;
        street: string;
    };
    description: string;
    contact: {
        phone: string;
    };
}

export interface HTMLHeadType {
    title: string;
}

export interface CategoryType {
    categoryId: number;
    name: string;
    url: string;
    image: string;
}

export interface BreadcrumbType {
    text: string;
    link?: string;
}
