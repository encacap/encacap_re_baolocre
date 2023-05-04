import HomePage from "../features/HomePage/HomePage";
import { configService, estateService } from "../services";
import { HomePageProps } from "../types/pageProps";

const Home = (props: HomePageProps) => {
  return <HomePage {...props} />;
};

export const getServerSideProps = async () => {
  const [sliderImages, siteName, estates] = await Promise.all([
    configService.getHomepageSliderImages(),
    configService.getSiteName(),
    estateService.getEstates({
      page: 1,
      limit: 8,
    }),
  ]);

  const head = { title: "Trang chủ", siteName };

  return { props: { head, sliderImages, estates: estates.data, estateMeta: estates.meta } };
};

export default Home;
