import HomePage from "../features/HomePage/HomePage";
import { HomePageProps } from "../types/pageProps";

const Home = (props: HomePageProps) => <HomePage {...props} />;

export const getServerSideProps = () => {
    const head = { title: "Trang chủ" };
    return Promise.resolve({ props: { head } });
};

export default Home;
