import { useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { BreadcrumbProps } from "../../types/commonProps";
import { BreadcrumbType } from "../../types/commonTypes";
import BreadcrumbItem from "./BreadcrumbItem";

const defaultBreadcrumbItems = [
  {
    text: "Trang chủ",
    link: "/",
  },
];

const Breadcrumb = ({ items, className }: BreadcrumbProps) => {
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
    <div className={twMerge("flex flex-wrap items-center", className)}>
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
