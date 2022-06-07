/* eslint-disable import/no-unresolved */
import { SwiperSlide } from "swiper/react";

interface REDImageSliderSlideProps {
    image: string;
    alt: string;
}

const REDImageSliderSlide = ({ image, alt }: REDImageSliderSlideProps) => {
    return (
        <SwiperSlide>
            <img src={image} alt={alt} className="object-contain object-center" />
        </SwiperSlide>
    );
};

export default REDImageSliderSlide;
