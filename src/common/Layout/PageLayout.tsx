import { useEffect, useState } from "react";
import { getContactInformation } from "../../services/configService";
import { HTMLHeadType } from "../../types/commonTypes";
import { ContactInformationType } from "../../types/dataTypes";
import CustomHead from "../CustomHead/CustomHead";
import Footer from "./Components/Footer/Footer";
import Header, { HeaderProps } from "./Components/Header/Header";

interface LayoutProps extends HeaderProps {
    children: React.ReactNode;
    head?: HTMLHeadType;
    footerColor?: "light" | "dark";
}

const PageLayout = ({ children, head, footerColor = "light", isHideMobileNavbar }: LayoutProps) => {
    const [contactInformation, setContactInformation] = useState<ContactInformationType>();

    useEffect(() => {
        getContactInformation().then(setContactInformation);
    }, []);

    return (
        <>
            <CustomHead head={head} />
            <Header isHideMobileNavbar={isHideMobileNavbar} contactInformation={contactInformation} />
            {children}
            <Footer color={footerColor} contactInformation={contactInformation} />
        </>
    );
};

export default PageLayout;
