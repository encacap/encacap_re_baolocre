import Breadcrumb from "../../../common/Breadcrumb/Breadcrumb";
import ClockIcon from "../../../common/Icons/ClockIcon";
import { ContentWrapper, ContentWrapperAside, ContentWrapperBody, PageLayout } from "../../../common/Layout";
import { NewsDetailPageProps } from "../../../types/pageProps";
import SuggestionEstates from "../../Estates/EstateDetail/Components/SuggestionEstates";
import MostViewedInMonth from "../Components/MostViewedInMonth/MostViewedInMonth";
import NewsContentHeader from "../Components/NewsContentHeader";
import NewsSearch from "../Components/NewsSearch";
import RandomNewsList from "../Components/RandomNewsList";

function NewsDetailPage({ head, categories }: NewsDetailPageProps) {
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
          <div className="py-2 text-2xl font-semibold">{head.title}</div>
          <div className="flex items-center pb-5 mt-1 text-sm text-gray-500 border-b-2 border-gray-100">
            <ClockIcon className="w-4 mr-2" />
            06:52:07 - 12/04/2022
          </div>
          <div className="mt-4 news-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet perspiciatis amet, in minus
              saepe inventore hic mollitia delectus velit quo suscipit accusantium fuga maxime quisquam,
              facere doloremque molestias at provident?
            </p>
          </div>
          <SuggestionEstates />
          <RandomNewsList />
        </ContentWrapperBody>
        <ContentWrapperAside>
          <NewsSearch />
          <MostViewedInMonth />
        </ContentWrapperAside>
      </ContentWrapper>
    </PageLayout>
  );
}

export default NewsDetailPage;
