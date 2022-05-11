import HomePage from "../features/HomePage/HomePage";

interface HomeProps {
    head: {
        title: string;
    };
}

const Home = (props: HomeProps) => <HomePage {...props} />;

export const getServerSideProps = async () => {
    const head = { title: "Trang chủ" };
    return { props: { head } };
};

export default Home;
