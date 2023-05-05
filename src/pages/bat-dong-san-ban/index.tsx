import { DEFAULT_PAGE_SIZE } from "../../constants/common";
import EstateListPage from "../../features/Estates/EstateList/EstateListPage";
import { categoryService, configService, estateService } from "../../services";
import { EstateListPageProps } from "../../types/pageProps";

const Home = (props: EstateListPageProps) => {
  return <EstateListPage {...props} />;
};

export const getServerSideProps = async () => {
  const [siteName, categories, estateResponse] = await Promise.all([
    configService.getSiteName(),
    categoryService.getEstateCategories(),
    estateService.getEstates({
      page: 1,
      limit: DEFAULT_PAGE_SIZE,
    }),
  ]);

  const head = { title: "Danh sách bất động sản đang bán", siteName };
  return Promise.resolve({
    props: { head, categories, estates: estateResponse.data, estateMeta: estateResponse.meta },
  });
};

export default Home;
