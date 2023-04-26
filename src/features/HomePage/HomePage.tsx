import PageLayout from "../../common/Layout/PageLayout";
import { HomePageProps } from "../../types/pageProps";
import CategorySection from "./Components/CategorySection";
import EstateListSection from "./Components/EstateListSection";
import HouseModelSection from "./Components/HouseModelSection";
import NewsSection from "./Components/NewsSection";
import SearchSection from "./Components/SearchSection";
import SliderSection from "./Components/SliderSection";

function HomePage({ head, sliderImages }: HomePageProps) {
  return (
    <PageLayout head={head} footerColor="dark" isHideMobileNavbar>
      <SliderSection images={sliderImages} />
      <SearchSection />
      <CategorySection />
      <EstateListSection />
      <NewsSection />
      <HouseModelSection />
    </PageLayout>
  );
}

export default HomePage;
