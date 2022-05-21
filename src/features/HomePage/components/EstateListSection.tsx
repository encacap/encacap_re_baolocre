import { BiChevronRight } from "react-icons/bi";
import EstateHorizontal from "../../../common/Estate/EstateHorizontal";

const EstateListSection = () => (
    <section className="py-10 border-t-2 border-b-2 border-gray-100 md:border-t-0 md:border-b-0 md:px-4 lg:px-10 xl:px-48 md:py-20 md:bg-gray-100">
        <div className="flex flex-col items-center px-4 md:px-0">
            <div className="text-xs font-semibold tracking-widest text-center text-gray-400 uppercase ">
                Dành cho bạn
            </div>
            <div className="py-3 text-2xl text-center md:text-4xl">Bất động sản đang bán</div>
            <div className="w-20 h-1 mx-auto mt-4 bg-encacap-main" />
        </div>
        <div className="grid px-4 mt-10 md:gap-4 md:grid-cols-3 lg:grid-cols-4 md:px-0">
            <EstateHorizontal title="ĐẤT VƯỜN XÃ LỘC NGA TP BẢO LỘC, NGAY RESORT ĐÔI DÉP" />
            <EstateHorizontal title="ĐẤT VƯỜN XÃ LỘC NGA TP BẢO LỘC, NGAY RESORT ĐÔI DÉP" />
            <EstateHorizontal title="ĐẤT VƯỜN XÃ LỘC NGA TP BẢO LỘC, NGAY RESORT ĐÔI DÉP" />
            <EstateHorizontal title="ĐẤT VƯỜN XÃ LỘC NGA TP BẢO LỘC, NGAY RESORT ĐÔI DÉP" />
            <EstateHorizontal title="ĐẤT VƯỜN XÃ LỘC NGA TP BẢO LỘC, NGAY RESORT ĐÔI DÉP" />
            <EstateHorizontal title="ĐẤT VƯỜN XÃ LỘC NGA TP BẢO LỘC, NGAY RESORT ĐÔI DÉP" />
            <EstateHorizontal title="ĐẤT VƯỜN XÃ LỘC NGA TP BẢO LỘC, NGAY RESORT ĐÔI DÉP" />
            <EstateHorizontal title="ĐẤT VƯỜN XÃ LỘC NGA TP BẢO LỘC, NGAY RESORT ĐÔI DÉP" />
        </div>
        <div className="flex justify-center mt-10">
            <a
                href="/bat-dong-san-ban"
                className="flex items-center py-3 pl-6 pr-4 font-semibold duration-200 bg-white border-2 border-gray-300 rounded-full hover:border-encacap-main hover:text-encacap-main"
            >
                Xem tất cả bất động sản đang bán
                <BiChevronRight size={22} className="ml-2" />
            </a>
        </div>
    </section>
);

export default EstateListSection;
