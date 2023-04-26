import NewsList from "./NewsList";
import ViewMoreButton from "./ViewMoreButton";

function NewsSection() {
  return (
    <section className="px-4 py-10 lg:px-10 xl:px-48 md:py-20">
      <div className="flex flex-col items-center">
        <div className="text-xs font-semibold tracking-widest text-center text-gray-400 uppercase ">
          Mới và nổi bật nhất
        </div>
        <div className="py-3 text-2xl md:text-4xl">Tin tức</div>
        <div className="w-20 h-1 mx-auto mt-4 bg-encacap-main" />
      </div>
      <NewsList />
      <ViewMoreButton href="/tin-tuc" text="Xem thêm 4 tin tức khác" />
    </section>
  );
}

export default NewsSection;
