import CustomHead from "../CustomHead/CustomHead";
import Footer from "./Components/Footer/Footer";
import Header, { HeaderProps } from "./Components/Header/Header";

interface LayoutProps extends HeaderProps {
    children: React.ReactNode;
    title?: string;
    footerColor?: "light" | "dark";
}

const PageLayout = ({ children, title = "Trang chủ", footerColor = "light", isHideMobileNavbar }: LayoutProps) => (
    <>
        <CustomHead title={title} />
        <Header isHideMobileNavbar={isHideMobileNavbar} />
        {children}
        <Footer color={footerColor} />
    </>
);

export default PageLayout;
