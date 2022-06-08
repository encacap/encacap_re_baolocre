/* eslint-disable import/no-unresolved */
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationOptions, PaginationOptions } from "swiper/types";
import EstateImageSliderImage from "./EstateImageSliderImage";
import EstateImageSliderNextButton from "./EstateImageSliderNextButton";
import EstateImageSliderPrevButton from "./EstateImageSliderPrevButton";
import EstateImageSliderVideo from "./EstateImageSliderVideo";

const EstateImageSlider = () => {
    const pagination: PaginationOptions = {
        type: "fraction",
        horizontalClass:
            "absolute z-10 bottom-4 md:bottom-10 right-4 md:right-10 bg-black bg-opacity-50 px-4 py-1 rounded-md text-white text-sm font-semibold",
    };
    const navigation: NavigationOptions = {
        nextEl: ".swiper-next-button",
        prevEl: ".swiper-prev-button",
        disabledClass: "opacity-0",
    };

    return (
        <div className="relative -mx-4 lg:mt-8 md:mx-0">
            <EstateImageSliderPrevButton />
            <Swiper
                pagination={pagination}
                navigation={navigation}
                modules={[Pagination, Navigation]}
                className="relative w-full mb-8 bg-gray-100 md:rounded-lg real-estate-detail-slider aspect-video"
            >
                <SwiperSlide>
                    <EstateImageSliderVideo
                        videoId="VG0zeok0tr8"
                        thumbnailSrc="https://res.cloudinary.com/baolocre-estatesone/image/upload/q_auto,f_auto/v1648441637/baolocre_estate/h4ryl3h8nvvtuwc009mj.jpg"
                        priority
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <EstateImageSliderImage
                        src="https://res.cloudinary.com/baolocre-estatesone/image/upload/q_auto,f_auto/v1648441637/baolocre_estate/h4ryl3h8nvvtuwc009mj.jpg"
                        alt="Real Estate"
                    />
                </SwiperSlide>
            </Swiper>
            <EstateImageSliderNextButton />
        </div>
    );
};

export default EstateImageSlider;
