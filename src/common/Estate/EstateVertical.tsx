import { FiYoutube } from "react-icons/fi";
import { HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";
import { TiImage } from "react-icons/ti";

interface EstatesHorizontalProps {
    title: string;
}

const EstateVertical = ({ title }: EstatesHorizontalProps) => (
    <div className="overflow-hidden duration-200 bg-white border-b-2 border-gray-100 group md:shadow-md md:shadow-gray-200 md:rounded-lg md:border-b-0 md:hover:shadow-lg">
        <a
            href="<%= estate.url %>"
            className="block py-3 font-semibold uppercase duration-200 md:hidden md:px-4 text-encacap-main"
        >
            {title}
        </a>
        <div className="flex mb-4 md:block md:mb-0">
            <a href="<%= estate.url %>" className="relative block mr-4 md:w-full w-28 h-28 md:h-44 md:mr-0">
                <div className="absolute bottom-0 z-20 flex items-center justify-center w-full py-1 pl-3 text-sm font-semibold text-white bg-black rounded-md md:bottom-4 md:right-4 md:w-auto opacity-70">
                    <div className="flex items-center mr-3">
                        <TiImage size={20} className="mr-1" /> 1
                    </div>

                    <div className="flex items-center mr-3">
                        <FiYoutube size={19} className="mr-1" /> 2
                    </div>
                </div>
                <img
                    src="https://res.cloudinary.com/baolocre-estatesone/image/upload/c_thumb,g_center,w_300/v1641826072/baolocre_estate/mwdrilfrdj7glunmoswm.jpg"
                    className="relative z-0 object-cover object-center w-full h-full rounded-md md:rounded-none"
                    alt="<%= estate.title %>"
                    loading="lazy"
                    decoding="async"
                />
                {/* If avatar is a video */}
                <div className="absolute top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center text-white duration-200 hover:text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12">
                        <path d="M17 4H7C4 4 2 6 2 9v6c0 3 2 5 5 5h10c3 0 5-2 5-5V9c0-3-2-5-5-5zm-3.11 9.03l-2.47 1.48c-1 .6-1.82.14-1.82-1.03v-2.97c0-1.17.82-1.63 1.82-1.03l2.47 1.48c.95.58.95 1.5 0 2.07z" />
                    </svg>
                </div>
            </a>
            <div className="flex flex-col justify-center flex-1 md:block">
                <a href="<%= estate.url %>" className="block py-0 md:pt-4 md:px-5">
                    <div className="hidden font-semibold uppercase duration-200 md:block md:h-12 text-encacap-main md:line-clamp-2">
                        {title}
                    </div>
                    <div className="block mb-1 font-semibold md:my-3">
                        <span>
                            20 tr/m<sup>2</sup>
                        </span>
                        <span className="px-1 text-gray-400 md:px-2">·</span>
                        <span>
                            100 m<sup>2</sup>
                        </span>
                    </div>
                    <div className="flex items-center">
                        <HiOutlineLocationMarker size={20} className="mr-1 text-zinc-500" />
                        <div className="line-clamp-1">Thành phố Bảo Lộc, Lâm Đồng</div>
                    </div>
                </a>
                <a href="tel:<%= estate.contact.phone %>" className="flex md:px-5 md:mt-2 md:mb-4">
                    <div className="flex items-center justify-center flex-1 px-2 py-2 mt-3 text-sm font-semibold text-center duration-100 border-2 border-gray-100 rounded-md bg-gray-50 md:mt-4 md:mb-2 hover:text-white hover:bg-encacap-main hover:border-encacap-main">
                        <HiOutlinePhone className="mr-2" size={20} />
                        076 811 2358
                    </div>
                </a>
            </div>
        </div>
    </div>
);

export default EstateVertical;
