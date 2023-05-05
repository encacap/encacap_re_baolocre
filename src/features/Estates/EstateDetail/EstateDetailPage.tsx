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

const EstateDetailPage = ({
  head,
  categories,
  estate,
  randomEstates,
  relativeEstates,
}: EstateDetailPageProps) => {
  return (
    <PageLayout head={head} footerColor="dark">
      <ContentWrapper>
        <ContentWrapperBody>
          <EstateContentHeader categories={categories} />
          <EstateImageSlider
            avatar={estate.avatar}
            images={estate.images}
            youtubeId={estate.youtubeId}
            alt={estate.title}
          />
          <Breadcrumb
            items={[
              {
                text: "Bất động sản bán",
                link: "bat-dong-san-ban",
              },
              {
                text: estate.category.name,
                link: estate.category.code,
              },
              {
                text: estate.province.name,
                link: estate.province.code,
              },
              {
                text: estate.district.name,
                link: estate.district.code,
              },
              {
                text: estate.ward.name,
                link: estate.ward.code,
              },
            ]}
          />
          <div className="pt-4 pb-3.5 text-2xl font-semibold text-encacap-main">{estate.title}</div>
          <div className="flex font-semibold md:items-start">
            <LocationIcon className="flex-shrink-0 w-5 h-5 mt-1 mr-4 md:mt-0.5" />
            {estate.address}, {estate.ward.name}, {estate.district.name}, {estate.province.name}
          </div>
          <EstateProperties estate={estate} />
          <ContactInformation
            className="pb-10 border-t-0 border-b-2 border-l-0 border-r-0 rounded-none md:hidden"
            data={estate.contact}
          />
          <div className="my-6">
            <EstateDescription data={estate.description} />
            <SocialShareButtons />
          </div>
          <SameDistrictEstates data={relativeEstates} estate={estate} />
          <SuggestionEstates data={randomEstates} />
          <RandomNewsList />
        </ContentWrapperBody>
        <ContentWrapperAside>
          <EstateSearch />
          <ContactInformation data={estate.contact} className="mt-5" />
          <FilterByRegion />
        </ContentWrapperAside>
      </ContentWrapper>
    </PageLayout>
  );
};

export default EstateDetailPage;
