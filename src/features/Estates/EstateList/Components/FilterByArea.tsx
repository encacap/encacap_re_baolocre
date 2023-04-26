import AsideFilterItem from "./FilterByAreaItem";

const FilterByArea = () => {
  return (
    <div className="px-5 py-4 border-2 border-gray-100 rounded-md shadow-md shadow-gray-100">
      <div className="pb-4 font-semibold border-b-2 border-gray-100">Lọc theo diện tích</div>
      <div className="mt-3">
        <AsideFilterItem href="/real_estate_detail.html">
          Nhỏ hơn 50 m<sup>2</sup>
        </AsideFilterItem>
        <AsideFilterItem href="/real_estate_detail.html">
          50 m<sup>2</sup> - 100 m<sup>2</sup>
        </AsideFilterItem>
        <AsideFilterItem href="/real_estate_detail.html">
          100 m<sup>2</sup> - 200 m<sup>2</sup>
        </AsideFilterItem>
        <AsideFilterItem href="/real_estate_detail.html">
          200 m<sup>2</sup> - 300 m<sup>2</sup>
        </AsideFilterItem>
        <AsideFilterItem href="/real_estate_detail.html">
          300 m<sup>2</sup> - 400 m<sup>2</sup>
        </AsideFilterItem>
        <AsideFilterItem href="/real_estate_detail.html">
          400 m<sup>2</sup> - 500 m<sup>2</sup>
        </AsideFilterItem>
        <AsideFilterItem href="/real_estate_detail.html">
          Lớn hơn 500 m<sup>2</sup>
        </AsideFilterItem>
      </div>
    </div>
  );
};

export default FilterByArea;
