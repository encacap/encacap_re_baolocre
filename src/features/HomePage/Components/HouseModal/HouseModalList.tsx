import { twMerge } from "tailwind-merge";
import HouseModalItem from "./HouseModalItem";

interface HouseModalListProps {
    className?: string;
}

const HouseModalList = ({ className }: HouseModalListProps) => {
    return (
        <div
            className={twMerge(
                "grid w-full gap-4 px-4 mt-10 mb-4 md:mb-0 md:grid-cols-2 lg:grid-cols-3 md:px-0",
                className
            )}
        >
            <HouseModalItem />
            <HouseModalItem />
            <HouseModalItem />
            <HouseModalItem />
            <HouseModalItem />
            <HouseModalItem />
        </div>
    );
};

export default HouseModalList;
