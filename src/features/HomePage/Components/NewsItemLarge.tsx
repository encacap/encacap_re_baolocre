import Image from "next/image";
import Link from "next/link";
import ClockIcon from "../../../common/Icons/ClockIcon";
import { NewsType } from "../../../types/commonTypes";

interface NewsProps {
  news: NewsType;
}

const NewsItemLarge = ({ news }: NewsProps) => {
  return (
    <Link href="/">
      <a className="pb-4 border-b-2 border-gray-100 md:mr-5 md:border-b-0 md:pb-0 hover:text-encacap-main">
        <div className="relative w-full aspect-video">
          <Image
            layout="fill"
            src="https://res.cloudinary.com/baolocre-estatesone/image/upload/c_thumb,g_center,w_400/v1640876287/baolocre_news/a1wf9f9yukxgzgblat4r.jpg"
            alt="<%= newsItem.title %>"
            className="block object-cover object-center w-full h-full rounded-md"
          />
        </div>
        <div className="pt-4">
          <div className="font-semibold">{news.title}</div>
          <div className="flex items-center mt-2 text-sm text-gray-500">
            <ClockIcon className="w-4 mr-2" />
            <span>11/05/2022 - 14:39:25</span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default NewsItemLarge;
