import { DEFAULT_CLOUDFLARE_VARIANT_ENUM, IEstate, getImageURL } from "@encacap-group/types/dist/re";
import Image from "next/image";
import Link from "next/link";
import striptags from "striptags";
import { twMerge } from "tailwind-merge";
import { beautyPhoneNumber, getEstateLink } from "../../utils/helpers";
import Button from "../Button/Button";
import LocationIcon from "../Icons/LocationIcon";
import PhoneRingIcon from "../Icons/PhoneRingIcon";

interface EstateHorizontalProps {
  priority?: boolean;
  special?: boolean;
  estate: IEstate;
}

const EstateHorizontal = ({ priority = false, special = false, estate }: EstateHorizontalProps) => {
  return (
    <div className="w-full mb-4 overflow-hidden duration-200 group md:flex md:mt-4 md:mb-0 md:rounded-md hover:text-encacap-main md:hover:shadow-gray-100 md:hover:shadow-lg">
      {special && (
        <Link href={getEstateLink(estate)} passHref>
          <a className="block">
            <div className="relative flex items-center w-full bg-black rounded-lg aspect-video md:hidden">
              <Image
                src={getImageURL(estate.avatar, DEFAULT_CLOUDFLARE_VARIANT_ENUM.THUMBNAIL)}
                alt={estate.title}
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
      <Link href={getEstateLink(estate)} passHref>
        <a className="block">
          <div
            className={twMerge(
              "block py-3 font-semibold uppercase md:hidden text-encacap-main",
              special && "pb-0"
            )}
          >
            {estate.title}
          </div>
        </a>
      </Link>
      <div className="flex w-full">
        <Link href={getEstateLink(estate)} passHref>
          <a
            className={twMerge(
              "relative w-28 md:w-64 h-28 md:h-auto rounded-lg overflow-hidden flex items-center bg-gray-100 md:rounded-none",
              special && "hidden md:flex"
            )}
          >
            <div className="absolute inset-0 blur-xl">
              <Image
                src={getImageURL(estate.avatar, DEFAULT_CLOUDFLARE_VARIANT_ENUM.SMALL)}
                alt={estate.title}
                className="relative z-0 object-cover object-center w-full rounded-md aspect-video md:rounded-none"
                layout="fill"
                priority={priority}
                quality={1}
              />
            </div>
            <div className="relative flex items-center w-full bg-black aspect-video">
              <Image
                src={getImageURL(estate.avatar, DEFAULT_CLOUDFLARE_VARIANT_ENUM.THUMBNAIL)}
                alt={estate.title}
                className="relative z-0 object-cover object-center w-full rounded-md aspect-video md:rounded-none"
                layout="fill"
                priority={priority}
              />
            </div>
            {/* <div className="absolute top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center text-white duration-200 hover:text-red-500">
              <YoutubeIcon className="w-12" />
            </div> */}
          </a>
        </Link>
        <div
          className={twMerge(
            "flex flex-col justify-center flex-1 pl-4 md:border-l-transparent border-gray-100 rounded-r-md md:border-2 md:px-5 md:py-4",
            special && "pl-0"
          )}
        >
          <Link href={getEstateLink(estate)} passHref>
            <a className="flex flex-col flex-1">
              <div className="hidden font-semibold uppercase md:block text-encacap-main">{estate.title}</div>
              <div className="py-1 font-semibold md:py-2">
                <span className="">
                  {estate.price} {estate.priceUnit.name}
                </span>
                <span className="px-2 text-gray-400">·</span>
                <span>
                  {estate.area} {estate.areaUnit.name}
                </span>
              </div>
              <div className="flex items-center">
                <LocationIcon className="w-5 mr-2" />
                <div className="line-clamp-1">
                  {estate.district.name}, {estate.province.name}
                </div>
              </div>

              <div
                className="flex-1 hidden mt-2 text-gray-500 md:line-clamp-3"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: striptags(estate.description),
                }}
              />
            </a>
          </Link>
          <div className="flex mt-3 mb-1 md:mt-5">
            <a href={`tel:${estate.contact.phone}`} className="block w-full">
              <Button color="gray" className="w-full">
                <PhoneRingIcon className="w-5 mr-3" />
                <div>{beautyPhoneNumber(estate.contact.phone)}</div>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateHorizontal;
