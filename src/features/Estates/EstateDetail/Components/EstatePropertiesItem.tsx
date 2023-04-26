import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface EstatePropertiesItemProps {
  name: string;
  value: string | ReactNode;
  isHighlight?: boolean;
}

const EstatePropertiesItem = ({ name, value, isHighlight }: EstatePropertiesItemProps) => {
  return (
    <div className="pr-4">
      <div
        className={twMerge("mb-1 text-sm font-semibold text-gray-400", isHighlight && "text-encacap-main")}
      >
        {name}
      </div>
      <div className={twMerge("py-1 text-lg font-semibold", isHighlight && "text-encacap-main")}>{value}</div>
    </div>
  );
};

export default EstatePropertiesItem;
