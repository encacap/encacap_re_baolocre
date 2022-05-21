import CustomHead from "../CustomHead/CustomHead";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

interface LayoutProps {
    children: React.ReactNode;
    title?: string;
    footerColor?: "light" | "dark";
}

const Layout = ({ children, title = "Trang chủ", footerColor = "light" }: LayoutProps) => (
    <>
        <CustomHead title={title} />
        <Header />
        {children}
        <Footer color={footerColor} />
    </>
);

export default Layout;
