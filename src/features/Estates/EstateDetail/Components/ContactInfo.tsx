import Image from "next/image";
import { twMerge } from "tailwind-merge";
import PhoneRingIcon from "../../../../common/Icons/PhoneRingIcon";
import ZaloIcon from "../../../../common/Icons/ZaloTextIcon";

const ContactInformation = ({ className }: React.HTMLAttributes<HTMLElement>) => {
    return (
        <div
            className={twMerge(
                "flex flex-col items-center p-6 border-2 border-b-2 border-gray-100 rounded-lg lg:shadow-md lg:shadow-gray-100",
                className
            )}
        >
            <div className="flex-shrink-0 w-24 h-24 overflow-hidden border-4 border-gray-200 rounded-full">
                <Image
                    width={96}
                    height={96}
                    src="https://res.cloudinary.com/baolocre-estatesone/image/upload/c_thumb,g_center,w_300/v1648445896/baolocre_estate/pv6wide7sq11dtl82zk4.jpg"
                    alt="<%= contact.name %>"
                    className="object-cover object-center w-full h-full"
                    loading="lazy"
                    decoding="async"
                />
            </div>
            <div className="mt-5 font-semibold">Nguyễn Khắc Khánh</div>
            <div className="flex flex-col items-center justify-center mt-6">
                <a
                    href="tel:<%= contact.phone %>"
                    className="flex items-center justify-center px-3 py-2 font-semibold duration-200 bg-white border-2 rounded-lg border-encacap-main text-encacap-main hover:bg-encacap-main hover:border-encacap-main hover:text-white"
                >
                    <PhoneRingIcon className="w-5 mr-2" />
                    0582 419 433
                </a>
                <a
                    href="https://www.zalo.me/<%= contact.phone %>"
                    className="flex items-center justify-center px-4 py-3 mt-5 ml-4 font-semibold duration-200 bg-white border-2 rounded-lg border-encacap-zalo text-encacap-zalo hover:bg-encacap-zalo hover:text-white"
                >
                    <ZaloIcon className="w-8" />
                </a>
            </div>
        </div>
    );
};

export default ContactInformation;
