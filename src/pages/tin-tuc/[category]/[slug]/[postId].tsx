import { newsCategories } from "../../../../const/data";
import NewsDetailPage from "../../../../features/News/NewsDetail/NewsDetailPage";
import { NewsDetailPageProps } from "../../../../types/pageProps";

function Home(props: NewsDetailPageProps) {
  return <NewsDetailPage {...props} />;
}

export const getServerSideProps = () => {
  const head = {
    title: "Lâm Đồng cho phép lập quy hoạch dự án Quần thể vui chơi giải trí làng Châu Âu 18.000 ha",
  };
  return Promise.resolve({ props: { head, categories: newsCategories } });
};

export default Home;
