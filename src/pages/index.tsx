import HomePage from "../features/HomePage/HomePage";
import { HomePageProps } from "../types/pageProps";

const Home = (props: HomePageProps) => <HomePage {...props} />;

export const getServerSideProps = async () => {
    const head = { title: "Trang chủ" };
    return { props: { head } };
};

export default Home;
