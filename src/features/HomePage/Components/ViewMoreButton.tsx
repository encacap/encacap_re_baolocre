import Link from "next/link";
import ChevronRightIcon from "../../../common/Icons/ChevronRightIcon";

interface ViewMoreButtonProps {
  text: string;
  href: string;
}

const ViewMoreButton = ({ text, href }: ViewMoreButtonProps) => {
  return (
    <div className="flex justify-center mt-6 md:mt-10 md:mx-0">
      <Link href={href} passHref>
        <a
          className="flex items-center justify-center w-full py-3 pl-6 pr-4 font-semibold duration-200 bg-white border-2 border-gray-300 rounded-lg md:w-fit md:rounded-full hover:border-encacap-main hover:text-encacap-main"
          href="/"
        >
          {text}
          <ChevronRightIcon className="w-5 ml-2" />
        </a>
      </Link>
    </div>
  );
};

export default ViewMoreButton;
