import AsideFilterItem from "./FilterByAreaItem";

const FilterByRegion = () => {
    return (
        <div className="px-5 py-4 border-2 rounded-md shadow-md border-encacap-main bg-opacity-10 bg-encacap-main shadow-gray-200">
            <div className="pb-4 font-semibold border-b-2 border-encacap-main">Bất động sản theo khu vực</div>
            <div className="mt-3">
                <AsideFilterItem href="/real_estate_detail.html">Hồ Chí Minh (6)</AsideFilterItem>
                <AsideFilterItem href="/real_estate_detail.html">Đồng Nai (10)</AsideFilterItem>
                <AsideFilterItem href="/real_estate_detail.html">Bảo Lộc (1)</AsideFilterItem>
            </div>
        </div>
    );
};

export default FilterByRegion;
