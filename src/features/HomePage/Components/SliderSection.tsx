/* eslint-disable import/no-unresolved */
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { HomepageSliderType } from "../../../types/dataTypes";

interface SliderSectionProps {
  images: HomepageSliderType[];
}

const SliderSection = ({ images }: SliderSectionProps) => {
  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop
      centeredSlides
      className="w-full aspect-[16/6]"
    >
      {images.map((image, index) => (
        <SwiperSlide key={image.id} className="relative">
          <Image
            src={image.image}
            alt={process.env.NEXT_PUBLIC_WEBSITE_NAME}
            layout="fill"
            className="object-cover object-center"
            priority={index === 0}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderSection;
