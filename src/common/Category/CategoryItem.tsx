import Link from "next/link";
import { CategoryItemProps } from "../../types/commonProps";

const CategoryItem = ({ name, url, image, ...otherProps }: CategoryItemProps) => {
    return (
        <Link href={url}>
            <a
                className="flex flex-col items-center flex-1 pt-2 pb-2 mb-2 mr-4 duration-200 rounded-md md:flex-none md:w-40 md:px-4 md:pb-4 md:bg-gray-100 hover:bg-encacap-main hover:text-white last:mr-0"
                {...otherProps}
            >
                <div className="w-16 h-16 overflow-hidden border-2 border-gray-200 rounded-full md:mt-4">
                    <img src={image} alt={name} className="object-cover object-center w-full h-full" />
                </div>
                <div className="flex flex-col justify-center flex-1 px-1 mt-4 mb-1 text-center">
                    <div className="font-semibold">{name}</div>
                </div>
            </a>
        </Link>
    );
};

export default CategoryItem;
