/* eslint-disable import/no-unresolved */
import { ICloudflareImageResponse, getImageURL } from "@encacap-group/types/dist/re";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationOptions, PaginationOptions } from "swiper/types";
import EstateImageSliderImage from "./EstateImageSliderImage";
import EstateImageSliderNextButton from "./EstateImageSliderNextButton";
import EstateImageSliderPrevButton from "./EstateImageSliderPrevButton";
import EstateImageSliderVideo from "./EstateImageSliderVideo";

interface EstateImageSliderProps {
  avatar: ICloudflareImageResponse;
  images: ICloudflareImageResponse[];
  youtubeId?: string;
  alt: string;
}

const EstateImageSlider = ({ avatar, images, youtubeId, alt }: EstateImageSliderProps) => {
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
        {youtubeId ? (
          <SwiperSlide>
            <EstateImageSliderVideo videoId={youtubeId} thumbnailSrc={getImageURL(avatar)} priority />
          </SwiperSlide>
        ) : (
          <SwiperSlide>
            <EstateImageSliderImage image={avatar} alt={`Ảnh đại diện cho bài viết ${alt}`} />
          </SwiperSlide>
        )}
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <EstateImageSliderImage image={image} alt={`Ảnh cho bài viết ${alt}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <EstateImageSliderNextButton />
    </div>
  );
};

export default EstateImageSlider;
