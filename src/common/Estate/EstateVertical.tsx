import { DEFAULT_CLOUDFLARE_VARIANT_ENUM, IEstate, getImageURL } from "@encacap-group/types/dist/re";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { beautyPhoneNumber, getEstateLink } from "../../utils/helpers";
import Button from "../Button/Button";
import LocationIcon from "../Icons/LocationIcon";
import PhoneRingIcon from "../Icons/PhoneRingIcon";

interface EstatesHorizontalProps {
  isSpecial?: boolean;
  priority?: boolean;
  data: IEstate;
}

const EstateVertical = ({ isSpecial, priority = false, data }: EstatesHorizontalProps) => {
  if (!data) return null;

  return (
    <div className="overflow-hidden duration-200 bg-white border-b-2 border-gray-100 group md:shadow-md md:shadow-gray-200 md:rounded-lg md:border-b-0 md:hover:shadow-lg last:border-b-0">
      {isSpecial && (
        <Link href={getEstateLink(data)} passHref>
          <a className="block">
            <div className="relative flex items-center w-full bg-black rounded-lg aspect-video md:hidden">
              <Image
                src={getImageURL(data.avatar, DEFAULT_CLOUDFLARE_VARIANT_ENUM.THUMBNAIL)}
                alt={data.title}
                className="relative z-0 object-cover object-center w-full rounded-md aspect-video md:rounded-none"
                layout="fill"
                quality={1}
                priority={priority}
              />
              {/* <div className="absolute top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center text-white duration-200 hover:text-red-500">
                <YoutubeIcon className="w-12" />
              </div> */}
            </div>
          </a>
        </Link>
      )}
      <Link href={getEstateLink(data)} passHref>
        <a
          className={twMerge(
            "block py-3 font-semibold uppercase duration-200 md:hidden md:px-4 text-encacap-main",
            isSpecial && "pb-1.5"
          )}
        >
          {data.title}
        </a>
      </Link>
      <div className="flex mb-4 md:block md:mb-0">
        <Link href={getEstateLink(data)} passHref>
          <a
            className={twMerge(
              "relative mr-4 md:w-full w-28 h-28 md:h-44 md:mr-0 rounded-lg md:rounded-none overflow-hidden flex items-center bg-gray-100",
              isSpecial && "hidden md:flex"
            )}
          >
            <div className="absolute inset-0 blur-xl">
              <Image
                src={getImageURL(data.avatar, DEFAULT_CLOUDFLARE_VARIANT_ENUM.SMALL)}
                alt={data.title}
                className="relative z-0 object-cover object-center w-full rounded-md aspect-video md:rounded-none"
                layout="fill"
                priority={priority}
                quality={1}
              />
            </div>
            <div className="relative flex items-center w-full bg-black aspect-video">
              <Image
                src={getImageURL(data.avatar, DEFAULT_CLOUDFLARE_VARIANT_ENUM.THUMBNAIL)}
                alt={data.title}
                className="relative z-0 object-cover object-center w-full aspect-video md:rounded-none"
                layout="fill"
                priority={priority}
              />
            </div>
            {/* <div className="absolute top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center text-white duration-200 hover:text-red-500">
              <YoutubeIcon className="w-12" />
            </div> */}
          </a>
        </Link>
        <div className="flex flex-col justify-center flex-1 md:block">
          <Link href={getEstateLink(data)} passHref>
            <a className="block py-0 md:pt-4 md:px-5">
              <div className="hidden font-semibold uppercase duration-200 md:block md:h-12 text-encacap-main md:line-clamp-2">
                {data.title}
              </div>
              <div className="block mb-1 font-semibold md:my-3">
                <span>
                  {data.price} {data.priceUnit.name}
                </span>
                <span className="px-1 text-gray-400 md:px-2">·</span>
                <span>
                  {data.area} {data.areaUnit.name}
                </span>
              </div>
              <div className="flex items-center">
                <LocationIcon className="flex-shrink-0 w-5 mr-2 text-zinc-500" />
                <div className="line-clamp-1">
                  {data.district.name}, {data.province.name}
                </div>
              </div>
            </a>
          </Link>
          <a href={`tel:${data.contact.phone}`} className="flex md:px-5 md:mt-2 md:mb-4">
            <Button color="gray" className="mt-3 md:mt-4 md:mb-2">
              <PhoneRingIcon className="w-5 mr-3" />
              {beautyPhoneNumber(data.contact.phone)}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EstateVertical;
