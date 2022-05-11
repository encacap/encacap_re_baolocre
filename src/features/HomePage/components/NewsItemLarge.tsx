import Link from "next/link";
import type { News } from "../../../app/interfaces";

interface NewsProps {
    news: News;
}

const NewsItemLarge = ({ news }: NewsProps) => {
    return (
        <Link href="/">
            <a className="pb-4 border-b-2 border-gray-100 md:mr-5 md:border-b-0 md:pb-0 hover:text-encacap-main">
                <div className="h-40">
                    <img
                        src="http://res.cloudinary.com/baolocre-estatesone/image/upload/c_thumb,g_center,w_400/v1640876287/baolocre_news/a1wf9f9yukxgzgblat4r.jpg"
                        alt="<%= newsItem.title %>"
                        className="object-cover object-center w-full h-full rounded-md "
                    />
                </div>
                <div className="pt-4">
                    <div className="font-semibold">{news.title}</div>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-4 mr-2">
                            <path
                                d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="m15.71 15.18-3.1-1.85c-.54-.32-.98-1.09-.98-1.72v-4.1"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span>11/05/2022 - 14:39:25</span>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default NewsItemLarge;
