/* eslint-disable import/no-unresolved */
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const SliderSection = () => (
    <Swiper
        slidesPerView={1.5}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        loop
        spaceBetween={20}
        centeredSlides
        className="w-full aspect-[16/6]"
    >
        <SwiperSlide>
            <Image src="/images/slides/01.jpg" layout="fill" objectFit="cover" quality={100} priority />
        </SwiperSlide>
        <SwiperSlide>
            <Image src="/images/slides/01.jpg" layout="fill" objectFit="cover" quality={100} />
        </SwiperSlide>
        <SwiperSlide>
            <Image src="/images/slides/01.jpg" layout="fill" objectFit="cover" quality={100} />
        </SwiperSlide>
        <SwiperSlide>
            <Image src="/images/slides/01.jpg" layout="fill" objectFit="cover" quality={100} />
        </SwiperSlide>
    </Swiper>
);

export default SliderSection;
