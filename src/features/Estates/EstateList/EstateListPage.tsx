import Breadcrumb from "../../../common/Breadcrumb/Breadcrumb";
import Category from "../../../common/Category/Category";
import { ContentWrapper, ContentWrapperAside, ContentWrapperBody } from "../../../common/Layout";
import PageLayout from "../../../common/Layout/PageLayout";
import { EstateListPageProps } from "../../../common/Types/pageProps";
import EstateList from "./Components/EstateList";
import EstateSearch from "./Components/EstateSearch";
import FilterByArea from "./Components/FilterByArea";

const EstateListPage = ({ head, categories }: EstateListPageProps) => {
    return (
        <PageLayout title={head.title} footerColor="dark">
            <ContentWrapper>
                <ContentWrapperBody>
                    <Category categories={categories} />
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
                    <div className="mb-6 md:mb-8">
                        Hiện có 7 bất động sản
                        <span className="mx-1 text-gray-400 md:mx-2">•</span>
                        <span className="text-gray-400">Đang hiển thị trang 1 trên tổng số 1 trang</span>
                    </div>
                    <EstateList />
                </ContentWrapperBody>
                <ContentWrapperAside>
                    <EstateSearch />
                    <FilterByArea />
                </ContentWrapperAside>
            </ContentWrapper>
        </PageLayout>
    );
};

export default EstateListPage;
