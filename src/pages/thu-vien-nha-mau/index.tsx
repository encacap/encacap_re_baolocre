import { houseModalCategories } from "../../const/data";
import HouseModalListPage from "../../features/HouseModal/HouseModalList/HouseModalListPage";
import { NewsListPageProps } from "../../types/pageProps";

const Home = (props: NewsListPageProps) => <HouseModalListPage {...props} />;

export const getServerSideProps = () => {
  const head = { title: "Danh sách tất cả nhà mẫu" };
  return Promise.resolve({ props: { head, categories: houseModalCategories } });
};

export default Home;
