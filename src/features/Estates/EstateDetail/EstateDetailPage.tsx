import Breadcrumb from "../../../common/Breadcrumb/Breadcrumb";
import LocationIcon from "../../../common/Icons/LocationIcon";
import { ContentWrapper, ContentWrapperAside, ContentWrapperBody, PageLayout } from "../../../common/Layout";
import { EstateDetailPageProps } from "../../../types/pageProps";
import RandomNewsList from "../../News/Components/RandomNewsList";
import EstateContentHeader from "../Components/EstateContentHeader";
import EstateSearch from "../EstateList/Components/EstateSearch";
import FilterByRegion from "../EstateList/Components/FilterByRegion";
import ContactInformation from "./Components/ContactInfo";
import EstateDescription from "./Components/EstateDescription";
import EstateImageSlider from "./Components/EstateImageSlider/EstateImageSlider";
import EstateProperties from "./Components/EstateProperties";
import SameDistrictEstates from "./Components/SameDistrictEstates";
import SocialShareButtons from "./Components/SocialShareButtons/SocialShareButtons";
import SuggestionEstates from "./Components/SuggestionEstates";

function EstateDetailPage({ head, categories }: EstateDetailPageProps) {
  return (
    <PageLayout head={head} footerColor="dark">
      <ContentWrapper>
        <ContentWrapperBody>
          <EstateContentHeader categories={categories} />
          <EstateImageSlider />
          <Breadcrumb
            items={[
              {
                text: "Bất động sản bán",
                link: "bat-dong-san-ban",
              },
              {
                text: "Tất cả",
                link: "tat-ca",
              },
              {
                text: "Quảng Ngãi",
                link: "quang-ngai",
              },
              {
                text: "Tư Nghĩa",
                link: "tu-nghia",
              },
              {
                text: "La Hà",
                link: "la-ha",
              },
            ]}
          />
          <div className="pt-4 pb-3.5 text-2xl font-semibold text-encacap-main">
            ĐẤT NỀN TP BẢO LỘC. HẺM TRẦN KẾ XƯƠNG
          </div>
          <div className="flex font-semibold md:items-center">
            <LocationIcon className="flex-shrink-0 w-5 h-5 mt-1 mr-4 md:mt-0" />
            Đường Blaosire, Phường 2, Thành phố Bảo Lộc, Lâm Đồng
          </div>
          <EstateProperties />
          <ContactInformation className="pb-10 border-t-0 border-b-2 border-l-0 border-r-0 rounded-none md:hidden" />
          <div className="my-6">
            <EstateDescription />
            <SocialShareButtons />
          </div>
          <SameDistrictEstates />
          <SuggestionEstates />
          <RandomNewsList />
        </ContentWrapperBody>
        <ContentWrapperAside>
          <EstateSearch />
          <ContactInformation className="mt-5" />
          <FilterByRegion />
        </ContentWrapperAside>
      </ContentWrapper>
    </PageLayout>
  );
}

export default EstateDetailPage;
