import Image from "next/image";

interface REDSwitchImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

function EstateImageSliderImage({ src, alt, priority }: REDSwitchImageProps) {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 -z-10 blur-xl bg-white/30">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          quality={1}
          priority={priority}
          className="object-cover object-center w-full h-full"
        />
      </div>
      <Image
        layout="fill"
        src={src}
        alt={alt}
        priority={priority}
        className="object-contain object-center w-full h-full"
      />
    </div>
  );
}

export default EstateImageSliderImage;
