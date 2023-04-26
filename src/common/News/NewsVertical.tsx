import Image from "next/image";
import Link from "next/link";
import ClockIcon from "../Icons/ClockIcon";

const NewsVertical = () => {
  return (
    <Link
      href="/tin-tuc/thong-tin-quy-hoach/lam-dong-cho-phep-lap-quy-hoach-du-an-quan-the-vui-choi-giai-tri-lang-chau-au-18000-ha/1"
      passHref
    >
      <a className="pb-4 duration-100 border-b-2 border-gray-100 hover:text-encacap-main last:border-b-0">
        <div className="flex">
          <div className="relative flex-shrink-0 w-20 h-20 overflow-hidden bg-gray-100 rounded-md md:w-24 md:h-24">
            <Image
              layout="fill"
              src="https://res.cloudinary.com/baolocre-estatesone/image/upload/c_thumb,g_center,w_300/v1649743800/baolocre_news/mfdolis3z8ljqapzz43x.jpg"
              alt="<%- newsItem.title %>"
              className="object-cover object-center w-full h-full rounded-md"
            />
          </div>
          <div>
            <div className="flex items-center h-full">
              <div className="ml-4">
                <div className="font-semibold line-clamp-2">
                  Lâm Đồng cho phép lập quy hoạch dự án Quần thể vui chơi giải trí làng Châu Âu 18.000 ha
                </div>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <ClockIcon className="w-4 mr-2" />
                  06:10:25 - 12/04/2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default NewsVertical;
