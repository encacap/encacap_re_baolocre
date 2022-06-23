import HomePage from "../features/HomePage/HomePage";
import { configService } from "../services";
import { HomePageProps } from "../types/pageProps";

const Home = (props: HomePageProps) => <HomePage {...props} />;

export const getServerSideProps = async () => {
    const head = { title: "Trang chủ" };
    const sliderImages = await configService.getHomepageSliderImages();
    return { props: { head, sliderImages } };
};

export default Home;
