import HouseModalItem from "./HouseModalItem";

const HouseModalList = () => {
    return (
        <div className="grid w-full px-4 mt-10 md:gap-4 md:grid-cols-2 lg:grid-cols-3 md:px-0">
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
