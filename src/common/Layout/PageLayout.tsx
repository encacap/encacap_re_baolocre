import { HTMLHeadType } from "../../types/commonTypes";
import CustomHead from "../CustomHead/CustomHead";
import Footer from "./Components/Footer/Footer";
import Header, { HeaderProps } from "./Components/Header/Header";

interface LayoutProps extends HeaderProps {
    children: React.ReactNode;
    head?: HTMLHeadType;
    footerColor?: "light" | "dark";
}

const PageLayout = ({ children, head, footerColor = "light", isHideMobileNavbar }: LayoutProps) => (
    <>
        <CustomHead head={head} />
        <Header isHideMobileNavbar={isHideMobileNavbar} />
        {children}
        <Footer color={footerColor} />
    </>
);

export default PageLayout;
