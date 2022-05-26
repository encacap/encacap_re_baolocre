import { useMemo, useState } from "react";
import { BreadcrumbProps } from "../Types/commonProps";
import { BreadcrumbType } from "../Types/commonTypes";
import BreadcrumbItem from "./BreadcrumbItem";

const defaultBreadcrumbItems = [
    {
        text: "Trang chủ",
        link: "/",
    },
];

const Breadcrumb = ({ items }: BreadcrumbProps) => {
    const [totalBreadcrumbItems, setTotalBreadcrumbItems] = useState(0);
    const breadcrumbs = useMemo<BreadcrumbType[]>(() => {
        let urlTree = "/";
        const newItems = items.map((item) => {
            const { text, link } = item;
            urlTree += `${link}/`;
            const newItem: BreadcrumbType = {
                text,
                link: urlTree,
            };
            return newItem;
        });
        setTotalBreadcrumbItems(newItems.length + defaultBreadcrumbItems.length);
        return [...defaultBreadcrumbItems, ...newItems];
    }, [items]);

    return (
        <div className="flex flex-wrap items-center">
            {breadcrumbs.map((item, index) => (
                <BreadcrumbItem
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    href={item.link}
                    label={item.text}
                    haveSeparator={index !== totalBreadcrumbItems - 1}
                />
            ))}
        </div>
    );
};

export default Breadcrumb;
