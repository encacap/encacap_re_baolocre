import { twMerge } from "tailwind-merge";
import ZaloIcon from "../../../../common/Icons/ZaloTextIcon";

const ContactInformation = ({ className }: React.HTMLAttributes<HTMLElement>) => {
    return (
        <div
            className={twMerge(
                "flex flex-col items-center p-6 border-2 border-b-2 border-gray-100 rounded-lg",
                className
            )}
        >
            <div className="flex-shrink-0 w-24 h-24 overflow-hidden border-4 border-gray-200 rounded-full">
                <img
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
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 mr-2"
                    >
                        <path d="M17.45 22.75c-1.13 0-2.32-.27-3.55-.79-1.2-.51-2.41-1.21-3.59-2.06-1.17-.86-2.3-1.82-3.37-2.87-1.06-1.07-2.02-2.2-2.87-3.36-.86-1.2-1.55-2.4-2.04-3.56-.52-1.24-.78-2.44-.78-3.57 0-.78.14-1.52.41-2.21.28-.71.73-1.37 1.34-1.94.77-.76 1.65-1.14 2.59-1.14.39 0 .79.09 1.13.25.39.18.72.45.96.81L10 5.58c.21.29.37.57.48.85.13.3.2.6.2.89 0 .38-.11.75-.32 1.1a4 4 0 0 1-.67.85l-.68.71c.01.03.02.05.03.07.12.21.36.57.82 1.11.49.56.95 1.07 1.41 1.54.59.58 1.08 1.04 1.54 1.42.57.48.94.72 1.16.83l-.02.05.73-.72c.31-.31.61-.54.9-.69.55-.34 1.25-.4 1.95-.11.26.11.54.26.84.47l3.32 2.36c.37.25.64.57.8.95.15.38.22.73.22 1.08 0 .48-.11.96-.32 1.41-.21.45-.47.84-.8 1.2-.57.63-1.19 1.08-1.91 1.37-.69.28-1.44.43-2.23.43Zm-11.86-20c-.55 0-1.06.24-1.55.72-.46.43-.78.9-.98 1.41-.21.52-.31 1.07-.31 1.66 0 .93.22 1.94.66 2.98.45 1.06 1.08 2.16 1.88 3.26.8 1.1 1.71 2.17 2.71 3.18 1 .99 2.08 1.91 3.19 2.72 1.08.79 2.19 1.43 3.29 1.89 1.71.73 3.31.9 4.63.35.51-.21.96-.53 1.37-.99.23-.25.41-.52.56-.84.12-.25.18-.51.18-.77 0-.16-.03-.32-.11-.5a.757.757 0 0 0-.28-.3l-3.32-2.36c-.2-.14-.38-.24-.55-.31-.22-.09-.31-.18-.65.03-.2.1-.38.25-.58.45l-.76.75c-.39.38-.99.47-1.45.3l-.27-.12c-.41-.22-.89-.56-1.42-1.01-.48-.41-1-.89-1.63-1.51-.49-.5-.98-1.03-1.49-1.62-.47-.55-.81-1.02-1.02-1.41l-.12-.3c-.06-.23-.08-.36-.08-.5 0-.36.13-.68.38-.93l.75-.78c.2-.2.35-.39.45-.56.08-.13.11-.24.11-.34 0-.08-.03-.2-.08-.32-.07-.16-.18-.34-.32-.53L6.46 3.17a.922.922 0 0 0-.37-.31c-.16-.07-.33-.11-.5-.11Zm8.36 12.26-.16.68.27-.7c-.05-.01-.09 0-.11.02ZM18.5 9.75c-.41 0-.75-.34-.75-.75 0-.36-.36-1.11-.96-1.75-.59-.63-1.24-1-1.79-1-.41 0-.75-.34-.75-.75s.34-.75.75-.75c.97 0 1.99.52 2.88 1.47.83.89 1.37 1.98 1.37 2.78 0 .41-.34.75-.75.75ZM22 9.75c-.41 0-.75-.34-.75-.75 0-3.45-2.8-6.25-6.25-6.25-.41 0-.75-.34-.75-.75s.34-.75.75-.75c4.27 0 7.75 3.48 7.75 7.75 0 .41-.34.75-.75.75Z" />
                    </svg>
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
