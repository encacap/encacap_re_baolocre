import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";
import { ContactInformationType } from "../../../../types/dataTypes";
import LocationIcon from "../../../Icons/LocationIcon";
import PhoneRingIcon from "../../../Icons/PhoneRingIcon";
import Logo from "../../../Logo";
import SocialItems from "../Header/SocialItems";

interface FooterProps {
  color: "light" | "dark";
  contactInformation: ContactInformationType | null;
}

const Footer = ({ contactInformation, color }: FooterProps) => {
  return (
    <footer className={twMerge("px-4 pt-4 lg:px-10 lg:pt-10 lg:bg-none", color === "dark" && "bg-gray-100")}>
      <div className="lg:flex">
        <div className="flex items-center justify-between">
          <Logo />
          <SocialItems className="flex lg:hidden" contactInformation={contactInformation} />
        </div>
        <div className="block lg:hidden w-full h-0.5 bg-gray-200 mt-4" />
        <div className="items-center justify-end flex-1 mt-4 lg:flex lg:mt-0">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-12 mr-4 lg:w-auto lg:mr-6">
              <PhoneRingIcon className="w-6 mx-auto lg:w-9" />
            </div>
            <div>
              <div className="text-sm">Điện thoại</div>
              <div className="font-semibold">{contactInformation?.site_phone_number}</div>
            </div>
          </div>
          <div className="flex items-center mt-3 lg:mt-0 lg:ml-16">
            <div className="flex-shrink-0 w-12 mr-4 lg:w-auto lg:mr-6">
              <LocationIcon className="mx-auto w-7 lg:w-10" />
            </div>
            <div>
              <div className="text-sm">Địa chỉ</div>
              <div className="font-semibold">{contactInformation?.site_address}</div>
            </div>
          </div>
          <SocialItems
            className="items-center hidden lg:flex lg:ml-16"
            contactInformation={contactInformation}
          />
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
