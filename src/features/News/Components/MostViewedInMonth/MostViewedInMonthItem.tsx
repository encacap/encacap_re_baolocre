import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface MostViewedInMonthItemProps {
    title?: string;
    image: string;
    href: string;
    className?: string;
}

const MostViewedInMonthItem = ({ href, title, image, className }: MostViewedInMonthItemProps) => {
    return (
        <Link href={href} passHref>
            <a
                className={twMerge(
                    "py-4 duration-200 hover:text-encacap-main flex border-b-2 border-gray-100 first:mt-0 last:border-b-0",
                    className
                )}
            >
                <div className="flex-shrink-0 w-10 h-10 mt-1 mr-4 overflow-hidden rounded-lg">
                    <Image
                        width={40}
                        height={40}
                        src={image}
                        alt="News"
                        className="object-cover object-center w-full h-full"
                    />
                </div>
                {title && title}
            </a>
        </Link>
    );
};

export default MostViewedInMonthItem;
