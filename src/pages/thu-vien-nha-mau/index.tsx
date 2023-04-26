import { houseModalCategories } from "../../const/data";
import HouseModalListPage from "../../features/HouseModal/HouseModalList/HouseModalListPage";
import { NewsListPageProps } from "../../types/pageProps";

function Home(props: NewsListPageProps) {
  return <HouseModalListPage {...props} />;
}

export const getServerSideProps = () => {
  const head = { title: "Danh sách tất cả nhà mẫu" };
  return Promise.resolve({ props: { head, categories: houseModalCategories } });
};

export default Home;
