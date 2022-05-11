import NewsList from "./NewsList";

const NewsSection = () => (
    <section className="px-4 py-10 lg:px-10 xl:px-48 md:py-20">
        <div className="flex flex-col items-center">
            <div className="text-xs font-semibold tracking-widest text-center text-gray-400 uppercase ">
                Mới và nổi bật nhất
            </div>
            <div className="py-3 text-2xl md:text-4xl">Tin tức</div>
            <div className="w-20 h-1 mx-auto mt-4 bg-encacap-main" />
        </div>
        <NewsList />
        <div className="flex justify-center mt-10">
            <a
                href="/tin-tuc"
                className="flex items-center px-6 py-3 font-semibold duration-200 bg-white border-2 border-gray-300 rounded-full hover:border-encacap-main hover:text-encacap-main"
            >
                Xem thêm
                <span className="mx-1">4</span>
                tin tức khác
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 ml-2" fill="none">
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83"
                    />
                </svg>
            </a>
        </div>
    </section>
);

export default NewsSection;
