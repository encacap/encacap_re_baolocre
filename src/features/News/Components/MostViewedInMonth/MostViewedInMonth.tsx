import MostViewedInMonthItem from "./MostViewedInMonthItem";

const MostViewedInMonth = () => {
    return (
        <div className="px-5 pt-4 pb-0 border-2 border-gray-100 rounded-md">
            <div className="pb-4 font-semibold border-b-2 border-gray-100">Được xem nhiều nhất trong tháng</div>
            <MostViewedInMonthItem
                href="/real_estate_detail.html"
                image="https://res.cloudinary.com/baolocre-estatesone/image/upload/c_thumb,g_center,w_300/v1649743800/baolocre_news/mfdolis3z8ljqapzz43x.jpg"
                title="Bài viết này không có tiêu đề"
            />
            <MostViewedInMonthItem
                href="/real_estate_detail.html"
                image="https://res.cloudinary.com/baolocre-estatesone/image/upload/c_thumb,g_center,w_300/v1649743800/baolocre_news/mfdolis3z8ljqapzz43x.jpg"
                title="Lâm Đồng cho phép lập quy hoạch dự án Quần thể vui chơi giải trí làng Châu Âu 18.000 ha"
            />
            {/* <MostViewedInMonthSkeleton /> */}
        </div>
    );
};

export default MostViewedInMonth;
