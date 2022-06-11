import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";
import LocationIcon from "../../../Icons/LocationIcon";
import PhoneRingIcon from "../../../Icons/PhoneRingIcon";
import WrappedFacebookIcon from "../WrappedFacebookIcon";
import WrappedYoutubeIcon from "../WrappedYoutubeIcon";

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
                            <WrappedYoutubeIcon href="https://www.facebook.com/encacap" />
                            <WrappedFacebookIcon href="https://www.facebook.com/encacap" />
                        </div>
                    </div>
                </div>
                <div className="block lg:hidden w-full h-0.5 bg-gray-200 mt-4" />
                <div className="items-center justify-end flex-1 mt-4 lg:flex lg:mt-0">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 w-12 mr-4 lg:w-auto lg:mr-6">
                            <PhoneRingIcon className="w-6 mx-auto lg:w-9" />
                        </div>
                        <div>
                            <div className="text-sm">Điện thoại</div>
                            <div className="font-semibold">0582 419 433</div>
                        </div>
                    </div>
                    <div className="flex items-center mt-3 lg:mt-0 lg:ml-16">
                        <div className="flex-shrink-0 w-12 mr-4 lg:w-auto lg:mr-6">
                            <LocationIcon className="mx-auto w-7 lg:w-10" />
                        </div>
                        <div>
                            <div className="text-sm">Địa chỉ</div>
                            <div className="font-semibold">28 Tô Hiệu, Phường Lộc Sơn, TP Bảo Lộc, Tỉnh Lâm Đồng</div>
                        </div>
                    </div>
                    <div className="hidden lg:flex">
                        <div className="flex items-center lg:ml-16">
                            <WrappedYoutubeIcon href="https://www.facebook.com/encacap" />
                            <WrappedFacebookIcon href="https://www.facebook.com/encacap" />
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
