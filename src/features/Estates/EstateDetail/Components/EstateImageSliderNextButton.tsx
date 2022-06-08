import { BiChevronRight } from "react-icons/bi";

const EstateImageSliderNextButton = () => {
    return (
        <div className="absolute z-10 hidden p-1 text-gray-500 duration-150 -translate-y-1/2 bg-white border-2 border-transparent rounded-full cursor-pointer bg-opacity-80 hover:border-encacap-main right-4 md:block md:right-10 swiper-next-button top-1/2 hover:text-encacap-main">
            <BiChevronRight size={28} />
        </div>
    );
};

export default EstateImageSliderNextButton;
