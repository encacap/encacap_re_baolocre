import { estateCategories } from "../../const/data";
import EstateListPage from "../../features/Estates/EstateList/EstateListPage";
import { EstateListPageProps } from "../../types/pageProps";

function Home(props: EstateListPageProps) {
  return <EstateListPage {...props} />;
}

export const getServerSideProps = () => {
  const head = { title: "Danh sách bất động sản đang bán" };
  return Promise.resolve({ props: { head, categories: estateCategories } });
};

export default Home;
