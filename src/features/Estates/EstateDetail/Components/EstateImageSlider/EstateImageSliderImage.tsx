import {
  DEFAULT_CLOUDFLARE_VARIANT_ENUM,
  ICloudflareImageResponse,
  getImageURL,
} from "@encacap-group/types/dist/re";
import Image from "next/image";

interface REDSwitchImageProps {
  image: ICloudflareImageResponse;
  alt: string;
  priority?: boolean;
}

const EstateImageSliderImage = ({ image, alt, priority }: REDSwitchImageProps) => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 -z-10 blur-xl bg-white/30">
        <Image
          src={getImageURL(image, DEFAULT_CLOUDFLARE_VARIANT_ENUM.SMALL)}
          alt={alt}
          layout="fill"
          priority={false}
          className="object-cover object-center w-full h-full"
        />
      </div>
      <Image
        layout="fill"
        src={getImageURL(image, DEFAULT_CLOUDFLARE_VARIANT_ENUM.PUBLIC)}
        alt={alt}
        priority={priority}
        className="object-contain object-center w-full h-full"
      />
    </div>
  );
};

export default EstateImageSliderImage;
