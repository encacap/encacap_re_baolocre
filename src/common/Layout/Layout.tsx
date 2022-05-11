import CustomHead from "../CustomHead/CustomHead";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

interface LayoutProps {
    children: React.ReactNode;
    title?: string;
}

const Layout = ({ children, title = "Trang chủ" }: LayoutProps) => (
    <>
        <CustomHead title={title} />
        <Header />
        {children}
        <Footer />
    </>
);

export default Layout;
