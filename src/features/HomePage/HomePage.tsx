import PageLayout from "../../common/Layout/PageLayout";
import { HomePageProps } from "../../common/Types/pageProps";
import CategorySection from "./components/CategorySection";
import EstateListSection from "./components/EstateListSection";
import HouseModelSection from "./components/HouseModelSection";
import NewsSection from "./components/NewsSection";
import SearchSection from "./components/SearchSection";
import SliderSection from "./components/SliderSection";

const HomePage = ({ head }: HomePageProps) => (
    <PageLayout title={head.title} footerColor="dark" isHideMobileNavbar>
        <SliderSection />
        <SearchSection />
        <CategorySection />
        <EstateListSection />
        <NewsSection />
        <HouseModelSection />
    </PageLayout>
);

export default HomePage;
