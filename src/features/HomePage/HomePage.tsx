import Layout from "../../common/Layout/Layout";
import CategorySection from "./components/CategorySection";
import SearchSection from "./components/SearchSection";
import SliderSection from "./components/SliderSection";

const HomePage = () => (
    <Layout title="Trang chủ">
        <SliderSection />
        <SearchSection />
        <CategorySection />
    </Layout>
);

export default HomePage;
