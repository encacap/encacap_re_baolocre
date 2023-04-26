import { newsCategories } from "../../const/data";
import NewsListPage from "../../features/News/NewsList/NewsListPage";
import { NewsListPageProps } from "../../types/pageProps";

function Home(props: NewsListPageProps) {
  return <NewsListPage {...props} />;
}

export const getServerSideProps = () => {
  const head = { title: "Danh sách tin túc mới nhất" };
  return Promise.resolve({ props: { head, categories: newsCategories } });
};

export default Home;
