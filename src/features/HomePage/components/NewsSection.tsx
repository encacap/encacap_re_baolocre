import ChevronRightIcon from "../../../common/Icons/ChevronRightIcon";
import NewsList from "./NewsList";

const NewsSection = () => (
    <section className="px-4 py-10 lg:px-10 xl:px-48 md:py-20">
        <div className="flex flex-col items-center">
            <div className="text-xs font-semibold tracking-widest text-center text-gray-400 uppercase ">
                Mới và nổi bật nhất
            </div>
            <div className="py-3 text-2xl md:text-4xl">Tin tức</div>
            <div className="w-20 h-1 mx-auto mt-4 bg-encacap-main" />
        </div>
        <NewsList />
        <div className="flex justify-center mt-6 md:mt-10 md:mx-0">
            <a
                href="/tin-tuc"
                className="flex items-center justify-center w-full py-3 pl-6 pr-4 font-semibold duration-200 bg-white border-2 border-gray-300 rounded-lg md:w-fit md:rounded-full hover:border-encacap-main hover:text-encacap-main"
            >
                Xem thêm 4 tin túc khác
                <ChevronRightIcon className="w-5 ml-2" />
            </a>
        </div>
    </section>
);

export default NewsSection;
