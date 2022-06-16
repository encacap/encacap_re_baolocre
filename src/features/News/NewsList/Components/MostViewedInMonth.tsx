import MostViewedInMonthItem from "./MostViewedInMonthItem";

const MostViewedInMonth = () => {
    return (
        <div className="px-5 py-4 border-2 border-gray-100 rounded-md">
            <div className="pb-4 font-semibold border-b-2 border-gray-100">Được xem nhiều nhất trong tháng</div>
            <div className="mt-3">
                <MostViewedInMonthItem
                    href="/real_estate_detail.html"
                    image="https://res.cloudinary.com/baolocre-estatesone/image/upload/c_thumb,g_center,w_300/v1649743800/baolocre_news/mfdolis3z8ljqapzz43x.jpg"
                />
                <MostViewedInMonthItem
                    href="/real_estate_detail.html"
                    image="https://res.cloudinary.com/baolocre-estatesone/image/upload/c_thumb,g_center,w_300/v1649743800/baolocre_news/mfdolis3z8ljqapzz43x.jpg"
                    title="Lâm Đồng cho phép lập quy hoạch dự án Quần thể vui chơi giải trí làng Châu Âu 18.000 ha"
                />
            </div>
        </div>
    );
};

export default MostViewedInMonth;
