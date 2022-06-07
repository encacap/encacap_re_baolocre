/* eslint-disable import/no-unresolved */
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationOptions, PaginationOptions } from "swiper/types";
import REDImageSliderNextButton from "./REDImageSliderNextButton";
import REDImageSliderPrevButton from "./REDImageSliderPrevButton";

const REDImageSlider = () => {
    const pagination: PaginationOptions = {
        type: "fraction",
        horizontalClass:
            "absolute z-10 bottom-4 lg:bottom-10 right-4 lg:right-10 bg-black bg-opacity-50 px-4 py-1 rounded-md text-white text-sm font-semibold",
    };
    const navigation: NavigationOptions = {
        nextEl: ".swiper-next-button",
        prevEl: ".swiper-prev-button",
        disabledClass: "opacity-0",
    };

    return (
        <div className="relative -mx-4 lg:mt-8 md:mx-0">
            <REDImageSliderPrevButton />
            <Swiper
                pagination={pagination}
                navigation={navigation}
                modules={[Pagination, Navigation]}
                className="relative w-full mb-8 bg-gray-100 md:rounded-lg real-estate-detail-slider aspect-video"
            >
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <div className="absolute inset-0 -z-10 blur-xl bg-white/30">
                            <img
                                src="https://res.cloudinary.com/baolocre-estatesone/image/upload/q_auto,f_auto/v1648441637/baolocre_estate/h4ryl3h8nvvtuwc009mj.jpg"
                                alt="Encacap"
                                className="object-cover object-center w-full h-full"
                            />
                        </div>
                        <img
                            src="https://res.cloudinary.com/baolocre-estatesone/image/upload/q_auto,f_auto/v1648441637/baolocre_estate/h4ryl3h8nvvtuwc009mj.jpg"
                            alt="Encacap"
                            className="object-contain object-center w-full h-full"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <div className="absolute inset-0 -z-10 blur-xl bg-white/30">
                            <img
                                src="https://res.cloudinary.com/baolocre-estatesone/image/upload/q_auto,f_auto/v1648441637/baolocre_estate/h4ryl3h8nvvtuwc009mj.jpg"
                                alt="Encacap"
                                className="object-cover object-center w-full h-full"
                            />
                        </div>
                        <img
                            src="https://res.cloudinary.com/baolocre-estatesone/image/upload/q_auto,f_auto/v1648441637/baolocre_estate/h4ryl3h8nvvtuwc009mj.jpg"
                            alt="Encacap"
                            className="object-contain object-center w-full h-full"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
            <REDImageSliderNextButton />
        </div>
    );
};

export default REDImageSlider;
