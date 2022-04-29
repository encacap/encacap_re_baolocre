import CustomHead from "../CustomHead/CustomHead";
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
    </>
);

export default Layout;
