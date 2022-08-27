import Breadcrumb from "../../../common/Breadcrumb/Breadcrumb";
import { ContentWrapper, ContentWrapperBody } from "../../../common/Layout";
import PageLayout from "../../../common/Layout/PageLayout";
import Pagination from "../../../common/Pagination/Pagination";
import { NewsListPageProps } from "../../../types/pageProps";
import HouseModalList from "../../HomePage/Components/HouseModal/HouseModalList";
import HouseModalContentHeader from "../Components/HouseModalContentHeader";

const HouseModalListPage = ({ head, categories }: NewsListPageProps) => {
  return (
    <PageLayout head={head} footerColor="dark">
      <ContentWrapper>
        <ContentWrapperBody>
          <HouseModalContentHeader categories={categories} />
          <Breadcrumb
            items={[
              {
                text: "Thư viện nhà mẫu",
                link: "thu-vien-nha-mau",
              },
              {
                text: "Tất cả",
                link: "tat-ca",
              },
            ]}
          />
          <div className="py-2 text-2xl font-semibold">{head.title}</div>
          <div className="mb-6 md:mb-8">Hiện có tất cả 7 nhà mẫu</div>
          <HouseModalList className="px-0 mt-8 md:grid-cols-2 lg:grid-cols-2" />
          <Pagination className="pt-3 mb-6 md:pt-4 md:justify-end md:mt-6 md:mb-0 md:border-t-0" />
        </ContentWrapperBody>
      </ContentWrapper>
    </PageLayout>
  );
};

export default HouseModalListPage;
