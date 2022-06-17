import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
    href: string;
    image: string;
    name: string;
}

const CategoryItem = ({ href, image, name }: CategoryItemProps) => (
    <Link href={href}>
        <a className="flex flex-col items-center w-full py-8 duration-200 border-2 border-transparent rounded-lg md:justify-center md:px-10 md:border-gray-100 hover:shadow-lg hover:text-encacap-main hover:border-encacap-main">
            <div className="relative flex items-center w-20 h-20 overflow-hidden border-2 border-gray-100 rounded-full md:w-32 md:h-32">
                <Image src={image} alt={name} layout="fill" objectFit="cover" quality={100} />
            </div>
            <div className="pt-6 font-medium text-center">{name}</div>
        </a>
    </Link>
);

export default CategoryItem;
