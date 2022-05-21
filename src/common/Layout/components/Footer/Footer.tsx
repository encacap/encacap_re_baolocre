import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";
import FacebookIcon from "../../../Icon/FacebookIcon";
import YoutubeIcon from "../../../Icon/YoutubeIcon";

interface FooterProps {
    color: "light" | "dark";
}

const Footer = ({ color }: FooterProps) => {
    return (
        <footer className={twMerge("px-4 pt-4 lg:px-10 lg:pt-10 lg:bg-none", color === "dark" && "bg-gray-100")}>
            <div className="lg:flex">
                <div className="flex items-center justify-between">
                    <a href="/" className="flex items-center header-logo">
                        <img
                            src="/images/logo.jpg"
                            alt="Encacap Estate Logo"
                            className="w-12 border-2 rounded-lg border-encacap-main"
                        />
                        <div className="ml-4 uppercase header-logo-text">
                            <div className="mt-1 ml-0.5 text-xs font-semibold">BĐS nghỉ dưỡng</div>
                            <div className="text-2xl font-bold text-encacap-main">Bảo Lộc</div>
                        </div>
                    </a>
                    <div>
                        <div className="flex lg:hidden">
                            <YoutubeIcon href="https://www.facebook.com/encacap" />
                            <FacebookIcon href="https://www.facebook.com/encacap" />
                        </div>
                    </div>
                </div>
                <div className="block lg:hidden w-full h-0.5 bg-gray-200 mt-4" />
                <div className="items-center justify-end flex-1 mt-4 lg:flex lg:mt-0">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 w-12 mr-4 lg:w-auto lg:mr-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 mx-auto lg:w-9"
                            >
                                <path d="M17.45 22.75c-1.13 0-2.32-.27-3.55-.79-1.2-.51-2.41-1.21-3.59-2.06-1.17-.86-2.3-1.82-3.37-2.87-1.06-1.07-2.02-2.2-2.87-3.36-.86-1.2-1.55-2.4-2.04-3.56-.52-1.24-.78-2.44-.78-3.57 0-.78.14-1.52.41-2.21.28-.71.73-1.37 1.34-1.94.77-.76 1.65-1.14 2.59-1.14.39 0 .79.09 1.13.25.39.18.72.45.96.81L10 5.58c.21.29.37.57.48.85.13.3.2.6.2.89 0 .38-.11.75-.32 1.1a4 4 0 0 1-.67.85l-.68.71c.01.03.02.05.03.07.12.21.36.57.82 1.11.49.56.95 1.07 1.41 1.54.59.58 1.08 1.04 1.54 1.42.57.48.94.72 1.16.83l-.02.05.73-.72c.31-.31.61-.54.9-.69.55-.34 1.25-.4 1.95-.11.26.11.54.26.84.47l3.32 2.36c.37.25.64.57.8.95.15.38.22.73.22 1.08 0 .48-.11.96-.32 1.41-.21.45-.47.84-.8 1.2-.57.63-1.19 1.08-1.91 1.37-.69.28-1.44.43-2.23.43Zm-11.86-20c-.55 0-1.06.24-1.55.72-.46.43-.78.9-.98 1.41-.21.52-.31 1.07-.31 1.66 0 .93.22 1.94.66 2.98.45 1.06 1.08 2.16 1.88 3.26.8 1.1 1.71 2.17 2.71 3.18 1 .99 2.08 1.91 3.19 2.72 1.08.79 2.19 1.43 3.29 1.89 1.71.73 3.31.9 4.63.35.51-.21.96-.53 1.37-.99.23-.25.41-.52.56-.84.12-.25.18-.51.18-.77 0-.16-.03-.32-.11-.5a.757.757 0 0 0-.28-.3l-3.32-2.36c-.2-.14-.38-.24-.55-.31-.22-.09-.31-.18-.65.03-.2.1-.38.25-.58.45l-.76.75c-.39.38-.99.47-1.45.3l-.27-.12c-.41-.22-.89-.56-1.42-1.01-.48-.41-1-.89-1.63-1.51-.49-.5-.98-1.03-1.49-1.62-.47-.55-.81-1.02-1.02-1.41l-.12-.3c-.06-.23-.08-.36-.08-.5 0-.36.13-.68.38-.93l.75-.78c.2-.2.35-.39.45-.56.08-.13.11-.24.11-.34 0-.08-.03-.2-.08-.32-.07-.16-.18-.34-.32-.53L6.46 3.17a.922.922 0 0 0-.37-.31c-.16-.07-.33-.11-.5-.11Zm8.36 12.26-.16.68.27-.7c-.05-.01-.09 0-.11.02ZM18.5 9.75c-.41 0-.75-.34-.75-.75 0-.36-.36-1.11-.96-1.75-.59-.63-1.24-1-1.79-1-.41 0-.75-.34-.75-.75s.34-.75.75-.75c.97 0 1.99.52 2.88 1.47.83.89 1.37 1.98 1.37 2.78 0 .41-.34.75-.75.75ZM22 9.75c-.41 0-.75-.34-.75-.75 0-3.45-2.8-6.25-6.25-6.25-.41 0-.75-.34-.75-.75s.34-.75.75-.75c4.27 0 7.75 3.48 7.75 7.75 0 .41-.34.75-.75.75Z" />
                            </svg>
                        </div>
                        <div>
                            <div className="text-sm">Điện thoại</div>
                            <div className="font-semibold">0582 419 433</div>
                        </div>
                    </div>
                    <div className="flex items-center mt-3 lg:mt-0 lg:ml-16">
                        <div className="flex-shrink-0 w-12 mr-4 lg:w-auto lg:mr-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mx-auto w-7 lg:w-10"
                            >
                                <path d="M11.999 14.171c-2.13 0-3.87-1.73-3.87-3.87s1.74-3.86 3.87-3.86 3.87 1.73 3.87 3.87-1.74 3.86-3.87 3.86Zm0-6.23c-1.3 0-2.37 1.06-2.37 2.37s1.06 2.37 2.37 2.37 2.37-1.06 2.37-2.37-1.07-2.37-2.37-2.37Z" />
                                <path d="M12.002 22.76a5.97 5.97 0 0 1-4.13-1.67c-2.95-2.84-6.21-7.37-4.98-12.76 1.11-4.89 5.38-7.08 9.11-7.08h.01c3.73 0 8 2.19 9.11 7.09 1.22 5.39-2.04 9.91-4.99 12.75a5.97 5.97 0 0 1-4.13 1.67Zm0-20.01c-2.91 0-6.65 1.55-7.64 5.91-1.08 4.71 1.88 8.77 4.56 11.34a4.425 4.425 0 0 0 6.17 0c2.67-2.57 5.63-6.63 4.57-11.34-1-4.36-4.75-5.91-7.66-5.91Z" />
                            </svg>
                        </div>
                        <div>
                            <div className="text-sm">Địa chỉ</div>
                            <div className="font-semibold">28 Tô Hiệu, Phường Lộc Sơn, TP Bảo Lộc, Tỉnh Lâm Đồng</div>
                        </div>
                    </div>
                    <div className="hidden lg:flex">
                        <div className="flex items-center lg:ml-16">
                            <YoutubeIcon href="https://www.facebook.com/encacap" />
                            <FacebookIcon href="https://www.facebook.com/encacap" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4 mt-4 text-center border-t-2 lg:mt-10">
                Copyrights © {dayjs().format("YYYY")}. All rights reserved by{" "}
                <a href="https://www.facebook.com/khackhanh.encacap/" className="font-semibold">
                    Encacap
                </a>
            </div>
        </footer>
    );
};

export default Footer;
