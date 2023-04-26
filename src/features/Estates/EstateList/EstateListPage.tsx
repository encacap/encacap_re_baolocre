import Breadcrumb from "../../../common/Breadcrumb/Breadcrumb";
import { ContentWrapper, ContentWrapperAside, ContentWrapperBody } from "../../../common/Layout";
import PageLayout from "../../../common/Layout/PageLayout";
import Pagination from "../../../common/Pagination/Pagination";
import { EstateListPageProps } from "../../../types/pageProps";
import EstateContentHeader from "../Components/EstateContentHeader";
import EstateList from "./Components/EstateList";
import EstateSearch from "./Components/EstateSearch";
import FilterByArea from "./Components/FilterByArea";
import FilterByRegion from "./Components/FilterByRegion";

const EstateListPage = ({ head, categories }: EstateListPageProps) => {
  return (
    <PageLayout head={head} footerColor="dark">
      <ContentWrapper>
        <ContentWrapperBody>
          <EstateContentHeader categories={categories} />
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
            ]}
          />
          <div className="py-2 text-2xl font-semibold">Danh sách bất động sản bán</div>
          <div className="mb-6 md:mb-8">Hiện có 7 bất động sản</div>
          <EstateList />
          <Pagination className="pt-6 mt-4 mb-6 border-t-2 border-gray-100 md:pt-4 md:justify-end md:mt-0 md:mb-0 md:border-t-0" />
        </ContentWrapperBody>
        <ContentWrapperAside>
          <EstateSearch />
          <FilterByArea />
          <FilterByRegion />
        </ContentWrapperAside>
      </ContentWrapper>
    </PageLayout>
  );
};

export default EstateListPage;
