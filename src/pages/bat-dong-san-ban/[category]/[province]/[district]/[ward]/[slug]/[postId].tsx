import EstateDetailPage from "../../../../../../../features/Estates/EstateDetail/EstateDetailPage";
import { categoryService, configService, estateService } from "../../../../../../../services";
import { EstateDetailPageProps } from "../../../../../../../types/pageProps";

const Home = (props: EstateDetailPageProps) => {
  return <EstateDetailPage {...props} />;
};

export const getServerSideProps = async ({ params }) => {
  const { postId } = params;

  const [siteName, categories, estate] = await Promise.all([
    configService.getSiteName(),
    categoryService.getEstateCategories(),
    estateService.getEstateById(postId),
  ]);
  const [randomEstates, relativeEstates] = await Promise.all([
    estateService.getRandomEstates(6),
    estateService.getRelativeEstates(estate),
  ]);

  const head = { title: "Danh sách bất động sản đang bán", siteName };
  return Promise.resolve({ props: { head, categories, estate, randomEstates, relativeEstates } });
};

export default Home;
