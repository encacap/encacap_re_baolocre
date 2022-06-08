import { BiChevronLeft } from "react-icons/bi";

const EstateImageSliderPrevButton = () => {
    return (
        <div className="absolute z-10 hidden p-1 text-gray-500 duration-150 -translate-y-1/2 bg-white border-2 border-transparent rounded-full cursor-pointer bg-opacity-80 md:block hover:border-encacap-main left-8 md:left-10 swiper-prev-button top-1/2 hover:text-encacap-main">
            <BiChevronLeft size={28} />
        </div>
    );
};

export default EstateImageSliderPrevButton;
