import Breadcrumb from "../../../common/Breadcrumb/Breadcrumb";
import { ContentWrapper, ContentWrapperAside, ContentWrapperBody } from "../../../common/Layout";
import PageLayout from "../../../common/Layout/PageLayout";
import Pagination from "../../../common/Pagination/Pagination";
import { NewsListPageProps } from "../../../types/pageProps";
import MostViewedInMonth from "../Components/MostViewedInMonth/MostViewedInMonth";
import NewsContentHeader from "../Components/NewsContentHeader";
import NewsSearch from "../Components/NewsSearch";
import NewsList from "./Components/NewsList";

function NewsListPage({ head, categories }: NewsListPageProps) {
  return (
    <PageLayout head={head} footerColor="dark">
      <ContentWrapper>
        <ContentWrapperBody>
          <NewsContentHeader categories={categories} />
          <Breadcrumb
            items={[
              {
                text: "Tin tức",
                link: "tin-tuc",
              },
              {
                text: "Tất cả",
                link: "tat-ca",
              },
            ]}
          />
          <div className="py-2 text-2xl font-semibold">Danh sách tin tức mới nhất</div>
          <div className="mb-6 md:mb-8">Hiện có tất cả 7 tin tức</div>
          <NewsList />
          <Pagination className="pt-6 mb-6 border-t-2 border-gray-100 md:pt-4 md:justify-end md:mt-6 md:mb-0 md:border-t-0" />
        </ContentWrapperBody>
        <ContentWrapperAside>
          <NewsSearch />
          <MostViewedInMonth />
        </ContentWrapperAside>
      </ContentWrapper>
    </PageLayout>
  );
}

export default NewsListPage;
