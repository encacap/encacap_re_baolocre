import Layout from "../../common/Layout/Layout";
import CategorySection from "./components/CategorySection";
import EstateListSection from "./components/EstateListSection";
import HouseModelSection from "./components/HouseModelSection";
import NewsSection from "./components/NewsSection";
import SearchSection from "./components/SearchSection";
import SliderSection from "./components/SliderSection";

interface HomeProps {
    head: {
        title: string;
    };
}

const HomePage = ({ head }: HomeProps) => (
    <Layout title={head.title} footerColor="dark">
        <SliderSection />
        <SearchSection />
        <CategorySection />
        <EstateListSection />
        <NewsSection />
        <HouseModelSection />
    </Layout>
);

export default HomePage;
