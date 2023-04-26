import EstateVertical from "../../../../common/Estate/EstateVertical";

const SuggestionEstates = () => {
  return (
    <div className="pt-4 mt-2 border-t-2 border-gray-100 md:pt-5 md:mt-8">
      <div className="mt-1 mb-0 text-lg font-semibold md:mb-6">Có thể bạn quan tâm</div>
      <div className="grid grid-cols-1 gap-0 sm:gap-4 sm:grid-cols-2 md:grid-cols-3">
        <EstateVertical title="ĐẤT VƯỜN XÃ LỘC NGA TP BẢO LỘC, NGAY RESORT ĐÔI DÉP" />
        <EstateVertical title="ĐẤT VƯỜN XÃ LỘC NGA TP BẢO LỘC, NGAY RESORT ĐÔI DÉP" />
        <EstateVertical title="ĐẤT VƯỜN XÃ LỘC NGA TP BẢO LỘC, NGAY RESORT ĐÔI DÉP" />
        <EstateVertical title="ĐẤT VƯỜN XÃ LỘC NGA TP BẢO LỘC, NGAY RESORT ĐÔI DÉP" />
      </div>
    </div>
  );
};

export default SuggestionEstates;
