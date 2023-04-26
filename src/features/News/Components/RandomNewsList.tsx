import NewsList from "../NewsList/Components/NewsList";

const RandomNewsList = () => {
  return (
    <div className="pt-4 mt-2 mb-8 border-t-2 border-gray-100 md:mb-0 md:pt-5 md:mt-8">
      <div className="mt-1 mb-2 text-lg font-semibold md:mb-6">Tin tức ngẫu nhiên</div>
      <NewsList />
    </div>
  );
};

export default RandomNewsList;
