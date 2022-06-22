import HouseModalList from "./HouseModal/HouseModalList";
import ViewMoreButton from "./ViewMoreButton";

const HouseModelSection = () => {
    return (
        <section className="py-10 border-t-2 border-b-2 border-gray-100 md:border-0 md:px-4 lg:px-10 xl:px-48 md:py-20 md:bg-gray-200">
            <div className="flex flex-col items-center">
                <div className="text-xs font-semibold tracking-widest text-center text-gray-400 uppercase ">
                    Dành cho bạn
                </div>
                <div className="py-3 text-2xl md:text-4xl">Thư viện nhà mẫu</div>
                <div className="w-20 h-1 mx-auto mt-4 bg-encacap-main" />
                <HouseModalList />
                <ViewMoreButton text="Xem thêm 4 mẫu nhà khác" href="/thu-vien-nha-mau" />
            </div>
        </section>
    );
};

export default HouseModelSection;
