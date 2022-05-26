import { HomePageProps } from "../common/Types/pageProps";
import HomePage from "../features/HomePage/HomePage";

const Home = (props: HomePageProps) => <HomePage {...props} />;

export const getServerSideProps = async () => {
    const head = { title: "Trang chủ" };
    return { props: { head } };
};

export default Home;
