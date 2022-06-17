import NewsItemLarge from "./NewsItemLarge";
import NewsItemNormal from "./NewsItemNormal";

const NewsList = () => {
    return (
        <div className="grid mt-10 overflow-hidden md:grid-cols-2 lg:grid-cols-3 md:gap-2 md:divide-x-2">
            <NewsItemLarge
                news={{
                    title: "ĐẤT VƯỜN XÃ LỘC NGA TP BẢO LỘC, NGAY RESORT ĐÔI DÉP",
                }}
            />
            <div className="border-b-2 border-gray-100 divide-y-2 divide-gray-100 md:pl-6 md:pr-3 md:-my-4 md:border-b-0">
                <NewsItemNormal />
                <NewsItemNormal />
                <NewsItemNormal />
            </div>
            <div className="border-gray-100 divide-y-2 divide-gray-100 md:pl-6 md:pr-3 md:-my-4">
                <NewsItemNormal />
                <NewsItemNormal />
                <NewsItemNormal />
            </div>
        </div>
    );
};

export default NewsList;
