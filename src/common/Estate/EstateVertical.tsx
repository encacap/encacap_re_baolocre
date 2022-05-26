import Image from "next/image";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Button from "../Button/Button";
import { EstateType } from "../Types/commonTypes";

interface EstateVerticalProps extends EstateType {}

/* eslint-disable max-len */
const EstateVertical = ({
    title,
    avatar,
    thumbnail,
    price,
    area,
    location,
    description,
    contact,
}: EstateVerticalProps) => {
    return (
        <div className="w-full mb-4 overflow-hidden duration-200 group md:flex md:mt-4 md:mb-0 md:rounded-md hover:text-encacap-main md:hover:shadow-gray-200 md:hover:shadow-lg">
            <div className="block py-3 font-semibold uppercase md:hidden text-encacap-main">{title}</div>
            <div className="flex w-full">
                <Link href="/">
                    <a className="relative w-28 md:w-64 h-28 md:h-auto">
                        {/* <div className="absolute bottom-0 z-20 flex items-center justify-center w-full py-1 md:py-1.5 pl-3 text-sm font-semibold text-white bg-black rounded-md md:right-0 md:w-auto opacity-70 md:rounded-br-none">
                            <div className="flex items-center mr-3">
                                <BiImage size={24} />
                                <span className="ml-1.5">2</span>
                            </div>
                        </div> */}
                        <div className="flex items-center w-full h-full bg-black">
                            <Image
                                src={thumbnail || "/images/no-image.png"}
                                alt={title}
                                className="relative z-0 object-cover object-center w-full rounded-md aspect-video md:rounded-none"
                                layout="fill"
                            />
                        </div>
                        {avatar?.type === "video" && (
                            <div className="absolute top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center text-3xl text-white duration-200 -translate-y-3 md:translate-y-0 md:text-5xl group-hover:text-red-500">
                                <FaYoutube />
                            </div>
                        )}
                    </a>
                </Link>
                <div className="flex flex-col justify-center flex-1 pl-4 border-b-0 border-l-0 border-gray-100 rounded-r-md md:border-2 md:px-5 md:py-4">
                    <Link href="/">
                        <a className="flex flex-col flex-1">
                            <div className="hidden font-semibold uppercase md:block text-encacap-main">{title}</div>
                            <div className="py-1 font-semibold md:py-2">
                                <span className="">{price}</span>
                                <span className="px-2 text-gray-400">·</span>
                                <span>
                                    {area} m<sup>2</sup>
                                </span>
                            </div>
                            <div className="flex items-center -ml-1">
                                <HiOutlineLocationMarker className="mr-2" size={20} />
                                <div className="line-clamp-1">
                                    {location?.district}, {location?.city}
                                </div>
                            </div>
                            <div className="flex-1 hidden mt-2 text-gray-500 md:line-clamp-3">{description}</div>
                        </a>
                    </Link>
                    <div className="flex mt-3 mb-1 md:mt-5">
                        <a href={`tel:${contact?.phone}`} className="block w-full">
                            <Button color="gray" className="w-full">
                                <FiPhoneCall size={20} className="mr-3" />
                                <div>{contact?.phone}</div>
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateVertical;
