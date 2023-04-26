import EstateVertical from "../../../../common/Estate/EstateVertical";

function SameDistrictEstates() {
  return (
    <div className="pt-5 border-t-2 border-gray-100 mt-9">
      <div className="mt-1 mb-0 text-lg font-semibold md:mb-6">
        Bất động sản khác tại Huyện Tư Nghĩa, Quảng Ngãi
      </div>
      <div className="grid grid-cols-1 gap-0 sm:gap-4 sm:grid-cols-2 md:grid-cols-3">
        <EstateVertical title="ĐẤT VƯỜN XÃ LỘC NGA TP BẢO LỘC, NGAY RESORT ĐÔI DÉP" />
        <EstateVertical title="ĐẤT VƯỜN XÃ LỘC NGA TP BẢO LỘC, NGAY RESORT ĐÔI DÉP" />
        <EstateVertical title="ĐẤT VƯỜN XÃ LỘC NGA TP BẢO LỘC, NGAY RESORT ĐÔI DÉP" />
        <EstateVertical title="ĐẤT VƯỜN XÃ LỘC NGA TP BẢO LỘC, NGAY RESORT ĐÔI DÉP" />
      </div>
    </div>
  );
}

export default SameDistrictEstates;
