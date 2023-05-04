import { estateCategories } from "../../../../../../../constants/data";
import EstateDetailPage from "../../../../../../../features/Estates/EstateDetail/EstateDetailPage";
import { EstateDetailPageProps } from "../../../../../../../types/pageProps";

const Home = (props: EstateDetailPageProps) => {
  return <EstateDetailPage {...props} />;
};

export const getServerSideProps = () => {
  const head = { title: "Danh sách bất động sản đang bán" };
  return Promise.resolve({ props: { head, categories: estateCategories } });
};

export default Home;
