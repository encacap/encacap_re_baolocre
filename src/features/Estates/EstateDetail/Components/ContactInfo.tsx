import { DEFAULT_CLOUDFLARE_VARIANT_ENUM, IContact, getImageURL } from "@encacap-group/types/dist/re";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import PhoneRingIcon from "../../../../common/Icons/PhoneRingIcon";
import ZaloTextIcon from "../../../../common/Icons/ZaloTextIcon";
import { beautyPhoneNumber } from "../../../../utils/helpers";

interface ContactInformationProps extends HTMLAttributes<HTMLElement> {
  data: IContact;
}

const ContactInformation = ({ data, className }: ContactInformationProps) => {
  return (
    <div
      className={twMerge(
        "flex flex-col items-center p-8 border-2 border-b-2 border-gray-100 rounded-lg lg:shadow-md lg:shadow-gray-100",
        className
      )}
    >
      <div className="flex-shrink-0 w-24 h-24 overflow-hidden border-4 border-gray-200 rounded-full">
        <Image
          width={96}
          height={96}
          src={getImageURL(data.avatar, DEFAULT_CLOUDFLARE_VARIANT_ENUM.THUMBNAIL)}
          alt={data.name}
          className="object-cover object-center w-full h-full"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="mt-5 font-semibold">{data.name}</div>
      <div className="flex flex-col items-center justify-center mt-6">
        {data.phone && (
          <a
            href="tel:<%= contact.phone %>"
            className="flex items-center justify-center px-3 py-2 font-semibold duration-200 bg-white border-2 rounded-lg border-encacap-main text-encacap-main hover:bg-encacap-main hover:border-encacap-main hover:text-white"
          >
            <PhoneRingIcon className="w-5 mr-2" />
            {beautyPhoneNumber(data.phone)}
          </a>
        )}
        {data.zalo && (
          <a
            href={`https://zalo.me/${data.zalo}`}
            className="flex items-center justify-center px-3 py-2 mt-5 font-semibold duration-200 bg-white border-2 rounded-lg border-encacap-zalo text-encacap-zalo hover:bg-encacap-zalo hover:text-white"
          >
            <ZaloTextIcon className="w-8 mr-2" />
            {beautyPhoneNumber(data.zalo)}
          </a>
        )}
      </div>
    </div>
  );
};

export default ContactInformation;
